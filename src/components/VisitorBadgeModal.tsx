import React from "react";
import { VisitorLead } from "../services/storageService";
import { EXPO_DETAILS } from "../data/expoData";

interface VisitorBadgeModalProps {
  visitor: VisitorLead | null;
  onClose: () => void;
}

export const VisitorBadgeModal: React.FC<VisitorBadgeModalProps> = ({ visitor, onClose }) => {
  if (!visitor) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 font-sans animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
        {/* Header bar */}
        <div className="bg-[#153a6b] text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="bi bi-shield-check text-[#f3701e] text-lg"></i>
            <span className="font-bold text-sm uppercase tracking-wider">Official Visitor E-Badge</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-lg w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        {/* Printable Badge Area */}
        <div id="printable-visitor-badge" className="p-6 bg-slate-50 border-b border-slate-200 text-center">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 relative overflow-hidden">
            {/* Top Badge Strip */}
            <div className="absolute top-0 left-0 right-0 h-2.5 bg-[#f3701e]"></div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <img
                src="/assets/images/top-logo.png"
                alt="KIE Logo"
                className="h-9 w-auto object-contain"
                onError={(e) => { (e.target as HTMLElement).style.display = "none"; }}
              />
              <span className="bg-[#153a6b] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider">
                TRADE VISITOR
              </span>
            </div>

            <div className="my-2">
              <h3 className="text-xl font-extrabold text-[#153a6b] uppercase tracking-tight">
                {visitor.name}
              </h3>
              <p className="text-xs font-bold text-[#f3701e] uppercase tracking-wider mt-0.5">
                {visitor.designation || "Executive"}
              </p>
              <p className="text-sm font-semibold text-slate-800 mt-1">
                {visitor.company}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {visitor.city}
              </p>
            </div>

            {/* QR & Barcode Section */}
            <div className="my-4 p-3 bg-slate-50 rounded-lg border border-slate-200/70 flex items-center justify-center gap-4">
              {/* Simulated QR Code */}
              <div className="w-20 h-20 bg-white p-1.5 border border-slate-300 rounded flex flex-col items-center justify-center">
                <div className="grid grid-cols-5 gap-0.5 w-16 h-16 bg-slate-900 p-1">
                  {Array.from({ length: 25 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-full h-full ${
                        idx % 2 === 0 || idx % 3 === 0 ? "bg-white" : "bg-slate-900"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-left text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Registration Code</span>
                <strong className="text-base font-mono font-black text-[#153a6b] tracking-wider block">
                  {visitor.badgeId}
                </strong>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Valid for all 3 days:
                </span>
                <span className="text-[11px] font-bold text-slate-700 block">
                  28 Feb, 1 & 2 March 2027
                </span>
              </div>
            </div>

            {/* Venue Footer */}
            <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-2">
              <p className="font-semibold text-slate-700">Merry Weather Ground, Kolhapur</p>
              <p className="text-[10px] text-slate-400">Please show this digital pass or printed badge at the registration gate for fast-track entry.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-white flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={handlePrint}
            id="print-visitor-badge-btn"
            className="flex-1 bg-[#153a6b] hover:bg-[#102c52] text-white py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <i className="bi bi-printer-fill"></i> Print / Save PDF
          </button>
          <a
            href={EXPO_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center shadow-sm"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i> Help Desk
          </a>
        </div>
      </div>
    </div>
  );
};
