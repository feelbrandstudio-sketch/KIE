import React from "react";

interface AboutKiePageProps {
  onNavigate: (page: string) => void;
}

export const AboutKiePage: React.FC<AboutKiePageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      {/* Banner */}
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            ABOUT THE PLATFORM
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            About Kolhapur Industrial Expo 2027
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            The Trusted Industrial Platform Returns. Bigger. Stronger. Better.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-black text-[#153a6b] tracking-tight">
              Back with a Renewed Vision. Built on Industry Trust.
            </h2>
            <p>
              Building on the success of its earlier editions, <strong>Kolhapur Industrial Expo (KIE)</strong> returns
              with a renewed vision to bring manufacturers, technology providers, and industrial buyers together at the
              heart of Western Maharashtra's manufacturing ecosystem.
            </p>
            <p>
              Earlier editions earned the confidence of exhibitors through quality visitors, strong regional outreach,
              and valuable business opportunities. KIE 2027 is set to deliver an even larger exhibition, stronger industry
              participation, and wider visitor promotion across Maharashtra, Karnataka, Konkan, and Goa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <span className="text-2xl font-black text-[#f3701e] block">Bigger</span>
                <p className="text-xs text-slate-600 mt-1">Expanded exhibition floor and wider product categories.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <span className="text-2xl font-black text-[#153a6b] block">Stronger</span>
                <p className="text-xs text-slate-600 mt-1">Backed by 20+ prominent industry associations & chambers.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <span className="text-2xl font-black text-[#f3701e] block">Better</span>
                <p className="text-xs text-slate-600 mt-1">Focused buyer outreach and enhanced B2B matchmaking.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#153a6b] pt-4">
              Key Industrial Focus
            </h3>
            <p>
              The exhibition acts as a central catalyst for key industrial segments including:
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <i className="bi bi-gear-wide-connected text-[#f3701e]"></i>
                <strong>Foundry, Casting & Metallurgy:</strong> Kolhapur is renowned worldwide as a major casting manufacturing powerhouse.
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-gear-wide-connected text-[#f3701e]"></i>
                <strong>Machine Tools & CNC Machining:</strong> Advanced turning centres, milling, laser cutting, and EDM solutions.
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-gear-wide-connected text-[#f3701e]"></i>
                <strong>Automotive & Precision Components:</strong> Tier-1 and Tier-2 suppliers serving top Indian and global auto OEMs.
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-gear-wide-connected text-[#f3701e]"></i>
                <strong>Industrial Automation & Robotics:</strong> Enabling regional MSMEs to transition to Industry 4.0 and smart shop floors.
              </li>
            </ul>

            {/* 3 Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="/assets/images/ab-kie/abkie-cnc.jpg"
                  alt="CNC Machine Tools"
                  className="w-full h-40 object-cover"
                />
                <div className="p-2.5 bg-slate-50 text-[11px] font-bold text-slate-700 text-center">
                  CNC Machine Tools
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="/assets/images/ab-kie/abkie-foundry.jpg"
                  alt="Foundry Technology"
                  className="w-full h-40 object-cover"
                />
                <div className="p-2.5 bg-slate-50 text-[11px] font-bold text-slate-700 text-center">
                  Foundry & Casting
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="/assets/images/ab-kie/abkie-visitors.jpg"
                  alt="Exhibition Hall"
                  className="w-full h-40 object-cover"
                />
                <div className="p-2.5 bg-slate-50 text-[11px] font-bold text-slate-700 text-center">
                  Trade Visitors & Buyers
                </div>
              </div>
            </div>
          </div>

          {/* Quick Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-extrabold text-[#153a6b] text-base uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-3 text-xs">
                <div className="border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 block">Dates</span>
                  <strong className="text-slate-800 text-sm">28 Feb, 1 & 2 March 2027</strong>
                </div>
                <div className="border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 block">Venue</span>
                  <strong className="text-slate-800 text-sm">Merry Weather Ground, Kolhapur</strong>
                </div>
                <div className="border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 block">Expected Footfall</span>
                  <strong className="text-slate-800 text-sm">40,000+ Trade Visitors</strong>
                </div>
                <div className="border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 block">Exhibiting Brands</span>
                  <strong className="text-slate-800 text-sm">300+ Companies</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Organizer</span>
                  <strong className="text-slate-800 text-sm">VisionEdge Group</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onNavigate("visitor-registration")}
                  className="w-full bg-[#153a6b] hover:bg-[#102c52] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center"
                >
                  Register as Visitor
                </button>
                <button
                  onClick={() => onNavigate("exhibitor-registration")}
                  className="w-full bg-[#f3701e] hover:bg-[#d95e10] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center"
                >
                  Book Exhibition Stall
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
