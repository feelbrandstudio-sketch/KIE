import React from "react";
import { SUPPORTING_ASSOCIATIONS } from "../data/expoData";

interface SupportingAssocPageProps {
  onNavigate: (page: string) => void;
}

export const SupportingAssocPage: React.FC<SupportingAssocPageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            INDUSTRY ENDORSEMENTS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Supporting Industry Associations & Chambers
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Backed by the premier manufacturing, foundry and industrial associations across Maharashtra and Karnataka.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-[#153a6b]">
            United Behind Regional Manufacturing Growth
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            KIE 2027 is proudly supported by apex industrial bodies representing thousands of MSMEs, foundries,
            machine tool shops, and engineering enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SUPPORTING_ASSOCIATIONS.map((assoc) => (
            <div
              key={assoc.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#153a6b] hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-2xl p-3.5 flex items-center justify-center mb-4 border border-slate-100 group-hover:scale-105 transition-transform">
                <img
                  src={assoc.logo}
                  alt={assoc.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to stylized icon if image missing
                    const target = e.target as HTMLElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              <span className="text-[10px] font-bold text-[#f3701e] uppercase tracking-wider mb-1">
                {assoc.subtitle || "Official Partner"}
              </span>

              <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#153a6b] transition-colors leading-snug">
                {assoc.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Association Partnership Banner */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center space-y-3">
          <h3 className="text-lg font-bold text-[#153a6b]">Are you an Industry Association or Chamber?</h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Partner with KIE 2027 to lead an official delegation of your member enterprises and receive special group delegation privileges.
          </p>
          <button
            onClick={() => onNavigate("contact-us")}
            className="bg-[#153a6b] hover:bg-[#102c52] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Register Official Delegation
          </button>
        </div>
      </div>
    </div>
  );
};
