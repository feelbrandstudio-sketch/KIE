import React, { useState, useEffect } from "react";
import { storageService, ExhibitorBookingLead } from "../services/storageService";
import { ExhibitorConfirmModal } from "../components/ExhibitorConfirmModal";

interface ExhibitorRegPageProps {
  initialBookingData?: {
    stallType?: "shell" | "raw";
    stallAreaSqm?: number;
    openSides?: "1-side" | "corner" | "3-sides" | "island";
    estimatedTotal?: number;
  };
}

export const ExhibitorRegPage: React.FC<ExhibitorRegPageProps> = ({ initialBookingData }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    website: "",
    stallType: (initialBookingData?.stallType || "shell") as "shell" | "raw",
    stallAreaSqm: initialBookingData?.stallAreaSqm || 18,
    openSides: (initialBookingData?.openSides || "corner") as "1-side" | "corner" | "3-sides" | "island"
  });

  const [confirmedBooking, setConfirmedBooking] = useState<ExhibitorBookingLead | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialBookingData) {
      setFormData(prev => ({
        ...prev,
        stallType: initialBookingData.stallType || prev.stallType,
        stallAreaSqm: initialBookingData.stallAreaSqm || prev.stallAreaSqm,
        openSides: initialBookingData.openSides || prev.openSides
      }));
    }
  }, [initialBookingData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "stallAreaSqm" ? Number(value) : value
    }));
  };

  const calculateTotal = () => {
    const rate = formData.stallType === "shell" ? 9500 : 8500;
    const base = formData.stallAreaSqm * rate;
    const premiumPercent =
      formData.openSides === "corner" ? 0.10 :
      formData.openSides === "3-sides" ? 0.15 :
      formData.openSides === "island" ? 0.20 : 0;
    const subtotal = base + (base * premiumPercent);
    return Math.round(subtotal * 1.18);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const total = calculateTotal();

    const saved = storageService.saveExhibitorBooking({
      name: formData.name,
      company: formData.company,
      designation: formData.designation,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      website: formData.website,
      stallType: formData.stallType,
      stallAreaSqm: formData.stallAreaSqm,
      openSides: formData.openSides,
      totalEstimatedAmount: total
    });

    setIsSubmitting(false);
    setConfirmedBooking(saved);
  };

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            STALL BOOKING PORTAL
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Exhibitor Space Registration
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Discover Technology. Meet Suppliers. Find Solutions at KIE 2027.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="border-b border-slate-100 pb-6 mb-8 text-center">
            <h2 className="text-2xl font-black text-[#153a6b]">
              Exhibitor Space Application Form
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Please fill in your company details to apply for stall allocation at Kolhapur Industrial Expo 2027.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primary Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Contact Person */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Contact Person Name <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-person absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Name of Company <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-building absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Enter official company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Designation */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Designation <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-person-badge absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="designation"
                    required
                    placeholder="e.g. Managing Director / Sales Head"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Official Email <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. sales@yourcompany.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Mobile / Phone Number <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-telephone absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +91 98220 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  City / Location <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-geo-alt absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g. Kolhapur, Pune, Belgaum"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Company Website (Optional)
                </label>
                <div className="relative">
                  <i className="bi bi-globe absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="url"
                    name="website"
                    placeholder="https://www.yourcompany.com"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Stall Selection Details */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-[#153a6b]">
                Stall Specifications & Layout
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Stall Type</label>
                  <select
                    name="stallType"
                    value={formData.stallType}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800"
                  >
                    <option value="shell">Built-up Shell Scheme (₹9,500/sqm)</option>
                    <option value="raw">Bare Space / Raw Space (₹8,500/sqm)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Area (sq.m)</label>
                  <select
                    name="stallAreaSqm"
                    value={formData.stallAreaSqm}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800"
                  >
                    {formData.stallType === "shell" ? (
                      <>
                        <option value={9}>9 sq.m (3m x 3m)</option>
                        <option value={12}>12 sq.m (4m x 3m)</option>
                        <option value={18}>18 sq.m (6m x 3m)</option>
                        <option value={24}>24 sq.m (8m x 3m)</option>
                        <option value={36}>36 sq.m (6m x 6m)</option>
                      </>
                    ) : (
                      <>
                        <option value={36}>36 sq.m (6m x 6m)</option>
                        <option value={48}>48 sq.m (8m x 6m)</option>
                        <option value={54}>54 sq.m (9m x 6m)</option>
                        <option value={72}>72 sq.m (12m x 6m)</option>
                        <option value={100}>100 sq.m (Custom)</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Open Sides</label>
                  <select
                    name="openSides"
                    value={formData.openSides}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800"
                  >
                    <option value="1-side">Standard 1-Side Open (0%)</option>
                    <option value="corner">Corner 2-Sides Open (+10%)</option>
                    <option value="3-sides">3-Sides Open (+15%)</option>
                    <option value="island">Island 4-Sides Open (+20%)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-600 font-medium">Estimated Pro-Forma (incl. 18% GST):</span>
                <strong className="text-base font-black text-[#f3701e] font-mono">
                  ₹{calculateTotal().toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-exhibitor-reg-btn"
                className="w-full sm:w-auto bg-[#f3701e] hover:bg-[#d95e10] text-white px-10 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                <i className="bi bi-send-fill"></i>
                <span>Submit Stall Application</span>
              </button>
              <p className="text-[11px] text-slate-400 mt-2">
                No immediate payment required. Our team will verify floor layout and contact you.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Receipt Modal */}
      <ExhibitorConfirmModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </div>
  );
};
