import React from "react";
import { EXPO_DETAILS } from "../data/expoData";

interface VisitorInfoPageProps {
  onNavigate: (page: string) => void;
}

export const VisitorInfoPage: React.FC<VisitorInfoPageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            VISITOR GUIDELINES
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Visitor Information & Guidelines
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Everything you need to know about timings, entry protocol, facilities, and visiting the expo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        {/* Exhibition Timings & Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#153a6b] text-white flex items-center justify-center text-lg">
              <i className="bi bi-clock-history"></i>
            </div>
            <h3 className="font-extrabold text-base text-[#153a6b]">Visiting Hours</h3>
            <div className="space-y-1 text-xs text-slate-700">
              <p><strong>Day 1 (28 Feb 2027):</strong> 10:00 AM – 6:30 PM</p>
              <p><strong>Day 2 (1 Mar 2027):</strong> 10:00 AM – 6:30 PM</p>
              <p><strong>Day 3 (2 Mar 2027):</strong> 10:00 AM – 5:30 PM</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#f3701e] text-white flex items-center justify-center text-lg">
              <i className="bi bi-ticket-perforated"></i>
            </div>
            <h3 className="font-extrabold text-base text-[#153a6b]">Admission & Entry Badges</h3>
            <div className="space-y-1 text-xs text-slate-700">
              <p>Entry is <strong>FREE</strong> for registered business visitors and industry delegates.</p>
              <p>Please bring a digital or printed copy of your Visitor E-Badge or 2 business visiting cards.</p>
              <p>Strictly a B2B trade exhibition. General public/children below 16 years not permitted.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#153a6b] text-white flex items-center justify-center text-lg">
              <i className="bi bi-geo-alt"></i>
            </div>
            <h3 className="font-extrabold text-base text-[#153a6b]">Venue Location</h3>
            <div className="space-y-1 text-xs text-slate-700">
              <p className="font-bold">{EXPO_DETAILS.venueName}</p>
              <p className="text-slate-500">{EXPO_DETAILS.venueAddress}</p>
              <button
                onClick={() => onNavigate("exhibition-venue")}
                className="text-[#f3701e] font-bold hover:underline pt-1 block"
              >
                View Map & Directions →
              </button>
            </div>
          </div>
        </div>

        {/* Visitor Facilities */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-[#153a6b]">On-Site Visitor Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
              <i className="bi bi-p-square text-xl text-[#f3701e]"></i>
              <div>
                <strong className="block text-slate-900 mb-0.5">Complimentary Parking</strong>
                <span>Dedicated visitor parking with traffic marshals at the ground.</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
              <i className="bi bi-cup-hot text-xl text-[#f3701e]"></i>
              <div>
                <strong className="block text-slate-900 mb-0.5">Food Court & Café</strong>
                <span>Hygienic multi-cuisine food stalls and refreshments for attendees.</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
              <i className="bi bi-wifi text-xl text-[#f3701e]"></i>
              <div>
                <strong className="block text-slate-900 mb-0.5">Free Wi-Fi & Lounge</strong>
                <span>High-speed Wi-Fi in the business lounge for business discussions.</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
              <i className="bi bi-info-circle text-xl text-[#f3701e]"></i>
              <div>
                <strong className="block text-slate-900 mb-0.5">Help & Info Desk</strong>
                <span>Directory assistance and floor plan guidance at the entrance.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#153a6b]">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-3 text-xs text-slate-700">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">Is pre-registration mandatory to visit KIE 2027?</h4>
              <p>
                Pre-registration is highly recommended to receive your instant digital QR pass and bypass on-site queues. On-site registration is also available at the entry gates with business cards.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">Are machinery live demonstrations scheduled during the expo?</h4>
              <p>
                Yes, leading CNC machine manufacturers, laser cutting equipment makers, robotics providers, and welding suppliers will be running live product demonstrations throughout all 3 exhibition days.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">How can outstation delegates arrange local transport and lodging?</h4>
              <p>
                Merry Weather Ground is 3.5 km from Kolhapur Railway Station and 10 km from Kolhapur Airport. You can reach out to our hospitality desk via WhatsApp for hotel guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Register CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate("visitor-registration")}
            className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg inline-flex items-center gap-2"
          >
            <i className="bi bi-ticket-perforated-fill"></i> Get Instant Digital Visitor Pass
          </button>
        </div>
      </div>
    </div>
  );
};
