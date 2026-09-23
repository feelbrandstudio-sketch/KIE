import React, { useState, useEffect } from "react";
import {
  EXPO_DETAILS,
  TESTIMONIALS,
  EXHIBITOR_SECTORS,
  SUPPORTING_ASSOCIATIONS,
  EXHIBITOR_BRAND_LOGOS,
  MEDIA_LOGOS
} from "../data/expoData";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HERO_SLIDES = [
  {
    image: "/assets/images/hero-1.jpg",
    badge: "10th Grand Industrial Edition",
    title: "Western Maharashtra's Premier Industrial Platform",
    subtitle: "Connecting 300+ Leading Manufacturers with 40,000+ Qualified Industrial Buyers",
    ctaPrimary: { text: "Visitor Registration (Free Pass)", page: "visitor-registration" },
    ctaSecondary: { text: "Book Exhibition Stall", page: "exhibitor-registration" }
  },
  {
    image: "/assets/images/hero-2.jpg",
    badge: "Machine Tools & Smart Manufacturing",
    title: "High-Tech CNC, Robotics & Automation",
    subtitle: "Live machine demonstrations, cutting-edge precision tooling, and smart shop-floor technologies",
    ctaPrimary: { text: "Explore 22 Sectors", page: "exhibitor-profile" },
    ctaSecondary: { text: "Stall Charges Guide", page: "stall-charges" }
  },
  {
    image: "/assets/images/hero-3.jpg",
    badge: "Global Foundry & Metalworking Capital",
    title: "Gateway to India's USD 22B Foundry Market",
    subtitle: "At the epicentre of Kolhapur, Sangli, Satara, Belgaum, Pune, Hubli, and Goa manufacturing clusters",
    ctaPrimary: { text: "Why Kolhapur", page: "why-kolhapur" },
    ctaSecondary: { text: "Download Brochure", page: "downloads" }
  },
  {
    image: "/assets/images/hero-4.jpg",
    badge: "28 Feb, 1 & 2 March 2027",
    title: "Merry Weather Ground, Kolhapur",
    subtitle: "Western Maharashtra's largest convergence of foundries, OEMs, MSMEs, and technology suppliers",
    ctaPrimary: { text: "Venue & Route", page: "exhibition-venue" },
    ctaSecondary: { text: "View 294 Exhibitors", page: "esteemed-exhibitor" }
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Countdown timer to Feb 28, 2027
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2027-02-28T09:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Slide autoplay
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const nextTestimonial = () => setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const currentTestimonial = TESTIMONIALS[testimonialIdx];

  return (
    <div className="font-sans">
      {/* ============ 1. DYNAMIC HERO SLIDER ============ */}
      <section className="relative bg-slate-950 text-white min-h-[540px] md:min-h-[620px] flex items-center overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background image with gradient overlay */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
          </div>
        ))}

        {/* Hero Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#f3701e] text-white px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              {HERO_SLIDES[currentSlide].badge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
              {HERO_SLIDES[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed font-medium">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => onNavigate(HERO_SLIDES[currentSlide].ctaPrimary.page)}
                id="hero-primary-cta-btn"
                className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
              >
                <i className="bi bi-ticket-perforated-fill"></i>
                {HERO_SLIDES[currentSlide].ctaPrimary.text}
              </button>

              <button
                onClick={() => onNavigate(HERO_SLIDES[currentSlide].ctaSecondary.page)}
                id="hero-secondary-cta-btn"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <i className="bi bi-info-circle"></i>
                {HERO_SLIDES[currentSlide].ctaSecondary.text}
              </button>
            </div>

            {/* Quick Details Pills */}
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
                <i className="bi bi-calendar-event text-[#f3701e]"></i>
                <span>{EXPO_DETAILS.dates}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
                <i className="bi bi-geo-alt-fill text-[#f3701e]"></i>
                <span>Merry Weather Ground, Kolhapur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute z-20 bottom-6 right-6 hidden sm:flex items-center gap-2">
          <button
            onClick={prevSlide}
            id="hero-prev-btn"
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#f3701e] border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <div className="flex gap-1.5 px-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? "w-6 bg-[#f3701e]" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            id="hero-next-btn"
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#f3701e] border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* ============ 2. LIVE COUNTDOWN & HIGHLIGHT BAR ============ */}
      <section className="bg-[#153a6b] text-white py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xs uppercase font-extrabold text-[#f3701e] tracking-widest block mb-1">
                EXHIBITION COUNTDOWN
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Countdown to Kolhapur Industrial Expo 2027
              </h2>
            </div>

            {/* Countdown timer numbers */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-black/30 border border-white/15 rounded-lg p-2.5 sm:p-3 min-w-[70px] sm:min-w-[80px] text-center shadow-inner">
                <span className="block text-2xl sm:text-3xl font-black text-[#f3701e] font-mono leading-none">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Days</span>
              </div>
              <div className="text-xl font-bold text-[#f3701e]">:</div>
              <div className="bg-black/30 border border-white/15 rounded-lg p-2.5 sm:p-3 min-w-[70px] sm:min-w-[80px] text-center shadow-inner">
                <span className="block text-2xl sm:text-3xl font-black text-[#f3701e] font-mono leading-none">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Hours</span>
              </div>
              <div className="text-xl font-bold text-[#f3701e]">:</div>
              <div className="bg-black/30 border border-white/15 rounded-lg p-2.5 sm:p-3 min-w-[70px] sm:min-w-[80px] text-center shadow-inner">
                <span className="block text-2xl sm:text-3xl font-black text-[#f3701e] font-mono leading-none">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Minutes</span>
              </div>
              <div className="text-xl font-bold text-[#f3701e]">:</div>
              <div className="bg-black/30 border border-white/15 rounded-lg p-2.5 sm:p-3 min-w-[70px] sm:min-w-[80px] text-center shadow-inner">
                <span className="block text-2xl sm:text-3xl font-black text-white font-mono leading-none">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Seconds</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate("visitor-registration")}
              id="countdown-register-btn"
              className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-colors shadow-md whitespace-nowrap"
            >
              Get Free Entry Pass
            </button>
          </div>
        </div>
      </section>

      {/* ============ 3. KEY METRICS STATS ============ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPO_DETAILS.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-50 hover:bg-orange-50/50 p-6 rounded-xl border border-slate-200 transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-[#153a6b] text-white mx-auto mb-3 flex items-center justify-center text-xl group-hover:bg-[#f3701e] transition-colors">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#153a6b] group-hover:text-[#f3701e] transition-colors font-mono">
                  {stat.value}
                </h3>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. ABOUT KIE HIGHLIGHT ============ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block">
                WELCOME TO KIE 2027
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#153a6b] tracking-tight leading-tight">
                The Trusted Industrial Platform Returns. Bigger. Stronger. Better.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building on the success of earlier editions, <strong>Kolhapur Industrial Expo 2027</strong> returns with
                a renewed vision to bring manufacturers, technology providers and industrial buyers together at the
                heart of Western Maharashtra's manufacturing ecosystem.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Earlier editions earned the confidence of exhibitors through quality visitors, strong regional outreach
                and valuable business opportunities. KIE 2027 delivers a premier B2B platform spanning foundries, auto components,
                machine tools, automation, robotics, fabrication, and smart engineering.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <i className="bi bi-check-circle-fill text-[#f3701e] text-base"></i>
                  <span>Direct Access to Decision Makers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <i className="bi bi-check-circle-fill text-[#f3701e] text-base"></i>
                  <span>Western Maharashtra Foundry Capital</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <i className="bi bi-check-circle-fill text-[#f3701e] text-base"></i>
                  <span>Live Machinery Demonstration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <i className="bi bi-check-circle-fill text-[#f3701e] text-base"></i>
                  <span>20+ Supporting Associations</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate("about-kie")}
                  id="about-read-more-btn"
                  className="bg-[#153a6b] hover:bg-[#102c52] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Read About KIE Vision
                </button>
                <button
                  onClick={() => onNavigate("why-kolhapur")}
                  id="about-why-kolhapur-btn"
                  className="bg-white hover:bg-slate-100 text-[#153a6b] border border-slate-300 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Why Kolhapur Hub
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="/assets/images/home-about.jpg"
                  alt="Industrial Expo Machinery and Visitors"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                  <span className="text-xs font-bold text-[#f3701e] uppercase">Regional Stronghold</span>
                  <h4 className="text-lg font-bold">Kolhapur • Sangli • Satara • Belgaum • Pune • Goa</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. EXHIBITOR FOCUS SECTORS ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              COMPREHENSIVE INDUSTRY SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#153a6b] tracking-tight">
              Featured Industrial Sectors
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From heavy foundry technology to high-precision CNC tooling and robotics, KIE 2027 covers the entire manufacturing spectrum.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {EXHIBITOR_SECTORS.slice(0, 8).map((sec) => (
              <div
                key={sec.id}
                onClick={() => onNavigate("exhibitor-profile")}
                className="bg-slate-50 hover:bg-orange-50/70 p-5 rounded-xl border border-slate-200 hover:border-orange-300 transition-all cursor-pointer group flex flex-col items-center text-center shadow-xs"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-xs border border-slate-200 p-2.5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={sec.icon}
                    alt={sec.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#f3701e] transition-colors leading-snug">
                  {sec.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate("exhibitor-profile")}
              id="view-all-sectors-btn"
              className="bg-[#153a6b] hover:bg-[#102c52] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>View All 22 Industrial Sectors</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* ============ 6. STALL PACKAGES & CALCULATOR TEASER ============ */}
      <section className="py-16 bg-[#102c52] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block">
                PARTICIPATION CHARGES & SPECIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Transparent Space Tariffs & Shell Scheme Options
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Choose between standard Octanorm Built-up Shell Schemes (including spotlights, chairs, table, power point, fascia board)
                or customized Bare Space for heavy machinery installations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <span className="text-xs font-bold text-[#f3701e] uppercase block">Built-up Shell Scheme</span>
                  <div className="text-2xl font-black text-white my-1 font-mono">₹9,500 <span className="text-xs font-normal text-slate-300">/ sq.m + GST</span></div>
                  <p className="text-[11px] text-slate-300">Min 9 sq.m stall with all standard electricals, furniture & carpet inclusions.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <span className="text-xs font-bold text-[#f3701e] uppercase block">Bare Space (Raw Space)</span>
                  <div className="text-2xl font-black text-white my-1 font-mono">₹8,500 <span className="text-xs font-normal text-slate-300">/ sq.m + GST</span></div>
                  <p className="text-[11px] text-slate-300">Min 36 sq.m raw floor space for personalized fabrication & heavy machinery.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate("stall-charges")}
                  id="home-stall-calc-btn"
                  className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md"
                >
                  <i className="bi bi-calculator"></i> Calculate Your Stall Cost
                </button>
                <button
                  onClick={() => onNavigate("exhibitor-registration")}
                  id="home-book-stall-btn"
                  className="bg-white hover:bg-slate-100 text-[#153a6b] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Book Stall Now
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200">
                <h3 className="text-base font-extrabold text-[#153a6b] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <i className="bi bi-box-seam text-[#f3701e]"></i>
                  9 Sq.m Stall Inclusions
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-lg text-green-600 font-bold"></i> Octanorm Pre-fabricated Partition Walls
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-lg text-green-600 font-bold"></i> Company Name Fascia Board with Stall No.
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-lg text-green-600 font-bold"></i> 1 Information Counter Table & 2 Chairs
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-lg text-green-600 font-bold"></i> 3 Spotlights & 1 Power Socket (5 Amp / 230V)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-lg text-green-600 font-bold"></i> Needle-Punch Floor Carpet
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-lg text-green-600 font-bold"></i> 1 Waste Paper Dustbin & Daily Cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-lg text-green-600 font-bold"></i> Exhibitor Badges & Official Directory Entry
                  </li>
                </ul>

                <button
                  onClick={() => onNavigate("stall-charges")}
                  className="w-full mt-5 bg-slate-100 hover:bg-slate-200 text-[#153a6b] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center block"
                >
                  View Full Shell Scheme Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. ESTEEMED EXHIBITORS DIRECTORY PREVIEW ============ */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
                INDUSTRY LEADERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#153a6b] tracking-tight">
                294+ Esteemed Exhibiting Brands
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Prominent manufacturers, machine tool innovators, metrology leaders, and foundry technology providers.
              </p>
            </div>
            <button
              onClick={() => onNavigate("esteemed-exhibitor")}
              id="home-view-all-exhibitors-btn"
              className="bg-[#153a6b] hover:bg-[#f3701e] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs whitespace-nowrap"
            >
              <span>Search All 294 Exhibitors</span>
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Dynamic Animated Brand Carousel */}
          <div className="relative py-4">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300">
              {EXHIBITOR_BRAND_LOGOS.map((logo, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs flex-shrink-0 w-36 h-20 flex items-center justify-center hover:border-[#f3701e] transition-colors"
                >
                  <img
                    src={logo}
                    alt={`Exhibitor Brand ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. SUPPORTING ASSOCIATIONS ============ */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            REGIONAL PATRONAGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#153a6b] tracking-tight mb-2">
            Supported by Leading Industry Associations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8">
            Connecting the exhibition with active manufacturers, foundry clusters, and chambers of commerce across Maharashtra & Karnataka.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {SUPPORTING_ASSOCIATIONS.map((assoc) => (
              <div
                key={assoc.id}
                onClick={() => onNavigate("supporting-associations")}
                className="bg-slate-50 hover:bg-orange-50/50 p-3 rounded-lg border border-slate-200 hover:border-orange-300 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[110px] group"
                title={assoc.name}
              >
                <img
                  src={assoc.logo}
                  alt={assoc.name}
                  className="max-h-12 w-auto object-contain mb-2 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="text-[10px] font-bold text-slate-700 text-center line-clamp-2 leading-tight">
                  {assoc.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => onNavigate("supporting-associations")}
              className="text-xs font-bold text-[#153a6b] hover:text-[#f3701e] inline-flex items-center gap-1 transition-colors uppercase tracking-wider"
            >
              <span>View details of all 14 associations & letters of support</span>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* ============ 9. TESTIMONIALS SLIDER ============ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              WHAT INDUSTRY LEADERS SAY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#153a6b] tracking-tight">
              Exhibitor Feedback & Trust
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200 relative">
            <i className="bi bi-quote text-5xl text-[#f3701e]/30 absolute top-4 left-6"></i>

            {/* Stars */}
            <div className="flex gap-1 text-[#f3701e] text-sm mb-4">
              {Array.from({ length: currentTestimonial.stars }).map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
              "{currentTestimonial.text}"
            </p>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <div>
                <h3 className="font-extrabold text-sm text-[#153a6b] uppercase">
                  {currentTestimonial.name}
                </h3>
                <p className="text-xs text-[#f3701e] font-semibold">
                  {currentTestimonial.role}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {currentTestimonial.company}
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  id="prev-testimonial-btn"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#153a6b] hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <i className="bi bi-chevron-left text-xs"></i>
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {testimonialIdx + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  id="next-testimonial-btn"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#153a6b] hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <i className="bi bi-chevron-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 10. MEDIA PARTNERS STRIP ============ */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
            Official Trade Media & Industrial Publications
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
            {MEDIA_LOGOS.map((m, i) => (
              <img
                key={i}
                src={m}
                alt={`Media Partner ${i + 1}`}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 11. VENUE & QUICK MAP CTA ============ */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#153a6b] to-[#102c52] rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
                MARK YOUR CALENDAR
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Join Western Maharashtra's Premier Industry Gathering
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                Merry Weather Ground, Nagala Park, Kolhapur • 28 Feb, 1 & 2 March 2027.
                Directly connected by National Highway 48, Pune-Miraj-Kolhapur Railway, and Kolhapur Airport.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate("visitor-registration")}
                className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Register as Visitor
              </button>
              <button
                onClick={() => onNavigate("exhibition-venue")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Venue & Map Route
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
