import React from "react";

interface WhyKolhapurPageProps {
  onNavigate: (page: string) => void;
}

export const WhyKolhapurPage: React.FC<WhyKolhapurPageProps> = ({ onNavigate }) => {
  const points = [
    "One of India's Leading Foundry & Forging Hubs",
    "Established Manufacturing & Precision Engineering Base",
    "Strong Auto Components Ecosystem",
    "Thousands of MSMEs, OEMs & Ancillary Industries",
    "Strong Market for Machine Tools & Automation",
    "Rising Demand for Smart Manufacturing & Industry 4.0",
    "Access to Key Industrial Buyers & Decision Makers",
    "High Industrial Investment Potential",
    "Leading Hub for Agricultural & Sugar Machinery",
    "Gateway to Maharashtra, Karnataka, Konkan & Goa Markets"
  ];

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            REGIONAL STRENGTH
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Western Maharashtra's Manufacturing & Foundry Hub
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Connecting the Region's Manufacturing Community
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black text-[#153a6b] tracking-tight">
              Why Kolhapur is the Strategic Destination
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kolhapur is one of the most prominent industrial clusters in Western India. Known globally for its
              superior casting, forging, and heavy engineering capabilities, the region consumes massive volumes of
              machine tools, CNC equipment, cutting tools, metallurgical products, and industrial software every year.
            </p>

            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#f3701e] transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-[#f3701e] flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-arrow-right-short text-lg font-bold"></i>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex gap-3">
              <button
                onClick={() => onNavigate("why-exhibit")}
                className="bg-[#153a6b] hover:bg-[#102c52] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Why Exhibit at KIE
              </button>
              <button
                onClick={() => onNavigate("exhibition-venue")}
                className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                View Venue Location
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src="/assets/images/map.jpg"
                alt="Kolhapur Industrial Region Map"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-slate-900 text-white text-xs">
                <p className="font-bold text-[#f3701e] uppercase">Strategic Geographic Connectivity</p>
                <p className="text-slate-300 mt-1">
                  Connecting Shiroli MIDC, Gokul Shirgaon MIDC, Kagal 5-Star MIDC, Ichalkaranji, Sangli, Satara, Belgaum & Hubli.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200 space-y-2">
              <h4 className="font-extrabold text-[#153a6b] text-sm uppercase">Major Industrial Clusters in Kolhapur</h4>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 pt-1">
                <li><strong>Shiroli MIDC:</strong> Premier foundry, casting & machine shop cluster</li>
                <li><strong>Gokul Shirgaon MIDC:</strong> Heavy engineering, auto ancillaries & fabrication</li>
                <li><strong>Kagal Hatkanangale 5-Star MIDC:</strong> Auto OEMs, textile machinery & MNCs</li>
                <li><strong>Ichalkaranji:</strong> Textile engineering & precision component manufacturing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
