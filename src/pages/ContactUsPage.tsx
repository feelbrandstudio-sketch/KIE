import React, { useState, useEffect } from "react";
import { EXPO_DETAILS } from "../data/expoData";
import { storageService } from "../services/storageService";

interface ContactUsPageProps {
  initialMessage?: string;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ initialMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Exhibitor Stall Booking",
    message: initialMessage || ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    storageService.saveContactMessage({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `[${formData.company}] ${formData.subject}`,
      message: formData.message
    });
    setSubmitted(true);
  };

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            COMMUNICATION DESK
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Contact Us & Organizer Support
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Get in touch with our exhibition sales, visitor helpdesk, and partnership teams.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Office Addresses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-extrabold text-[#153a6b] text-base uppercase tracking-wider">
                Exhibition Helpdesk
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#153a6b] text-white flex items-center justify-center text-sm flex-shrink-0">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Phone Support</span>
                    <a href={`tel:${EXPO_DETAILS.phone1}`} className="font-bold text-slate-900 hover:text-[#f3701e] block">
                      {EXPO_DETAILS.phone1}
                    </a>
                    <a href={`tel:${EXPO_DETAILS.phone2}`} className="font-bold text-slate-900 hover:text-[#f3701e] block">
                      {EXPO_DETAILS.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center text-sm flex-shrink-0">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">WhatsApp Direct</span>
                    <a
                      href={EXPO_DETAILS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-green-700 hover:underline"
                    >
                      Chat with Organizer on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3701e] text-white flex items-center justify-center text-sm flex-shrink-0">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Email Addresses</span>
                    <a href={`mailto:${EXPO_DETAILS.email1}`} className="font-bold text-slate-900 hover:text-[#f3701e] block">
                      {EXPO_DETAILS.email1}
                    </a>
                    <a href={`mailto:${EXPO_DETAILS.email2}`} className="font-bold text-slate-900 hover:text-[#f3701e] block">
                      {EXPO_DETAILS.email2}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Venues & Office */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-extrabold text-[#153a6b] text-base uppercase tracking-wider">
                Exhibition Venue
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>{EXPO_DETAILS.venueName}</strong><br />
                {EXPO_DETAILS.venueAddress}
              </p>
              <div className="border-t border-slate-200/80 pt-3">
                <span className="text-slate-400 text-xs block font-semibold">Organizer Headquarters</span>
                <p className="text-xs text-slate-700 mt-1">
                  <strong>VisionEdge Group</strong> (FeelBrand Media)<br />
                  Pune & Kolhapur, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl mx-auto">
                  <i className="bi bi-check-lg"></i>
                </div>
                <h3 className="text-xl font-black text-[#153a6b]">Thank You for Your Message!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your message has been received by our exhibition coordination team. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      subject: "Exhibitor Stall Booking",
                      message: ""
                    });
                  }}
                  className="bg-[#153a6b] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-black text-[#153a6b]">Send an Online Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#f3701e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Firm Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#f3701e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#f3701e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98220 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#f3701e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Topic / Inquiry Nature</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:border-[#f3701e]"
                  >
                    <option value="Exhibitor Stall Booking">Exhibitor Stall Booking & Floor Plan</option>
                    <option value="Visitor Registration Inquiry">Visitor Registration & Badge Inquiries</option>
                    <option value="Association Partnership">Association / Chamber Partnership</option>
                    <option value="Sponsorship & Branding">Sponsorship & Hoarding Branding</option>
                    <option value="Media & Press">Media & Press Relations</option>
                    <option value="General Inquiry">Other General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your questions, booth size requirements, or feedback..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#f3701e]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="submit-contact-btn"
                  className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md inline-flex items-center gap-2"
                >
                  <i className="bi bi-send-fill"></i> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
          <iframe
            title="Nagala Park Kolhapur Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5794553255146!2d74.2255!3d16.7025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10010d297922d%3A0xc3cf46d6fa0655ad!2sNagala%20Park%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
