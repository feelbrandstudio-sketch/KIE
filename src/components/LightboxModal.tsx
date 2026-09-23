import React from "react";

interface LightboxModalProps {
  isOpen?: boolean;
  imageSrc?: string;
  imageUrl?: string | null;
  title?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageSrc,
  imageUrl,
  title = "Kolhapur Industrial Expo Gallery",
  onClose,
  onPrev,
  onNext
}) => {
  const effectiveSrc = imageSrc || imageUrl;
  const isVisible = isOpen !== undefined ? isOpen : Boolean(imageUrl);

  if (!isVisible || !effectiveSrc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 select-none animate-fadeIn">
      {/* Top action bar */}
      <div className="w-full max-w-5xl flex justify-between items-center text-white pb-3">
        <span className="text-sm font-semibold truncate pr-4">{title}</span>
        <button
          onClick={onClose}
          className="bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] flex items-center justify-center">
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 md:-left-12 bg-black/50 hover:bg-[#f3701e] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors z-10"
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        <img
          src={effectiveSrc}
          alt={title}
          className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
        />

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 md:-right-12 bg-black/50 hover:bg-[#f3701e] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors z-10"
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>

      <div className="text-slate-400 text-xs mt-3 text-center">
        Use arrows or close button to dismiss
      </div>
    </div>
  );
};
