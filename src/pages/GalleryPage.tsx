import React, { useState } from "react";
import { LightboxModal } from "../components/LightboxModal";

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryItems = [
    { id: 1, title: "CNC Machine Tools Exhibition Floor", category: "Exhibition", img: "/assets/images/ab-kie/abkie-cnc.jpg" },
    { id: 2, title: "Foundry & Casting Display", category: "Machinery", img: "/assets/images/ab-kie/abkie-foundry.jpg" },
    { id: 3, title: "Trade Visitors & Business Delegates", category: "Visitors", img: "/assets/images/ab-kie/abkie-visitors.jpg" },
    { id: 4, title: "Heavy Metalworking Machinery", category: "Machinery", img: "/assets/images/img2.jpg" },
    { id: 5, title: "Inauguration & VIP Dignitaries", category: "Inauguration", img: "/assets/images/ab-kie/abkie-visitors.jpg" },
    { id: 6, title: "Octanorm Shell Scheme Stalls", category: "Exhibition", img: "/assets/images/stall.jpg" },
    { id: 7, title: "Open Bare Space Exhibition Booths", category: "Exhibition", img: "/assets/images/spaces.jpg" },
    { id: 8, title: "B2B Business Matchmaking Lounge", category: "Visitors", img: "/assets/images/slider/1.jpg" },
    { id: 9, title: "Industrial Automation & Robotics Live Demo", category: "Machinery", img: "/assets/images/ab-kie/abkie-cnc.jpg" }
  ];

  const categories = ["All", "Exhibition", "Machinery", "Visitors", "Inauguration", "Videos"];

  const filtered = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            MEDIA & HIGHLIGHTS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Photo & Video Gallery
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Visual glimpses from previous editions of Kolhapur Industrial Expo showcasing machinery, stalls, and visitors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#153a6b] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video highlight if category is Videos */}
        {activeCategory === "Videos" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg p-6 text-white text-center space-y-3">
              <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center relative group cursor-pointer">
                <i className="bi bi-play-circle-fill text-6xl text-[#f3701e] group-hover:scale-110 transition-transform"></i>
              </div>
              <h3 className="font-bold text-sm">Kolhapur Industrial Expo Highlights Reel</h3>
              <p className="text-xs text-slate-400">Footage of 300+ exhibitors and 40,000+ trade visitors.</p>
            </div>

            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg p-6 text-white text-center space-y-3">
              <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center relative group cursor-pointer">
                <i className="bi bi-play-circle-fill text-6xl text-[#f3701e] group-hover:scale-110 transition-transform"></i>
              </div>
              <h3 className="font-bold text-sm">Live CNC & Heavy Machinery Demonstrations</h3>
              <p className="text-xs text-slate-400">Metal cutting, tooling tolerances and smart robotics in action.</p>
            </div>
          </div>
        ) : (
          /* Photo Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item.img)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 cursor-pointer bg-slate-100 aspect-4/3"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold text-[#f3701e] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm leading-snug">{item.title}</h4>
                  <span className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                    <i className="bi bi-arrows-fullscreen"></i> Click to enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
};
