import React, { useState } from "react";
import { EXHIBITOR_SECTORS } from "../data/expoData";

interface ExhibitorProfilePageProps {
  onNavigate: (page: string) => void;
}

export const ExhibitorProfilePage: React.FC<ExhibitorProfilePageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = EXHIBITOR_SECTORS.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            EXHIBITOR PROFILE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Exhibitor Profile – 22 Industrial Sectors
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            A comprehensive showcase representing every key vertical of industrial engineering and manufacturing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        {/* Search filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="relative w-full sm:w-80">
            <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              placeholder="Filter sectors (e.g. CNC, Foundry, Automation)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e]"
            />
          </div>
          <div className="text-xs text-slate-500 font-semibold">
            Showing <strong className="text-[#153a6b]">{filtered.length}</strong> of {EXHIBITOR_SECTORS.length} Sectors
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((sector, index) => (
            <div
              key={sector.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#f3701e] shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-2xl p-3.5 flex items-center justify-center mb-4 border border-slate-100 group-hover:bg-orange-50 group-hover:scale-105 transition-all">
                <img
                  src={sector.icon}
                  alt={sector.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Sector {index + 1}
              </span>
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#f3701e] transition-colors leading-snug">
                {sector.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Action Strip */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center space-y-4">
          <h3 className="text-lg font-bold text-[#153a6b]">Does your product profile fall into any of these sectors?</h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Book your stall at KIE 2027 to connect directly with 40,000+ prospective buyers from foundries, auto OEMs, and engineering plants.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => onNavigate("stall-charges")}
              className="bg-[#153a6b] hover:bg-[#102c52] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Check Stall Charges
            </button>
            <button
              onClick={() => onNavigate("exhibitor-registration")}
              className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Book Exhibition Stall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
