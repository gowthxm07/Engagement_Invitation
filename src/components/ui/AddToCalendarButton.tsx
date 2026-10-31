import React from "react";
import { Language } from "@/types/invitation";

interface AddToCalendarButtonProps {
  language: Language;
  className?: string;
}

export const AddToCalendarButton: React.FC<AddToCalendarButtonProps> = ({
  language,
  className = "",
}) => {
  // Event details for 20 Nov 2026, 06:00 AM - 07:00 AM IST (UTC+5:30 -> 00:30 UTC - 01:30 UTC)
  const title = encodeURIComponent("Praveen S & Swathi N - Engagement Ceremony");
  const details = encodeURIComponent(
    "Engagement ceremony of Praveen S & Swathi N.\nVenue: Aarathana Mahaal, Karur, Tamil Nadu.\nSubamuhurtham: 6:00 AM – 7:00 AM"
  );
  const location = encodeURIComponent(
    "Aarathana Mahaal, 446/1C2 Attayamparappu NH 44, Madurai By-pass, near Essar Petrol Bunk, Karur, Tamil Nadu 639003"
  );
  // 2026-11-20 06:00 AM IST = 2026-11-20 00:30 UTC
  // 2026-11-20 07:00 AM IST = 2026-11-20 01:30 UTC
  const dates = "20261120T003000Z/20261120T013000Z";
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

  return (
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-sm text-[#fcd55c] bg-[#3b0318]/90 hover:bg-[#4d0420] border border-[#e8b32e]/60 active:scale-95 ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      <span className={language === "ta" ? "font-tamil-text" : "font-body"}>
        {language === "ta" ? "நாட்காட்டியில் சேர்க்க" : "Add to Calendar"}
      </span>
    </a>
  );
};
