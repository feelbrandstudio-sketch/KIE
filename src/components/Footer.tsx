import React, { useState, useEffect } from "react";
import { EXPO_DETAILS } from "../data/expoData";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer id="footer" className="bg-[#102c52] text-white pt-14 pb-6 font-sans border-t-4 border-[#f3701e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Logo and About Section */}
            <div className="lg:col-span-5 pr-lg-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/images/footer-logo.png"
                  alt="Kolhapur Industrial Expo Logo"
                  className="h-12 w-auto object-contain bg-white/10 p-1.5 rounded"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div>
                  <h5 className="font-extrabold text-white text-base tracking-wide uppercase leading-tight">
                    Kolhapur Industrial Expo 2027
                  </h5>
                  <p className="text-xs text-[#f3701e] font-semibold tracking-wider uppercase">
                    Machine Tools, Engineering & Foundry Expo
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed mb-5">
                Exhibiting at KIE provides companies with an ideal B2B platform to showcase advanced products & technologies
                to a highly focused industrial audience, connect with key industry stakeholders, generate quality business leads,
                strengthen brand visibility and unlock new avenues for business growth.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-300 font-semibold mr-2">Organized by:</span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded font-medium border border-white/15">
                  VisionEdge Group
                </span>
                <button
                  onClick={() => onNavigate("admin-portal")}
                  id="footer-admin-btn"
                  className="bg-[#f3701e]/20 hover:bg-[#f3701e] text-[#f3701e] hover:text-white text-xs px-2.5 py-1 rounded transition-colors flex items-center gap-1 font-semibold ml-auto"
                  title="Organizer Access"
                >
                  <i className="bi bi-shield-lock"></i>
                  <span>Organizer Portal</span>
                </button>
              </div>
            </div>

            {/* Main Menu */}
            <div className="col-span-1 lg:col-span-2">
              <h6 className="text-sm font-bold tracking-wider uppercase text-white mb-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f3701e]"></span> Main Menu
              </h6>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <button onClick={() => onNavigate("home")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("about-kie")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> About KIE
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("about-us")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> About Organizer
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("why-exhibit")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Exhibitor Info
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("why-visit")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Visitors Info
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("gallery")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Photo Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("contact-us")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Menu */}
            <div className="col-span-1 lg:col-span-2">
              <h6 className="text-sm font-bold tracking-wider uppercase text-white mb-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f3701e]"></span> Quick Menu
              </h6>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <button onClick={() => onNavigate("downloads")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Downloads
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("supporting-associations")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Supporting Assoc.
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("exhibitor-profile")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Exhibitor Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("visitor-profile")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Visitors Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("stall-charges")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Stall Charges Guide
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("esteemed-exhibitor")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> 294 Exhibitors List
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("exhibition-venue")} className="hover:text-[#f3701e] flex items-center gap-1.5 transition-colors">
                    <i className="bi bi-chevron-right text-[10px] text-[#f3701e]"></i> Venue & Map
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3">
              <h6 className="text-sm font-bold tracking-wider uppercase text-white mb-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f3701e]"></span> Contact Expo Team
              </h6>
              <div className="space-y-3 text-xs text-slate-300">
                <a href={`tel:${EXPO_DETAILS.phone}`} className="flex items-start gap-2.5 hover:text-[#f3701e] transition-colors">
                  <i className="bi bi-telephone-fill text-[#f3701e] text-sm mt-0.5"></i>
                  <div>
                    <span className="block font-semibold text-white">{EXPO_DETAILS.phoneDisplay}</span>
                    <span className="text-[11px] text-slate-400">Available Mon - Sat (9am - 7pm)</span>
                  </div>
                </a>

                <a href={`mailto:${EXPO_DETAILS.email}`} className="flex items-start gap-2.5 hover:text-[#f3701e] transition-colors">
                  <i className="bi bi-envelope-fill text-[#f3701e] text-sm mt-0.5"></i>
                  <div>
                    <span className="block font-semibold text-white">{EXPO_DETAILS.email}</span>
                    <span className="text-[11px] text-slate-400">For booking & general inquiries</span>
                  </div>
                </a>

                <div className="flex items-start gap-2.5">
                  <i className="bi bi-geo-alt-fill text-[#f3701e] text-sm mt-0.5"></i>
                  <div>
                    <span className="block font-semibold text-white">Office Address:</span>
                    <span className="text-[11px] text-slate-300">{EXPO_DETAILS.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <i className="bi bi-flag-fill text-[#f3701e] text-sm mt-0.5"></i>
                  <div>
                    <span className="block font-semibold text-white">Venue:</span>
                    <span className="text-[11px] text-slate-300">{EXPO_DETAILS.venueAddress}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Feelbrand.in credits */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-400">
            <div>
              &copy; Copyright 2026 <strong className="text-white">Kolhapur Industrial Expo</strong>. All Rights Reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Development by</span>
              <a
                href="http://feelbrand.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f3701e] hover:text-white font-bold tracking-wide transition-colors"
              >
                Feelbrand.in
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={EXPO_DETAILS.whatsappUrl}
        id="whatsapp-floating-btn"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-110 group"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-2xl"></i>
        <span className="hidden sm:inline font-bold text-xs pr-1">Chat on WhatsApp</span>
      </a>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="backToTopBtn"
          className="fixed bottom-6 left-6 z-50 bg-[#153a6b] hover:bg-[#f3701e] text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up text-lg"></i>
        </button>
      )}
    </>
  );
};
