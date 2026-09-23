import React, { useState } from "react";
import { storageService, VisitorLead } from "../services/storageService";
import { VisitorBadgeModal } from "../components/VisitorBadgeModal";
import { EXHIBITOR_SECTORS } from "../data/expoData";

export const VisitorRegPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    website: "",
    interests: [] as string[]
  });

  const [generatedVisitor, setGeneratedVisitor] = useState<VisitorLead | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (sectorTitle: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(sectorTitle);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== sectorTitle)
          : [...prev.interests, sectorTitle]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const saved = storageService.saveVisitor({
      name: formData.name,
      company: formData.company,
      designation: formData.designation,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      website: formData.website,
      interests: formData.interests
    });

    setIsSubmitting(false);
    setGeneratedVisitor(saved);
  };

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            FREE VISITOR ENTRY PASS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Visitor Pre-Registration (Instant Digital E-Badge)
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Register now to receive your instant scannable E-Badge for fast-track entry to Kolhapur Industrial Expo 2027.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="border-b border-slate-100 pb-6 mb-8 text-center">
            <span className="bg-green-100 text-green-800 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Complimentary B2B Trade Badge
            </span>
            <h2 className="text-2xl font-black text-[#153a6b] mt-3">
              Discover Technology. Meet Suppliers. Find Solutions.
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              One of the World's Fastest Growing Manufacturing Markets
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Your Full Name <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-person absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Name of Company / Firm <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-building absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Enter company name"
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
                    placeholder="Enter your designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Email Address <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Phone Number <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-telephone absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  City <span className="text-[#f3701e]">*</span>
                </label>
                <div className="relative">
                  <i className="bi bi-geo-alt absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Website (Optional)
                </label>
                <div className="relative">
                  <i className="bi bi-globe absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    name="website"
                    placeholder="Enter company website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#f3701e] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Sourcing Interests */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                What are you looking to source? (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {EXHIBITOR_SECTORS.slice(0, 8).map((sec) => {
                  const selected = formData.interests.includes(sec.title);
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => handleInterestToggle(sec.title)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-colors font-medium ${
                        selected
                          ? "bg-[#153a6b] text-white font-bold"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {sec.title.split(",")[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-visitor-reg-btn"
                className="w-full sm:w-auto bg-[#f3701e] hover:bg-[#d95e10] text-white px-10 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                <i className="bi bi-qr-code-scan"></i>
                <span>Generate Official E-Badge</span>
              </button>
              <p className="text-[11px] text-slate-400 mt-2">
                Fast-track entry. Show your digital badge on mobile or print at the entrance.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Generated Visitor Badge Modal */}
      <VisitorBadgeModal
        visitor={generatedVisitor}
        onClose={() => setGeneratedVisitor(null)}
      />
    </div>
  );
};
