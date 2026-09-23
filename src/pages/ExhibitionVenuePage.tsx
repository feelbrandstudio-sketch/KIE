import React, { useState } from "react";
import { EXPO_DETAILS } from "../data/expoData";

interface ExhibitionVenuePageProps {
  onNavigate: (page: string) => void;
}

export const ExhibitionVenuePage: React.FC<ExhibitionVenuePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<"road" | "rail" | "air">("road");

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            VENUE & TRAVEL GUIDE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Exhibition Venue & Location Route
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Merry Weather Ground, Nagala Park, Kolhapur, Maharashtra
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        {/* Venue Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black text-[#153a6b]">
              Merry Weather Ground, Nagala Park
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Located right in the heart of Kolhapur, <strong>Merry Weather Ground</strong> offers prime accessibility,
              expansive outdoor exhibition ground space for heavy machinery handling, ample visitor parking, wide access roads,
              and close proximity to premier hotels and industrial MIDC clusters.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-[#153a6b]">Venue Facilities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <i className="bi bi-check-circle-fill text-[#f3701e]"></i> Ample Vehicle Parking
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check-circle-fill text-[#f3701e]"></i> Heavy Crane Access
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check-circle-fill text-[#f3701e]"></i> 3-Phase Power Available
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check-circle-fill text-[#f3701e]"></i> Dedicated Food Court
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check-circle-fill text-[#f3701e]"></i> VIP & Media Lounge
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check-circle-fill text-[#f3701e]"></i> Fast-Track Badge Entry
                </div>
              </div>
            </div>

            {/* Travel Connectivity Tabs */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#153a6b]">How to Reach Merry Weather Ground</h3>
              <div className="flex gap-2 border-b border-slate-200 pb-2">
                <button
                  onClick={() => setActiveTab("road")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === "road" ? "bg-[#153a6b] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <i className="bi bi-car-front-fill me-1.5"></i> By Road (NH-48)
                </button>
                <button
                  onClick={() => setActiveTab("rail")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === "rail" ? "bg-[#153a6b] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <i className="bi bi-train-front-fill me-1.5"></i> By Train (Railway)
                </button>
                <button
                  onClick={() => setActiveTab("air")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === "air" ? "bg-[#153a6b] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <i className="bi bi-airplane-fill me-1.5"></i> By Air (Flights)
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                {activeTab === "road" && (
                  <div className="space-y-2">
                    <strong className="text-sm font-bold text-[#153a6b] block">Direct Highway Access:</strong>
                    <p>
                      Kolhapur is situated directly on the 6-lane <strong>National Highway 48 (Golden Quadrilateral)</strong>.
                      Well connected by Volvo buses and private cars from:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 pt-1">
                      <li><strong>Pune:</strong> 230 km (approx. 4.5 hours via NH 48)</li>
                      <li><strong>Mumbai:</strong> 375 km (approx. 7 hours via Expressway & NH 48)</li>
                      <li><strong>Belgaum:</strong> 110 km (approx. 2 hours via NH 48)</li>
                      <li><strong>Goa:</strong> 215 km (approx. 4.5 hours via Radhanagari / Gaganbawda route)</li>
                      <li><strong>Sangli / Miraj:</strong> 45 km (approx. 1 hour)</li>
                      <li><strong>Satara:</strong> 120 km (approx. 2 hours)</li>
                    </ul>
                  </div>
                )}

                {activeTab === "rail" && (
                  <div className="space-y-2">
                    <strong className="text-sm font-bold text-[#153a6b] block">Chhatrapati Shahu Maharaj Terminus (KOP):</strong>
                    <p>
                      Kolhapur Railway Station is only <strong>3.5 km (10 minutes)</strong> from Merry Weather Ground.
                      Frequent daily trains connect Kolhapur with:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 pt-1">
                      <li>Mumbai (Mahalaxmi Express, Koyna Express, Sahyadri)</li>
                      <li>Pune (Multiple daily intercity expresses and passenger trains)</li>
                      <li>Bengaluru, Hyderabad, Tirupati, Delhi and Ahmedabad direct connections</li>
                    </ul>
                  </div>
                )}

                {activeTab === "air" && (
                  <div className="space-y-2">
                    <strong className="text-sm font-bold text-[#153a6b] block">Chhatrapati Rajaram Maharaj Airport (KLH):</strong>
                    <p>
                      Kolhapur Domestic Airport at Ujalaiwadi is only <strong>10 km (20 minutes drive)</strong> from the venue.
                      Daily commercial flights operate from:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 pt-1">
                      <li>Bengaluru, Hyderabad, Mumbai, Tirupati</li>
                      <li>Alternative International Airports: Pune International Airport (240 km), Goa Dabolim / MOPA (220 km)</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map and Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              {/* Google Map iframe */}
              <iframe
                title="Merry Weather Ground Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5794553255146!2d74.2255!3d16.7025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10010d297922d%3A0xc3cf46d6fa0655ad!2sNagala%20Park%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-4 bg-[#153a6b] text-white">
                <p className="font-bold text-xs uppercase text-[#f3701e]">Full Address</p>
                <p className="text-xs text-slate-200 mt-0.5">{EXPO_DETAILS.venueAddress}</p>
                <a
                  href="https://maps.google.com/?q=Merry+Weather+Ground+Nagala+Park+Kolhapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 bg-[#f3701e] hover:bg-[#d95e10] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <i className="bi bi-geo-alt-fill"></i> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-800 text-sm">Need Travel Assistance or Hotel Recommendations?</h4>
              <p className="text-xs text-slate-600">
                Our hospitality desk can assist outstation exhibitors and delegates with local transport and hotel bookings in Kolhapur.
              </p>
              <a
                href={EXPO_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline"
              >
                <i className="fa-brands fa-whatsapp text-base"></i> Chat with Hospitality Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
