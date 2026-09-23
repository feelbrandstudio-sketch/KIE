import React from "react";

interface WhyVisitPageProps {
  onNavigate: (page: string) => void;
}

export const WhyVisitPage: React.FC<WhyVisitPageProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: "DISCOVER",
      subtitle: "Explore New Technologies",
      desc: "Stay ahead of industry trends with live demonstrations of next-generation CNC machinery, automation robotics, laser cutting, and foundry equipment.",
      icon: "bi-search"
    },
    {
      title: "EXPERIENCE",
      subtitle: "See Machines Up Close",
      desc: "Evaluate machinery tolerances, cutting speeds, casting quality, and software interfaces in real-world running conditions on the expo floor.",
      icon: "bi-eye"
    },
    {
      title: "CONNECT",
      subtitle: "Meet Manufacturers & Technical Experts",
      desc: "Network directly with technical directors, machine designers, tool specialists, and foundry metallurgists without intermediaries.",
      icon: "bi-people"
    },
    {
      title: "COMPARE",
      subtitle: "Evaluate Multiple Solutions",
      desc: "Compare specifications, performance benchmarks, delivery terms, and competitive pricing from 300+ suppliers all under one roof.",
      icon: "bi-sliders"
    },
    {
      title: "LEARN",
      subtitle: "Discover New Possibilities",
      desc: "Gain deep practical knowledge on reducing manufacturing cycle times, minimizing scrap rates, optimizing power consumption, and adopting Industry 4.0.",
      icon: "bi-mortarboard"
    },
    {
      title: "GROW",
      subtitle: "Improve Your Business",
      desc: "Source reliable OEM and ancillary partners, establish strategic dealer relationships, and secure high-value vendor opportunities.",
      icon: "bi-graph-up-arrow"
    }
  ];

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            VISITOR ADVANTAGE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Why Visit Kolhapur Industrial Expo 2027
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            A Premier Marketplace for Engineering Innovation, Networking & Knowledge
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-[#153a6b]">
            Six Key Value Drivers for Trade Visitors
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Whether you run a machine shop, manage a foundry, head procurement, or design components, KIE is tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-orange-50/50 p-8 rounded-2xl border border-slate-200 hover:border-orange-300 transition-all space-y-3 group shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-[#153a6b] text-white flex items-center justify-center text-xl group-hover:bg-[#f3701e] transition-colors">
                <i className={`bi ${p.icon}`}></i>
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#f3701e] tracking-wider uppercase block">
                  {p.title}
                </span>
                <h3 className="font-extrabold text-base text-[#153a6b]">
                  {p.subtitle}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-[#153a6b] to-[#102c52] p-8 sm:p-10 rounded-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold">Register Today for Fast-Track Free Visitor Badge</h3>
            <p className="text-xs text-slate-300 mt-1">Avoid on-site registration queues. Get your instant digital QR pass right now.</p>
          </div>
          <button
            onClick={() => onNavigate("visitor-registration")}
            id="why-visit-reg-btn"
            className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md whitespace-nowrap"
          >
            Get Free Visitor Pass
          </button>
        </div>
      </div>
    </div>
  );
};
