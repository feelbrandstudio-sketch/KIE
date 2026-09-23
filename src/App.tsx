import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { EXPO_DETAILS } from "./data/expoData";

// 19 Pages
import { HomePage } from "./pages/HomePage";
import { AboutKiePage } from "./pages/AboutKiePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { WhyKolhapurPage } from "./pages/WhyKolhapurPage";
import { IndustryStatsPage } from "./pages/IndustryStatsPage";
import { ExhibitionVenuePage } from "./pages/ExhibitionVenuePage";
import { WhyExhibitPage } from "./pages/WhyExhibitPage";
import { ExhibitorProfilePage } from "./pages/ExhibitorProfilePage";
import { StallChargesPage } from "./pages/StallChargesPage";
import { ExhibitorRegPage } from "./pages/ExhibitorRegPage";
import { EsteemedExhibitorsPage } from "./pages/EsteemedExhibitorsPage";
import { WhyVisitPage } from "./pages/WhyVisitPage";
import { VisitorProfilePage } from "./pages/VisitorProfilePage";
import { VisitorInfoPage } from "./pages/VisitorInfoPage";
import { VisitorRegPage } from "./pages/VisitorRegPage";
import { DownloadsPage } from "./pages/DownloadsPage";
import { SupportingAssocPage } from "./pages/SupportingAssocPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { AdminPortalPage } from "./pages/AdminPortalPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [pageParams, setPageParams] = useState<any>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Synchronize browser history / hash if preferred, and scroll to top on navigate
  const handleNavigate = (page: string, params?: any) => {
    setCurrentPage(page);
    setPageParams(params || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Render the current active page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about-kie":
        return <AboutKiePage onNavigate={handleNavigate} />;
      case "about-us":
        return <AboutUsPage onNavigate={handleNavigate} />;
      case "why-kolhapur":
        return <WhyKolhapurPage onNavigate={handleNavigate} />;
      case "industry-stats":
        return <IndustryStatsPage onNavigate={handleNavigate} />;
      case "exhibition-venue":
        return <ExhibitionVenuePage onNavigate={handleNavigate} />;
      case "why-exhibit":
        return <WhyExhibitPage onNavigate={handleNavigate} />;
      case "exhibitor-profile":
        return <ExhibitorProfilePage onNavigate={handleNavigate} />;
      case "stall-charges":
        return <StallChargesPage onNavigate={handleNavigate} />;
      case "exhibitor-registration":
        return <ExhibitorRegPage initialBookingData={pageParams} />;
      case "esteemed-exhibitors":
        return <EsteemedExhibitorsPage onNavigate={handleNavigate} />;
      case "why-visit":
        return <WhyVisitPage onNavigate={handleNavigate} />;
      case "visitor-profile":
        return <VisitorProfilePage onNavigate={handleNavigate} />;
      case "visitor-information":
        return <VisitorInfoPage onNavigate={handleNavigate} />;
      case "visitor-registration":
        return <VisitorRegPage />;
      case "downloads":
        return <DownloadsPage />;
      case "supporting-associations":
        return <SupportingAssocPage onNavigate={handleNavigate} />;
      case "gallery":
        return <GalleryPage />;
      case "contact-us":
        return <ContactUsPage initialMessage={pageParams?.message} />;
      case "admin-portal":
        return <AdminPortalPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#f3701e] selection:text-white">
      {/* Top Banner Notice for Organizer Mode */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Kolhapur Industrial Expo 2027 • Official Dynamic Platform (All 19 Pages Dynamic)</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavigate("admin-portal")}
            className="hover:text-white text-[#f3701e] font-bold transition-colors flex items-center gap-1"
          >
            <i className="bi bi-shield-lock-fill"></i>
            <span>Leads & Admin Dashboard</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <Header
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Main Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Buttons: WhatsApp & Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-11 h-11 bg-[#153a6b] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#102c52] transition-all hover:scale-105"
            title="Back to top"
            aria-label="Back to top"
          >
            <i className="bi bi-arrow-up text-lg"></i>
          </button>
        )}

        <a
          href={EXPO_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          title="Chat with Expo Team on WhatsApp"
          aria-label="WhatsApp Contact"
        >
          <i className="fa-brands fa-whatsapp text-2xl"></i>
        </a>
      </div>

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
