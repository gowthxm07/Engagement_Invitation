import React from "react";
import { Language } from "@/types/invitation";

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: (lang: Language) => void;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onToggle,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-[#3b0318]/80 backdrop-blur-md border border-[#e8b32e]/60 shadow-lg ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => onToggle("en")}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          currentLanguage === "en"
            ? "bg-gradient-to-r from-[#f7c948] to-[#c69214] text-[#3b0318] shadow-md font-bold"
            : "text-[#fff7df]/80 hover:text-white"
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => onToggle("ta")}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 font-tamil-text ${
          currentLanguage === "ta"
            ? "bg-gradient-to-r from-[#f7c948] to-[#c69214] text-[#3b0318] shadow-md font-bold"
            : "text-[#fff7df]/80 hover:text-white"
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
};
