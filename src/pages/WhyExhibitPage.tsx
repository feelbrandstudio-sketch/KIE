import React from "react";

interface WhyExhibitPageProps {
  onNavigate: (page: string) => void;
}

export const WhyExhibitPage: React.FC<WhyExhibitPageProps> = ({ onNavigate }) => {
  const benefits = [
    {
      title: "Generate High-Quality Business Leads",
      desc: "Connect with manufacturers, industrial buyers and decision-makers actively seeking new technologies and solutions.",
      icon: "bi-graph-up-arrow"
    },
    {
      title: "Meet Qualified Industrial Buyers",
      desc: "Engage with purchase, production, engineering, maintenance and management professionals from top manufacturing plants.",
      icon: "bi-person-check-fill"
    },
    {
      title: "Showcase New Products & Technologies",
      desc: "Demonstrate your latest machines, products, technologies and manufacturing solutions live to thousands of prospective buyers.",
      icon: "bi-cpu-fill"
    },
    {
      title: "Expand Your Market Reach",
      desc: "Build business opportunities across Western Maharashtra, North Karnataka, Konkan and Goa industrial belts.",
      icon: "bi-geo-alt-fill"
    },
    {
      title: "Strengthen Dealer & Distributor Networks",
      desc: "Develop new channel partnerships and strengthen existing dealer and distributor relationships in high-demand regions.",
      icon: "bi-diagram-3-fill"
    },
    {
      title: "Connect with Foundries, OEMs & MSMEs",
      desc: "Meet the diverse manufacturing ecosystem driving regional industrial growth directly at their home base.",
      icon: "bi-buildings-fill"
    },
    {
      title: "Build Brand Visibility & Industry Presence",
      desc: "Position your company directly in front of a focused industrial audience and strengthen your market recognition.",
      icon: "bi-megaphone-fill"
    },
    {
      title: "Maximise Your Exhibition ROI",
      desc: "Generate enquiries, demonstrate capabilities, build relationships and create opportunities through a focused B2B platform.",
      icon: "bi-trophy-fill"
    }
  ];

  const marketingChannels = [
    "Email & WhatsApp Marketing Campaigns",
    "Digital & Social Media Targeted Campaigns",
    "Industrial Cluster & Factory Personal Outreach",
    "Buyer VIP Invitation Programme",
    "Trade Media & Public Relations Coverage",
    "Association-led Visitor Promotion with Chambers",
    "Hoardings & Outdoor Strategic Branding",
    "Exhibitor Visitor Invitation Supports"
  ];

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            EXHIBITOR ADVANTAGE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Why Exhibit at Kolhapur Industrial Expo 2027
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Connect. Showcase. Grow. Your Gateway to Western India's Manufacturing Markets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* 8 Core Benefits Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              PROVEN VALUE PROPOSITION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#153a6b]">
              Eight Reasons to Choose KIE 2027
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-orange-50/50 p-6 rounded-2xl border border-slate-200 hover:border-orange-300 transition-all space-y-3 group shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#153a6b] text-white flex items-center justify-center text-xl group-hover:bg-[#f3701e] transition-colors">
                  <i className={`bi ${b.icon}`}></i>
                </div>
                <h3 className="font-extrabold text-sm text-[#153a6b] group-hover:text-[#f3701e] transition-colors leading-snug">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing & Visitor Promotion Section */}
        <div className="bg-[#102c52] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              ROBUST VISITOR PULL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Comprehensive Marketing & Visitor Promotion Campaign
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              A comprehensive multi-channel campaign ensuring quality industrial buyers and decision-makers
              from Maharashtra, Karnataka, Konkan, Goa and neighbouring industrial regions attend the expo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketingChannels.map((channel, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#f3701e] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-xs font-semibold text-slate-100 leading-snug">{channel}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap justify-between items-center gap-4">
            <div className="text-xs text-slate-300">
              Ready to secure your exhibition booth? Prime corner & island spaces are limited.
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate("stall-charges")}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                View Stall Charges
              </button>
              <button
                onClick={() => onNavigate("exhibitor-registration")}
                className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Book Your Stall
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
