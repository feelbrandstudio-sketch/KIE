import React, { useState } from "react";
import { OFFICIAL_DOWNLOADS, DownloadItem } from "../data/expoData";
import { storageService } from "../services/storageService";

export const DownloadsPage: React.FC = () => {
  const [downloads, setDownloads] = useState<DownloadItem[]>(OFFICIAL_DOWNLOADS);
  const [downloadCounters, setDownloadCounters] = useState<Record<string, number>>(() =>
    storageService.getDownloadStats()
  );
  const [activePreview, setActivePreview] = useState<DownloadItem | null>(null);

  const handleDownload = (item: DownloadItem) => {
    storageService.incrementDownload(item.id);
    setDownloadCounters(storageService.getDownloadStats());

    // Create an anchor and download
    const link = document.createElement("a");
    link.href = item.filePath || item.fileUrl || "/brochure.pdf";
    link.download = item.title.replace(/[^a-zA-Z0-9]/g, "_") + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="font-sans">
      <div className="bg-[#153a6b] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-extrabold text-[#f3701e] uppercase tracking-widest block mb-1">
            RESOURCE CENTRE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Official Expo Downloads & Documents
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Download the official Kolhapur Industrial Expo brochure, space booking application, and exhibition floor plan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item) => {
            const count = (downloadCounters[item.id] || 0) + 142; // baseline + tracked count
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#f3701e] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.size}
                    </span>
                  </div>

                  <h3 className="font-black text-sm text-slate-900 group-hover:text-[#153a6b] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium">
                    <span>PDF Document</span>
                    <span>
                      <i className="bi bi-download me-1"></i>
                      {count} Downloads
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownload(item)}
                      className="flex-1 bg-[#153a6b] hover:bg-[#102c52] text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-1.5"
                    >
                      <i className="bi bi-arrow-down-circle"></i> Download
                    </button>
                    <button
                      onClick={() => setActivePreview(item)}
                      className="px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg text-xs font-bold transition-colors"
                      title="Quick Preview"
                    >
                      <i className="bi bi-eye"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note info */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
          <i className="bi bi-info-circle-fill text-[#153a6b] text-xl flex-shrink-0"></i>
          <span>
            Need high-resolution vector logos, press kits, or custom floor plan dimensions? Contact the organizer desk at{" "}
            <a href="mailto:info@feelbrand.in" className="text-[#f3701e] font-bold hover:underline">
              info@feelbrand.in
            </a>
          </span>
        </div>
      </div>

      {/* Document Preview Modal */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xl">
                <i className="bi bi-file-earmark-pdf"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{activePreview.title}</h3>
                <p className="text-xs text-slate-400">PDF • {activePreview.size}</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-6">{activePreview.description}</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center mb-6">
              <i className="bi bi-file-text text-4xl text-slate-300 block mb-2"></i>
              <p className="text-xs font-semibold text-slate-700">Document Ready for Download</p>
              <p className="text-[11px] text-slate-400">Kolhapur Industrial Expo 2027 Official Publication</p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setActivePreview(null)}
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(activePreview);
                  setActivePreview(null);
                }}
                className="bg-[#f3701e] hover:bg-[#d95e10] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <i className="bi bi-download me-1.5"></i> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
