"use client";

import React, { useState } from "react";
import { GaneshaMotif } from "@/components/decorative/GaneshaMotif";
import { Language } from "@/types/invitation";

interface TapToOpenModalProps {
  onOpen: () => void;
  language: Language;
}

export const TapToOpenModal: React.FC<TapToOpenModalProps> = ({
  onOpen,
  language,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTap = () => {
    setIsOpen(true);
    onOpen();
  };

  if (isOpen) return null;

  return (
    <div
      onClick={handleTap}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-700 cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label="Tap to open invitation"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleTap();
      }}
    >
      <div className="relative max-w-sm w-full mx-auto p-8 rounded-2xl bg-gradient-to-b from-[#70082f] via-[#580524] to-[#3b0318] border-2 border-[#e8b32e] text-center shadow-2xl overflow-hidden animate-float">
        {/* Decorative corner flourishes */}
        <div className="absolute top-2 left-2 text-[#fcd55c] text-xs">✦</div>
        <div className="absolute top-2 right-2 text-[#fcd55c] text-xs">✦</div>
        <div className="absolute bottom-2 left-2 text-[#fcd55c] text-xs">✦</div>
        <div className="absolute bottom-2 right-2 text-[#fcd55c] text-xs">✦</div>

        <GaneshaMotif size={64} className="mb-4" />

        <div className="space-y-1 mb-6">
          <p className="text-xs uppercase tracking-widest text-[#fcd55c]/80 font-royal">
            Auspicious Engagement Invitation
          </p>
          <h2 className="text-2xl font-bold font-royal text-gold-gradient">
            Praveen S &amp; Swathi N
          </h2>
          <p className="text-xs text-[#ffe082] font-ornate italic">
            20 November 2026 • Aarathana Mahaal
          </p>
        </div>

        {/* Pulsing Tap Button */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5c542] to-[#df9e19] text-[#3b0318] font-bold text-sm shadow-lg animate-pulse">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className={language === "ta" ? "font-tamil-text" : "font-body"}>
            {language === "ta" ? "அழைப்பிதழைத் திறக்க" : "Tap to Open Invitation"}
          </span>
        </div>

        <p className="mt-4 text-[10px] text-[#fff7df]/60 tracking-wide uppercase">
          ♫ Plays Traditional Nadaswaram Music
        </p>
      </div>
    </div>
  );
};
