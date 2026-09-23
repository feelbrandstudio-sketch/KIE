import React, { useState, useMemo, useEffect } from "react";
import exhibitorsData from "../data/exhibitors.json";
import { EXHIBITOR_SECTORS, DOWNLOADS_LIST } from "../data/expoData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

interface SearchResult {
  title: string;
  category: "Page" | "Exhibitor" | "Sector" | "Download";
  pageTarget: string;
  meta?: string;
}

const ALL_PAGES = [
  { title: "Home (Expo Dates, Venue & Highlights)", target: "home", meta: "Dates: 28 Feb, 1 & 2 March 2027" },
  { title: "About KIE 2027 (Platform & Renewed Vision)", target: "about-kie", meta: "Platform history and objectives" },
  { title: "About Us (VisionEdge Group Organizer)", target: "about-us", meta: "Mission, vision, and principles" },
  { title: "Why Kolhapur (Industrial & Foundry Hub)", target: "why-kolhapur", meta: "MIDCs, clusters, strategic location" },
  { title: "Industry Statistics (Foundry & Machine Tools)", target: "industry-statistics", meta: "USD 22B Market, market data" },
  { title: "Exhibition Venue & Directions", target: "exhibition-venue", meta: "Merry Weather Ground, Map, Road/Air/Rail" },
  { title: "Why Exhibit (Connect, Showcase, Grow)", target: "why-exhibit", meta: "Buyer outreach & marketing plan" },
  { title: "Exhibitor Profile (22 Industrial Sectors)", target: "exhibitor-profile", meta: "CNC, Foundry, Automation, Tools" },
  { title: "Stall Charges & Shell Scheme Guide", target: "stall-charges", meta: "Rates ₹9,500 / sq.m, calculator" },
  { title: "Exhibitor Registration (Stall Booking)", target: "exhibitor-registration", meta: "Book booth, customize requirements" },
  { title: "Esteemed Exhibitors Directory (294 Brands)", target: "esteemed-exhibitor", meta: "Complete searchable company list" },
  { title: "Why Visit (Discover, Experience, Connect)", target: "why-visit", meta: "Visitor benefits and opportunities" },
  { title: "Visitor Profile (Industries & Designations)", target: "visitor-profile", meta: "Plant heads, engineers, procurement" },
  { title: "Visitor Registration (Free Instant E-Badge)", target: "visitor-registration", meta: "Get instant digital QR entry pass" },
  { title: "Visitor Info & Exhibition Guidelines", target: "visitor-info", meta: "Timings, badge collection, rules" },
  { title: "Downloads Center (Brochure, Forms & Manual)", target: "downloads", meta: "Official PDF files, layout, logo pack" },
  { title: "Supporting Industry Associations", target: "supporting-associations", meta: "EEPC, GSMA, MAKH, Belgaum Chamber" },
  { title: "Photo & Video Gallery", target: "gallery", meta: "Machinery, stalls, dignitaries, networking" },
  { title: "Contact Us & Inquiry Desk", target: "contact-us", meta: "Phone, WhatsApp, email, office address" },
  { title: "Organizers & Leads Management Portal", target: "admin-portal", meta: "View registrations and export CSV" }
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // toggle search
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const list: SearchResult[] = [];

    // Match Pages
    ALL_PAGES.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.meta.toLowerCase().includes(q) || p.target.toLowerCase().includes(q)) {
        list.push({
          title: p.title,
          category: "Page",
          pageTarget: p.target,
          meta: p.meta
        });
      }
    });

    // Match Exhibitors
    exhibitorsData.forEach(ex => {
      if (ex.name.toLowerCase().includes(q) || ex.category.toLowerCase().includes(q)) {
        list.push({
          title: ex.name,
          category: "Exhibitor",
          pageTarget: "esteemed-exhibitor",
          meta: `${ex.category} • ${ex.hall} (${ex.stall})`
        });
      }
    });

    // Match Sectors
    EXHIBITOR_SECTORS.forEach(sec => {
      if (sec.title.toLowerCase().includes(q)) {
        list.push({
          title: sec.title,
          category: "Sector",
          pageTarget: "exhibitor-profile",
          meta: "Industrial Sector"
        });
      }
    });

    // Match Downloads
    DOWNLOADS_LIST.forEach(d => {
      if (d.title.toLowerCase().includes(q) || (d.subtitle && d.subtitle.toLowerCase().includes(q))) {
        list.push({
          title: d.title,
          category: "Download",
          pageTarget: "downloads",
          meta: `${d.size} • PDF Document`
        });
      }
    });

    return list.slice(0, 15);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4 font-sans animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
          <i className="bi bi-search text-slate-400 text-lg"></i>
          <input
            type="text"
            placeholder="Search all 19 pages, 294 exhibitors, sectors, downloads, stall charges..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-slate-800 text-sm placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-slate-400 hover:text-slate-600 text-xs">
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold px-2.5 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <div className="p-6 text-center text-slate-500">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Popular Quick Links</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {ALL_PAGES.slice(0, 8).map((p) => (
                  <button
                    key={p.target}
                    onClick={() => {
                      onNavigate(p.target);
                      onClose();
                    }}
                    className="bg-slate-100 hover:bg-orange-50 hover:text-[#f3701e] text-slate-700 text-xs px-3 py-1.5 rounded-full transition-colors font-medium border border-slate-200"
                  >
                    {p.title.split("(")[0]}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <i className="bi bi-emoji-neutral text-3xl text-slate-300 block mb-2"></i>
              <p className="text-sm font-semibold text-slate-700">No results found for "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "Foundry", "CNC", "Venue", "Charges", "Pass", or company names.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {results.map((r, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onNavigate(r.pageTarget);
                    onClose();
                  }}
                  className="w-full text-left p-3 hover:bg-slate-50 rounded-lg flex items-center justify-between group transition-colors"
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        r.category === "Page"
                          ? "bg-blue-100 text-[#153a6b]"
                          : r.category === "Exhibitor"
                          ? "bg-emerald-100 text-emerald-800"
                          : r.category === "Sector"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {r.category}
                      </span>
                      <span className="font-semibold text-sm text-slate-800 group-hover:text-[#f3701e] transition-colors">
                        {r.title}
                      </span>
                    </div>
                    {r.meta && (
                      <p className="text-xs text-slate-500 mt-0.5 pl-1">{r.meta}</p>
                    )}
                  </div>
                  <i className="bi bi-chevron-right text-slate-300 group-hover:text-[#f3701e] transition-colors"></i>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-slate-400 text-[11px] flex justify-between items-center">
          <span>Search Kolhapur Industrial Expo 2027</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
