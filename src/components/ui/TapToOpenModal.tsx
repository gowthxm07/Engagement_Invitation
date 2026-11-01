"use client";

import React, { useState } from "react";
import { GaneshaMotif } from "@/components/decorative/GaneshaMotif";

interface TapToOpenModalProps {
  onOpen: () => void;
}

export const TapToOpenModal: React.FC<TapToOpenModalProps> = ({
  onOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleTap = () => {
    if (isClosing || isOpen) return;
    setIsClosing(true);
    onOpen();
    setTimeout(() => {
      setIsOpen(true);
    }, 450);
  };

  if (isOpen) return null;

  return (
    <div
      onClick={handleTap}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm cursor-pointer transition-all duration-500 ease-out select-none ${
        isClosing ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
      role="button"
      tabIndex={0}
      aria-label="Tap to open invitation"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleTap();
        }
      }}
    >
      <div
        className={`relative max-w-sm w-full mx-auto p-7 xs:p-8 rounded-3xl bg-gradient-to-b from-[#70082f] via-[#580524] to-[#3b0318] border-2 border-[#e8b32e] text-center shadow-2xl overflow-hidden transition-all duration-500 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100 animate-float"
        }`}
      >
        {/* Decorative corner flourishes */}
        <div className="absolute top-2.5 left-2.5 text-[#fcd55c] text-xs">✦</div>
        <div className="absolute top-2.5 right-2.5 text-[#fcd55c] text-xs">✦</div>
        <div className="absolute bottom-2.5 left-2.5 text-[#fcd55c] text-xs">✦</div>
        <div className="absolute bottom-2.5 right-2.5 text-[#fcd55c] text-xs">✦</div>

        <GaneshaMotif size={68} className="mb-4" />

        <div className="space-y-1.5 mb-6">
          <p className="text-[10px] xs:text-xs uppercase tracking-widest text-[#fcd55c]/90 font-royal">
            Auspicious Engagement Invitation
          </p>
          <h2 className="text-2xl xs:text-3xl font-bold font-royal text-gold-gradient">
            Praveen S &amp; Swathi N
          </h2>
          <p className="text-xs text-[#ffe082] font-ornate italic">
            Friday, 20 November 2026 • Aarathana Mahaal, Karur
          </p>
        </div>

        {/* Pulsing Tap Button */}
        <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5c542] to-[#df9e19] text-[#3b0318] font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-transform animate-pulse">
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
          <span className="font-body">
            Tap to Open Invitation
          </span>
        </div>

        <p className="mt-4 text-[10px] text-[#fff7df]/70 tracking-wide uppercase font-body">
          ♫ Traditional Instrumental Music
        </p>
      </div>
    </div>
  );
};
