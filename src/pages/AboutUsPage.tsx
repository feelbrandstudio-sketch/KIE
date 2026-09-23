import React from "react";

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      {/* Banner */}
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            EXHIBITION ORGANIZER
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            About VisionEdge Group
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Creating Platforms. Connecting Markets. Enabling Growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-black text-[#153a6b] tracking-tight">
              Creating Purpose-Built Exhibition Marketplaces
            </h2>
            <p>
              <strong>VisionEdge Group</strong> is an exhibition and business-platform enterprise creating focused trade fairs,
              industrial exhibitions, and industry-led platforms that bring businesses, professionals, buyers, and innovators together.
            </p>
            <p>
              Our journey in exhibitions began in <strong>2010</strong> with an exhibition in Pune, followed by three successive editions in Kolhapur in <strong>2011, 2012, and 2013</strong>. Building on this rich decade-long heritage, VisionEdge Group is now entering a new phase — developing professionally curated exhibitions across industrial, business, and emerging sectors.
            </p>
            <p>
              We believe a successful exhibition is more than an event. It is a marketplace for ideas, products, relationships, and opportunities. Our exhibitions are designed to connect the right audiences with the right businesses, create meaningful face-to-face interactions, and open new avenues for business development, market access, networking, and growth.
            </p>
          </div>

          <div className="lg:col-span-4 bg-orange-50 p-6 rounded-2xl border border-orange-200 text-center space-y-3">
            <span className="text-4xl font-black text-[#f3701e] block font-mono">14+</span>
            <h3 className="font-extrabold text-[#153a6b] text-base uppercase">Years of Exhibition Heritage</h3>
            <p className="text-xs text-slate-600">
              Pioneering regional trade shows connecting Western Maharashtra, North Karnataka, and Goa industrial belts.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#153a6b] text-white flex items-center justify-center text-lg">
              <i className="bi bi-eye-fill"></i>
            </div>
            <h3 className="text-lg font-black text-[#153a6b] uppercase tracking-wider">Our Vision</h3>
            <span className="text-xs font-bold text-[#f3701e] uppercase">Where We're Headed</span>
            <p className="text-sm text-slate-600 leading-relaxed">
              To build a trusted portfolio of exhibitions and business platforms that connect markets, inspire participation,
              and create opportunities for sustainable growth.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f3701e] text-white flex items-center justify-center text-lg">
              <i className="bi bi-bullseye"></i>
            </div>
            <h3 className="text-lg font-black text-[#153a6b] uppercase tracking-wider">Our Mission</h3>
            <span className="text-xs font-bold text-[#f3701e] uppercase">How We Get There</span>
            <p className="text-sm text-slate-600 leading-relaxed">
              To conceptualise and deliver focused, professionally managed exhibitions that create measurable value for
              exhibitors, visitors, partners, and the markets we serve.
            </p>
          </div>
        </div>

        {/* 5 Core Principles */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              FOUNDATIONAL PHILOSOPHY
            </span>
            <h2 className="text-2xl font-black text-[#153a6b]">
              Five Principles Behind Every Platform We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "RELEVANCE", desc: "Understanding each sector and creating exhibitions around its specific market needs." },
              { title: "CONNECTION", desc: "Bringing businesses, buyers, professionals and communities together." },
              { title: "EXPERIENCE", desc: "Creating engaging, professional and high-quality exhibition environments." },
              { title: "OPPORTUNITY", desc: "Enabling business development, networking, market expansion and new partnerships." },
              { title: "INNOVATION", desc: "Continuously evolving our exhibitions with changing markets, technologies and consumer needs." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-[#f3701e] transition-colors text-center">
                <span className="w-7 h-7 rounded-full bg-slate-100 text-[#153a6b] font-bold text-xs flex items-center justify-center mx-auto mb-2">
                  0{i + 1}
                </span>
                <h4 className="font-extrabold text-xs text-[#153a6b] mb-1 tracking-wider">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h3 className="text-xl font-black text-[#153a6b] mb-6 text-center">Our Journey</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="font-black text-[#f3701e] text-lg block font-mono">2010</span>
              <p className="text-xs font-bold text-slate-800 mt-1">Vision Industrial Expo</p>
              <span className="text-[11px] text-slate-500">Pune</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="font-black text-[#f3701e] text-lg block font-mono">2011</span>
              <p className="text-xs font-bold text-slate-800 mt-1">Kolhapur Industrial Expo</p>
              <span className="text-[11px] text-slate-500">Edition 1</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="font-black text-[#f3701e] text-lg block font-mono">2012</span>
              <p className="text-xs font-bold text-slate-800 mt-1">Kolhapur Industrial Expo</p>
              <span className="text-[11px] text-slate-500">Edition 2</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="font-black text-[#f3701e] text-lg block font-mono">2013</span>
              <p className="text-xs font-bold text-slate-800 mt-1">Kolhapur Industrial Expo</p>
              <span className="text-[11px] text-slate-500">Edition 3</span>
            </div>
            <div className="bg-[#153a6b] text-white p-4 rounded-xl border border-[#153a6b] shadow-md">
              <span className="font-black text-[#f3701e] text-lg block font-mono">2027</span>
              <p className="text-xs font-bold text-white mt-1">KIE 2027 Returns</p>
              <span className="text-[11px] text-slate-300">Western Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate("contact-us")}
            className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            Get in Touch with VisionEdge Team
          </button>
        </div>
      </div>
    </div>
  );
};
