import React, { useState, useEffect } from "react";
import { EXPO_DETAILS } from "../data/expoData";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [exhibitorDropdown, setExhibitorDropdown] = useState(false);
  const [visitorDropdown, setVisitorDropdown] = useState(false);

  // Close menus when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdown(false);
    setExhibitorDropdown(false);
    setVisitorDropdown(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const handleNav = (page: string) => {
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm font-sans">
      {/* ============ TOP BAR ============ */}
      <div className="bg-[#153a6b] text-white py-1.5 px-4 text-xs font-medium border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="hidden sm:flex items-center gap-3 text-slate-200">
            <span className="flex items-center gap-1.5">
              <i className="bi bi-calendar3 text-[#f3701e]"></i> {EXPO_DETAILS.dates}
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <i className="bi bi-geo-alt-fill text-[#f3701e]"></i> Merry Weather Ground, Kolhapur
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <a href={`mailto:${EXPO_DETAILS.email}`} className="text-white/90 hover:text-white flex items-center gap-1 transition-colors">
              <i className="bi bi-envelope-fill text-[#f3701e]"></i>
              <span className="hidden md:inline">{EXPO_DETAILS.email}</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a href={`tel:${EXPO_DETAILS.phone}`} className="text-white/90 hover:text-white flex items-center gap-1 font-semibold transition-colors">
              <i className="bi bi-telephone-fill text-[#f3701e]"></i>
              <span>{EXPO_DETAILS.phoneDisplay}</span>
            </a>
            <span className="text-white/30">|</span>

            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              id="header-search-btn"
              className="bg-white/15 hover:bg-white/25 text-white px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition-all"
              title="Search entire expo website"
            >
              <i className="bi bi-search"></i>
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline bg-black/30 text-[10px] px-1 py-0.5 rounded font-mono">⌘K</kbd>
            </button>

            {/* Direct Quick Registration Buttons in Topbar */}
            <button
              onClick={() => handleNav("visitor-registration")}
              id="top-visitor-reg-btn"
              className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              <i className="bi bi-person-fill text-[#f3701e]"></i>
              <span className="hidden lg:inline">Visitor Pass</span>
            </button>
            <button
              onClick={() => handleNav("exhibitor-registration")}
              id="top-exhibitor-reg-btn"
              className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors shadow-sm"
            >
              <i className="bi bi-briefcase-fill"></i>
              <span>Book Stall</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============ MAIN NAVIGATION ============ */}
      <nav className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("home"); }}
            id="brand-logo-link"
            className="flex items-center gap-3 py-2 group"
          >
            <img
              src="/assets/images/top-logo.png"
              alt="Kolhapur Industrial Expo Logo"
              className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback text if image cannot be rendered
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-[#153a6b] text-base md:text-lg leading-tight tracking-tight uppercase">
                Kolhapur Industrial Expo
              </span>
              <span className="text-[11px] font-semibold text-[#f3701e] tracking-wider uppercase">
                28 Feb, 1 & 2 March 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-slate-700">
            {/* Home */}
            <button
              onClick={() => handleNav("home")}
              id="nav-link-home"
              className={`px-3 py-2 rounded transition-colors ${activePage === "home" ? "text-[#f3701e] font-bold" : "hover:text-[#153a6b]"}`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button
                id="nav-dropdown-about"
                className={`px-3 py-2 rounded flex items-center gap-1 transition-colors ${
                  ["about-us", "about-kie", "why-kolhapur", "industry-statistics", "exhibition-venue"].includes(activePage)
                    ? "text-[#f3701e] font-bold"
                    : "hover:text-[#153a6b]"
                }`}
              >
                About <i className="bi bi-chevron-down text-[10px] opacity-70"></i>
              </button>
              {aboutDropdown && (
                <div className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-lg py-2 border border-slate-100 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNav("about-us")}
                    id="nav-link-about-us"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>About Us (Organizer)</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("about-kie")}
                    id="nav-link-about-kie"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>About KIE 2027</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("why-kolhapur")}
                    id="nav-link-why-kolhapur"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Why Kolhapur</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("industry-statistics")}
                    id="nav-link-industry-statistics"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Industry Statistics</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("exhibition-venue")}
                    id="nav-link-exhibition-venue"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Exhibition Venue & Route</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                </div>
              )}
            </div>

            {/* Exhibitor Info Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setExhibitorDropdown(true)}
              onMouseLeave={() => setExhibitorDropdown(false)}
            >
              <button
                id="nav-dropdown-exhibitor"
                className={`px-3 py-2 rounded flex items-center gap-1 transition-colors ${
                  ["why-exhibit", "exhibitor-profile", "stall-charges", "exhibitor-registration", "esteemed-exhibitor"].includes(activePage)
                    ? "text-[#f3701e] font-bold"
                    : "hover:text-[#153a6b]"
                }`}
              >
                Exhibitor Info <i className="bi bi-chevron-down text-[10px] opacity-70"></i>
              </button>
              {exhibitorDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 border border-slate-100 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNav("why-exhibit")}
                    id="nav-link-why-exhibit"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Why Exhibit</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("exhibitor-profile")}
                    id="nav-link-exhibitor-profile"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Exhibitor Profile (22 Sectors)</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("stall-charges")}
                    id="nav-link-stall-charges"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Stall Charges & Calculator</span>
                    <span className="bg-orange-100 text-[#f3701e] text-[10px] px-1.5 py-0.5 rounded font-bold">Dynamic</span>
                  </button>
                  <button
                    onClick={() => handleNav("exhibitor-registration")}
                    id="nav-link-exhibitor-registration"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Exhibitor Registration</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("esteemed-exhibitor")}
                    id="nav-link-esteemed-exhibitor"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Esteemed Exhibitors (294)</span>
                    <span className="bg-blue-100 text-[#153a6b] text-[10px] px-1.5 py-0.5 rounded font-bold">Searchable</span>
                  </button>
                </div>
              )}
            </div>

            {/* Visitor Info Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setVisitorDropdown(true)}
              onMouseLeave={() => setVisitorDropdown(false)}
            >
              <button
                id="nav-dropdown-visitor"
                className={`px-3 py-2 rounded flex items-center gap-1 transition-colors ${
                  ["why-visit", "visitor-profile", "visitor-registration", "visitor-info"].includes(activePage)
                    ? "text-[#f3701e] font-bold"
                    : "hover:text-[#153a6b]"
                }`}
              >
                Visitor Info <i className="bi bi-chevron-down text-[10px] opacity-70"></i>
              </button>
              {visitorDropdown && (
                <div className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-lg py-2 border border-slate-100 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNav("why-visit")}
                    id="nav-link-why-visit"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Why Visit</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("visitor-profile")}
                    id="nav-link-visitor-profile"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Visitors Profile</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                  <button
                    onClick={() => handleNav("visitor-registration")}
                    id="nav-link-visitor-registration"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between font-semibold text-[#f3701e]"
                  >
                    <span>Visitor Registration (Instant Badge)</span>
                    <span className="bg-orange-100 text-[#f3701e] text-[10px] px-1.5 py-0.5 rounded font-bold">Pass</span>
                  </button>
                  <button
                    onClick={() => handleNav("visitor-info")}
                    id="nav-link-visitor-info"
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#f3701e] text-xs flex items-center justify-between"
                  >
                    <span>Visitor Guidelines & Info</span>
                    <i className="bi bi-arrow-right text-[10px] text-slate-400"></i>
                  </button>
                </div>
              )}
            </div>

            {/* Downloads */}
            <button
              onClick={() => handleNav("downloads")}
              id="nav-link-downloads"
              className={`px-3 py-2 rounded transition-colors ${activePage === "downloads" ? "text-[#f3701e] font-bold" : "hover:text-[#153a6b]"}`}
            >
              Downloads
            </button>

            {/* Supporting Associations */}
            <button
              onClick={() => handleNav("supporting-associations")}
              id="nav-link-supporting-associations"
              className={`px-3 py-2 rounded transition-colors ${activePage === "supporting-associations" ? "text-[#f3701e] font-bold" : "hover:text-[#153a6b]"}`}
            >
              Supporting Associations
            </button>

            {/* Gallery */}
            <button
              onClick={() => handleNav("gallery")}
              id="nav-link-gallery"
              className={`px-3 py-2 rounded transition-colors ${activePage === "gallery" ? "text-[#f3701e] font-bold" : "hover:text-[#153a6b]"}`}
            >
              Gallery
            </button>

            {/* Contact Us */}
            <button
              onClick={() => handleNav("contact-us")}
              id="nav-link-contact-us"
              className={`px-3 py-2 rounded transition-colors ${activePage === "contact-us" ? "text-[#f3701e] font-bold" : "hover:text-[#153a6b]"}`}
            >
              Contact Us
            </button>

            {/* Admin / Leads Portal Button */}
            <button
              onClick={() => handleNav("admin-portal")}
              id="nav-link-admin-portal"
              className={`ml-2 px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
                activePage === "admin-portal"
                  ? "bg-[#153a6b] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              title="Organizers & Leads Management Portal"
            >
              <i className="bi bi-speedometer2 text-[#f3701e]"></i>
              <span>Leads Portal</span>
            </button>
          </div>

          {/* Mobile Menu & Search Buttons */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenSearch}
              id="mobile-search-trigger"
              className="p-2 text-slate-600 hover:text-[#f3701e] rounded-md"
              aria-label="Search"
            >
              <i className="bi bi-search text-lg"></i>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-slate-700 hover:text-[#153a6b] rounded-md focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <i className={`bi ${mobileMenuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="flex flex-col gap-1 text-sm font-medium">
              <button
                onClick={() => handleNav("home")}
                className={`text-left py-2 px-3 rounded ${activePage === "home" ? "bg-orange-50 text-[#f3701e] font-bold" : "text-slate-700"}`}
              >
                Home
              </button>

              <div className="py-1">
                <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">About Expo</div>
                <button onClick={() => handleNav("about-us")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">About Us (Organizer)</button>
                <button onClick={() => handleNav("about-kie")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">About KIE 2027</button>
                <button onClick={() => handleNav("why-kolhapur")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Why Kolhapur</button>
                <button onClick={() => handleNav("industry-statistics")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Industry Statistics</button>
                <button onClick={() => handleNav("exhibition-venue")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Exhibition Venue & Route</button>
              </div>

              <div className="py-1 border-t border-slate-100">
                <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Exhibitor Services</div>
                <button onClick={() => handleNav("why-exhibit")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Why Exhibit</button>
                <button onClick={() => handleNav("exhibitor-profile")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Exhibitor Profile</button>
                <button onClick={() => handleNav("stall-charges")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e] font-semibold text-[#f3701e]">Stall Charges & Cost Calculator</button>
                <button onClick={() => handleNav("exhibitor-registration")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Exhibitor Registration</button>
                <button onClick={() => handleNav("esteemed-exhibitor")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Esteemed Exhibitors (294)</button>
              </div>

              <div className="py-1 border-t border-slate-100">
                <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Visitor Services</div>
                <button onClick={() => handleNav("why-visit")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Why Visit</button>
                <button onClick={() => handleNav("visitor-profile")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Visitors Profile</button>
                <button onClick={() => handleNav("visitor-registration")} className="w-full text-left py-1.5 px-4 text-xs text-[#f3701e] font-bold">Visitor Registration (Instant Badge)</button>
                <button onClick={() => handleNav("visitor-info")} className="w-full text-left py-1.5 px-4 text-xs text-slate-700 hover:text-[#f3701e]">Visitor Guidelines & Info</button>
              </div>

              <div className="py-1 border-t border-slate-100">
                <button onClick={() => handleNav("downloads")} className="w-full text-left py-2 px-3 text-slate-700 hover:text-[#f3701e]">Downloads</button>
                <button onClick={() => handleNav("supporting-associations")} className="w-full text-left py-2 px-3 text-slate-700 hover:text-[#f3701e]">Supporting Associations</button>
                <button onClick={() => handleNav("gallery")} className="w-full text-left py-2 px-3 text-slate-700 hover:text-[#f3701e]">Gallery</button>
                <button onClick={() => handleNav("contact-us")} className="w-full text-left py-2 px-3 text-slate-700 hover:text-[#f3701e]">Contact Us</button>
                <button onClick={() => handleNav("admin-portal")} className="w-full text-left py-2 px-3 bg-blue-50 text-[#153a6b] font-bold rounded mt-2 flex items-center gap-2">
                  <i className="bi bi-speedometer2 text-[#f3701e]"></i>
                  Organizers & Leads Portal
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => handleNav("visitor-registration")}
                  className="w-full bg-[#153a6b] text-white py-2.5 rounded font-bold text-center text-xs uppercase tracking-wider"
                >
                  <i className="bi bi-person-badge me-1"></i> Register as Visitor (Free Pass)
                </button>
                <button
                  onClick={() => handleNav("exhibitor-registration")}
                  className="w-full bg-[#f3701e] text-white py-2.5 rounded font-bold text-center text-xs uppercase tracking-wider"
                >
                  <i className="bi bi-briefcase me-1"></i> Book Exhibition Stall
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
