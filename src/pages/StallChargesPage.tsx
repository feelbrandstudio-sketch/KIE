import React, { useState } from "react";

interface StallChargesPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const StallChargesPage: React.FC<StallChargesPageProps> = ({ onNavigate }) => {
  // Calculator State
  const [stallType, setStallType] = useState<"shell" | "raw">("shell");
  const [area, setArea] = useState<number>(18);
  const [openSides, setOpenSides] = useState<"1-side" | "corner" | "3-sides" | "island">("corner");

  // Pricing constants from official website
  const SHELL_RATE = 9500;
  const RAW_RATE = 8500;
  const GST_RATE = 0.18;

  const currentRate = stallType === "shell" ? SHELL_RATE : RAW_RATE;

  // Open side premium
  const premiumPercent =
    openSides === "corner" ? 0.10 :
    openSides === "3-sides" ? 0.15 :
    openSides === "island" ? 0.20 : 0;

  const baseAmount = area * currentRate;
  const premiumAmount = baseAmount * premiumPercent;
  const subTotal = baseAmount + premiumAmount;
  const gstAmount = subTotal * GST_RATE;
  const grandTotal = subTotal + gstAmount;

  const handleProceedToBooking = () => {
    onNavigate("exhibitor-registration", {
      stallType,
      stallAreaSqm: area,
      openSides,
      estimatedTotal: grandTotal
    });
  };

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            PARTICIPATION CHARGES
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Stall Charges & Shell Scheme Guide
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Transparent Pricing, Comprehensive Shell Scheme Inclusions & Instant Cost Calculator
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* ============ 1. OFFICIAL RATES TABLE ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shell Scheme Card */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#f3701e] shadow-lg relative flex flex-col justify-between">
            <span className="absolute top-4 right-4 bg-orange-100 text-[#f3701e] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
              Most Popular
            </span>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Option 01</span>
              <h2 className="text-2xl font-black text-[#153a6b] mt-1">Built-Up Shell Scheme</h2>
              <div className="my-4">
                <span className="text-4xl font-black text-[#f3701e] font-mono">₹9,500</span>
                <span className="text-xs text-slate-500 font-medium ml-1">/ sq. metre (+ 18% GST)</span>
              </div>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Ideal for most engineering, tooling, metrology, and robotics exhibitors. Complete hassle-free turn-key stall setup.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">Key Terms & Specifications:</p>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check2-circle text-[#f3701e]"></i> Minimum booking size: <strong>9 sq.m (3m x 3m)</strong>
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check2-circle text-[#f3701e]"></i> Standard sizes: 9, 12, 15, 18, 24, 36 sq.m
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check2-circle text-[#f3701e]"></i> Full furniture, electrical lights & power point included
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setStallType("shell");
                window.scrollTo({ top: 750, behavior: "smooth" });
              }}
              className="mt-6 w-full bg-[#153a6b] hover:bg-[#102c52] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Select & Calculate Shell Scheme
            </button>
          </div>

          {/* Bare Space Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Option 02</span>
              <h2 className="text-2xl font-black text-[#153a6b] mt-1">Bare Space (Raw Space)</h2>
              <div className="my-4">
                <span className="text-4xl font-black text-[#153a6b] font-mono">₹8,500</span>
                <span className="text-xs text-slate-500 font-medium ml-1">/ sq. metre (+ 18% GST)</span>
              </div>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Ideal for heavy machinery, CNC machine demonstrations, large foundry equipment, and custom architectural fabrications.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">Key Terms & Specifications:</p>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check2-circle text-slate-400"></i> Minimum booking size: <strong>36 sq.m (6m x 6m)</strong>
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check2-circle text-slate-400"></i> Floor space only (No walls, carpet or furniture)
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-check2-circle text-slate-400"></i> Power connection provided on chargeable basis
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setStallType("raw");
                if (area < 36) setArea(36);
                window.scrollTo({ top: 750, behavior: "smooth" });
              }}
              className="mt-6 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Select & Calculate Bare Space
            </button>
          </div>
        </div>

        {/* ============ 2. DYNAMIC STALL COST CALCULATOR ============ */}
        <div id="calculator-section" className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              INSTANT ESTIMATOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#153a6b]">
              Interactive Stall Cost Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select your required area, layout and options to calculate the pro-forma exhibition cost in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Stall Type */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">1. Select Stall Scheme</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStallType("shell");
                      if (area < 9) setArea(9);
                    }}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      stallType === "shell"
                        ? "border-[#f3701e] bg-orange-50/60 font-bold text-[#153a6b] shadow-xs"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    <span className="block font-bold">Built-up Shell Scheme</span>
                    <span className="text-[11px] text-slate-500 font-mono">₹9,500/sqm (Min 9 sqm)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setStallType("raw");
                      if (area < 36) setArea(36);
                    }}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      stallType === "raw"
                        ? "border-[#f3701e] bg-orange-50/60 font-bold text-[#153a6b] shadow-xs"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    <span className="block font-bold">Bare Space / Raw Space</span>
                    <span className="text-[11px] text-slate-500 font-mono">₹8,500/sqm (Min 36 sqm)</span>
                  </button>
                </div>
              </div>

              {/* Area */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-slate-700">
                    2. Select Stall Area (Sq. Metres)
                  </label>
                  <span className="text-sm font-black text-[#f3701e] font-mono">{area} sq.m</span>
                </div>

                {/* Quick Area Buttons */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {(stallType === "shell" ? [9, 12, 18, 24, 27, 36] : [36, 48, 54, 72, 100]).map((sqm) => (
                    <button
                      key={sqm}
                      type="button"
                      onClick={() => setArea(sqm)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                        area === sqm
                          ? "bg-[#153a6b] text-white"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {sqm} sqm
                    </button>
                  ))}
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min={stallType === "shell" ? 9 : 36}
                  max={150}
                  step={stallType === "shell" ? 3 : 6}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full accent-[#f3701e] cursor-pointer"
                />
              </div>

              {/* Open Sides Preference */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  3. Stall Orientation & Open Sides
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "1-side", label: "Standard (1 Side)", extra: "0%" },
                    { id: "corner", label: "Corner (2 Sides)", extra: "+10%" },
                    { id: "3-sides", label: "3-Sides Open", extra: "+15%" },
                    { id: "island", label: "Island (4 Sides)", extra: "+20%" }
                  ].map((side) => (
                    <button
                      key={side.id}
                      type="button"
                      onClick={() => setOpenSides(side.id as any)}
                      className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                        openSides === side.id
                          ? "border-[#f3701e] bg-orange-50 font-bold text-[#153a6b]"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <span className="block text-[11px] font-semibold">{side.label}</span>
                      <span className="text-[10px] text-[#f3701e] font-bold">{side.extra}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Breakdown Summary */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-extrabold text-[#153a6b] text-base uppercase tracking-wider border-b border-slate-100 pb-3">
                Pro-Forma Cost Breakdown
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex justify-between items-center">
                  <span>Selected Stall Type</span>
                  <strong className="uppercase text-slate-900">{stallType === "shell" ? "Built-up Shell" : "Bare Space"}</strong>
                </div>

                <div className="flex justify-between items-center">
                  <span>Area Allocated</span>
                  <strong className="font-mono text-slate-900">{area} sq.m ({openSides})</strong>
                </div>

                <div className="flex justify-between items-center">
                  <span>Base Rate</span>
                  <span className="font-mono">₹{currentRate.toLocaleString("en-IN")} / sqm</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Base Amount ({area} x ₹{currentRate})</span>
                  <span className="font-mono font-medium">₹{baseAmount.toLocaleString("en-IN")}</span>
                </div>

                {premiumPercent > 0 && (
                  <div className="flex justify-between items-center text-amber-700">
                    <span>Orientation Premium ({(premiumPercent * 100).toFixed(0)}%)</span>
                    <span className="font-mono font-medium">+ ₹{premiumAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}

                <div className="flex justify-between items-center border-t border-slate-100 pt-2 font-semibold">
                  <span>Taxable Subtotal</span>
                  <span className="font-mono">₹{subTotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between items-center text-slate-500">
                  <span>GST @ 18%</span>
                  <span className="font-mono">₹{gstAmount.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between items-center border-t-2 border-slate-900 pt-3 text-base font-black text-[#153a6b]">
                  <span>Grand Total (INR)</span>
                  <span className="text-xl text-[#f3701e] font-mono">
                    ₹{Math.round(grandTotal).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleProceedToBooking}
                  id="calc-proceed-btn"
                  className="w-full bg-[#f3701e] hover:bg-[#d95e10] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <i className="bi bi-arrow-right-circle-fill"></i> Proceed to Book This Stall
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  *Official invoice and space layout will be issued upon form submission.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============ 3. SHELL SCHEME PHOTO INCLUSIONS ============ */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
              TURNKEY SETUP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#153a6b]">
              Visual Shell Scheme Stall Inclusions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every 9 sq.m built-up stall comes furnished with premium Octanorm accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Octanorm Partition Walls", desc: "Clean white laminated panels on 3 sides (or 2 sides for corners).", img: "/assets/images/stall.jpg" },
              { title: "Company Fascia Board", desc: "Prominent vinyl branding with your company name & stall number.", img: "/assets/images/spaces.jpg" },
              { title: "1 Info Table & 2 Chairs", desc: "Sturdy reception counter table with visitor conference chairs.", img: "/assets/images/stall.jpg" },
              { title: "Lights & 5A Power Point", desc: "3 high-intensity spotlights, 1 power socket 230V & daily cleaning.", img: "/assets/images/spaces.jpg" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs group">
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-extrabold text-sm text-[#153a6b] mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
