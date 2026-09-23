import React from "react";
import { ExhibitorBookingLead } from "../services/storageService";
import { EXPO_DETAILS } from "../data/expoData";

interface ExhibitorConfirmModalProps {
  booking: ExhibitorBookingLead | null;
  onClose: () => void;
}

export const ExhibitorConfirmModal: React.FC<ExhibitorConfirmModalProps> = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 font-sans animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        <div className="bg-[#153a6b] text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="bi bi-patch-check-fill text-[#f3701e] text-lg"></i>
            <span className="font-bold text-sm uppercase tracking-wider">Stall Booking Application Received</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-lg w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <div className="p-6 bg-slate-50 space-y-4 text-xs">
          <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg flex items-start gap-2.5">
            <i className="bi bi-check-circle-fill text-green-600 text-base mt-0.5"></i>
            <div>
              <p className="font-bold text-sm">Thank you, {booking.name}!</p>
              <p className="text-[11px] text-green-700 mt-0.5">
                Your exhibition stall space application for <strong>{booking.company}</strong> has been registered. Our marketing team will verify space allocation and contact you within 24 hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-2.5">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Booking Reference</span>
              <strong className="text-[#153a6b] font-mono text-sm font-bold">{booking.bookingRef}</strong>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Company Name</span>
              <span className="font-bold text-slate-800">{booking.company}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Contact Person</span>
              <span className="text-slate-800">{booking.name} ({booking.designation})</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Stall Space Category</span>
              <span className="font-bold text-[#f3701e] uppercase">
                {booking.stallType === "shell" ? "Built-up Shell Scheme" : "Bare Space / Raw Space"}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Applied Area</span>
              <span className="font-bold text-slate-800">{booking.stallAreaSqm} Sq. Metres ({booking.openSides})</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Estimated Pro-Forma (incl. GST)</span>
              <strong className="text-emerald-700 font-bold text-sm">
                ₹{booking.totalEstimatedAmount.toLocaleString("en-IN")}
              </strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Application Status</span>
              <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                {booking.status}
              </span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
            <p className="font-semibold text-[#153a6b] mb-1">Next Steps:</p>
            <ol className="list-decimal pl-4 space-y-1">
              <li>Our team will share the live stall layout grid of Merry Weather Ground.</li>
              <li>You can select your preferred stall number and orientation.</li>
              <li>Payment details for 50% advance confirmation will be sent to {booking.email}.</li>
            </ol>
          </div>
        </div>

        <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => window.print()}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <i className="bi bi-printer"></i> Print Summary
          </button>
          <a
            href={`https://wa.me/919545002006?text=Hi,%20I%20have%20submitted%20stall%20booking%20application%20${booking.bookingRef}%20for%20${encodeURIComponent(booking.company)}.%20Please%20share%20the%20floor%20plan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i> Connect on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
