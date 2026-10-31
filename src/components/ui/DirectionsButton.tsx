import React from "react";
import { Language } from "@/types/invitation";

interface DirectionsButtonProps {
  url: string;
  language: Language;
  className?: string;
}

export const DirectionsButton: React.FC<DirectionsButtonProps> = ({
  url,
  language,
  className = "",
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md active:scale-95 text-[#3b0318] bg-gradient-to-r from-[#ffd700] via-[#f5c542] to-[#df9e19] hover:from-[#ffe082] hover:to-[#f3c64f] border border-[#eab308] ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-[#3b0318]"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
      <span className={language === "ta" ? "font-tamil-text" : "font-body"}>
        {language === "ta" ? "கூகுள் மேப்பில் பார்க்க" : "View on Google Maps"}
      </span>
    </a>
  );
};
