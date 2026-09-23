import React from "react";
import { VISITOR_INDUSTRIES, VISITOR_DESIGNATIONS } from "../data/expoData";

interface VisitorProfilePageProps {
  onNavigate: (page: string) => void;
}

export const VisitorProfilePage: React.FC<VisitorProfilePageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            DELEGATE DEMOGRAPHICS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Visitor Profile & Target Industries
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Who Visits Kolhapur Industrial Expo – Key Decision Makers, Industry Sectors & Buying Roles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Industry Sector Breakdown */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              TARGET SECTORS
            </span>
            <h2 className="text-2xl font-black text-[#153a6b]">
              Visitor Industry Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Industrial delegations, business owners and engineers attend from these major manufacturing verticals:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VISITOR_INDUSTRIES.map((ind, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3 hover:border-[#153a6b] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#153a6b] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-xs font-bold text-slate-800">{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visitor Designation Profile */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              AUTHORITY & DECISION MAKERS
            </span>
            <h2 className="text-2xl font-black text-[#153a6b]">
              Visitor Designation Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              High-ranking decision-makers with direct purchase authority and budget control attend KIE:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VISITOR_DESIGNATIONS.map((desig, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-[#f3701e] transition-colors flex flex-col justify-between"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#f3701e] flex items-center justify-center text-base mb-3">
                  <i className="bi bi-person-badge"></i>
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug">{desig}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center space-y-4">
          <h3 className="text-lg font-bold text-[#153a6b]">Connect with this Focused Audience</h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            If your target customers match these industrial profiles, secure your exhibition stall today.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => onNavigate("visitor-registration")}
              className="bg-[#153a6b] hover:bg-[#102c52] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Get Visitor Pass
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
