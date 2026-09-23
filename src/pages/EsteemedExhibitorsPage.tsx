import React, { useState, useMemo } from "react";
import exhibitorsList from "../data/exhibitors.json";
import { storageService } from "../services/storageService";

interface EsteemedExhibitorsPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const EsteemedExhibitorsPage: React.FC<EsteemedExhibitorsPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>(() => storageService.getBookmarks());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const categories = [
    "All",
    "Machine Tools & CNC",
    "Foundry & Metallurgy",
    "Auto Components",
    "Automation & Robotics",
    "Tooling & Dies",
    "Welding & Cutting",
    "Pneumatics & Hydraulics",
    "Industrial Supplies"
  ];

  const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  const toggleBookmark = (name: string) => {
    storageService.toggleBookmark(name);
    setBookmarks(storageService.getBookmarks());
  };

  const filteredExhibitors = useMemo(() => {
    return exhibitorsList.filter((ex) => {
      // Search
      const matchesSearch =
        ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.hall.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.stall.toLowerCase().includes(searchTerm.toLowerCase());

      // Category
      const matchesCategory =
        selectedCategory === "All" || ex.category === selectedCategory;

      // Letter
      const matchesLetter =
        selectedLetter === "All" || ex.name.toUpperCase().startsWith(selectedLetter);

      // Bookmarks
      const matchesBookmark =
        !showBookmarksOnly || bookmarks.includes(ex.name);

      return matchesSearch && matchesCategory && matchesLetter && matchesBookmark;
    });
  }, [searchTerm, selectedCategory, selectedLetter, showBookmarksOnly, bookmarks]);

  const totalPages = Math.ceil(filteredExhibitors.length / itemsPerPage);
  const paginatedList = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredExhibitors.slice(start, start + itemsPerPage);
  }, [filteredExhibitors, currentPage]);

  const handleInquire = (exhibitorName: string) => {
    onNavigate("contact-us", { message: `Inquiry regarding exhibitor booth: ${exhibitorName}` });
  };

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            EXHIBITOR DIRECTORY
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Esteemed Exhibitor's Directory
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Explore 294+ prominent manufacturers, engineering technology providers and suppliers participating at KIE.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Filter Controls Bar */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input
                type="text"
                placeholder="Search by company name, stall number..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#f3701e]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick stats & Bookmarks toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={() => {
                  setShowBookmarksOnly(!showBookmarksOnly);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  showBookmarksOnly
                    ? "bg-[#f3701e] text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                }`}
              >
                <i className={`bi ${showBookmarksOnly ? "bi-bookmark-fill" : "bi-bookmark"}`}></i>
                <span>Saved Booths ({bookmarks.length})</span>
              </button>

              <span className="text-xs font-bold text-slate-500 bg-white px-3 py-2 rounded-xl border border-slate-200">
                Found <strong className="text-[#153a6b]">{filteredExhibitors.length}</strong> Brands
              </span>
            </div>
          </div>

          {/* Alphabet Bar */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none border-t border-slate-200/60 pt-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Alphabet:</span>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  setSelectedLetter(letter);
                  setCurrentPage(1);
                }}
                className={`min-w-[26px] h-7 rounded-md text-xs font-bold transition-colors ${
                  selectedLetter === letter
                    ? "bg-[#153a6b] text-white"
                    : "text-slate-600 hover:bg-slate-200"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-200/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#153a6b] text-white font-bold shadow-xs"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Exhibitor Cards Grid */}
        {filteredExhibitors.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <i className="bi bi-search text-4xl text-slate-300 block mb-2"></i>
            <h3 className="text-base font-bold text-slate-700">No Exhibitors Found</h3>
            <p className="text-xs text-slate-400 mt-1">Try resetting your search query or filter selection.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLetter("All");
                setShowBookmarksOnly(false);
              }}
              className="mt-4 bg-[#153a6b] text-white text-xs font-bold px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedList.map((ex) => {
              const isBookmarked = bookmarks.includes(ex.name);
              return (
                <div
                  key={ex.id}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#f3701e] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-orange-50 text-[#f3701e] px-2 py-0.5 rounded">
                        {ex.category}
                      </span>
                      <button
                        onClick={() => toggleBookmark(ex.name)}
                        className="text-slate-400 hover:text-[#f3701e] transition-colors p-1"
                        title={isBookmarked ? "Remove bookmark" : "Save booth to visit"}
                      >
                        <i className={`bi ${isBookmarked ? "bi-bookmark-fill text-[#f3701e]" : "bi-bookmark"}`}></i>
                      </button>
                    </div>

                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#153a6b] transition-colors mb-2 leading-snug">
                      {ex.name}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-mono font-bold text-slate-700">
                        {ex.hall}
                      </span>
                      <span className="text-[11px] font-mono text-slate-600">
                        {ex.stall}
                      </span>
                    </div>

                    <button
                      onClick={() => handleInquire(ex.name)}
                      className="text-[11px] font-bold text-[#153a6b] hover:text-[#f3701e] flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire</span>
                      <i className="bi bi-arrow-right-short text-sm"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold disabled:opacity-30 hover:bg-slate-100"
            >
              Previous
            </button>
            <span className="text-xs font-mono font-bold text-slate-600 px-3">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold disabled:opacity-30 hover:bg-slate-100"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
