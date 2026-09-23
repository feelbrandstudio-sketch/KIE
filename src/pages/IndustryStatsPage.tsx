import React from "react";

interface IndustryStatsPageProps {
  onNavigate: (page: string) => void;
}

export const IndustryStatsPage: React.FC<IndustryStatsPageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            MACRO DATA & MARKET POTENTIAL
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Industry Statistics & Market Opportunity
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            One of the World's Fastest Growing Manufacturing Markets
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        {/* Big Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Machine Tools */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
            <span className="text-xs font-bold text-[#f3701e] uppercase tracking-wider block">
              SECTOR HIGHLIGHT
            </span>
            <h2 className="text-2xl font-black text-[#153a6b]">
              India Machine Tool Market – Size & Forecast
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Driven by the Automotive, Aerospace, Defence, and Electronics sectors, India's demand for high-speed CNC machines,
              laser cutting systems, tooling, and metrology is experiencing double-digit year-on-year growth.
            </p>
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <img
                src="/assets/images/img.jpg"
                alt="India Machine Tool Market Forecast"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Foundry Industry */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
            <span className="text-xs font-bold text-[#f3701e] uppercase tracking-wider block">
              GLOBAL RANKING
            </span>
            <h2 className="text-2xl font-black text-[#153a6b]">
              India's Foundry Industry
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              India is the world's 2nd largest producer of castings. Kolhapur alone produces significant automotive and
              industrial grade castings supplied to global automotive OEMs and heavy engineering manufacturers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                <img src="/assets/images/usd.png" alt="USD" className="h-10 mx-auto mb-2" />
                <span className="text-2xl font-black text-[#153a6b] block font-mono">USD 22+</span>
                <span className="text-xs font-bold text-slate-600 uppercase">Billion Market</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                <img src="/assets/images/world.png" alt="World" className="h-10 mx-auto mb-2" />
                <span className="text-2xl font-black text-[#f3701e] block font-mono">World #2</span>
                <span className="text-xs font-bold text-slate-600 uppercase">Casting Producer</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 mt-4">
              <img
                src="/assets/images/img2.jpg"
                alt="Foundry Metalworking"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Action strip */}
        <div className="bg-gradient-to-r from-[#153a6b] to-[#102c52] p-8 rounded-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Capitalize on Western India's Industrial Boom</h3>
            <p className="text-xs text-slate-300 mt-1">Book your exhibition stall today to showcase directly to active buyers.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate("stall-charges")}
              className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Stall Charges & Guide
            </button>
            <button
              onClick={() => onNavigate("exhibitor-registration")}
              className="bg-white text-[#153a6b] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Book Stall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
