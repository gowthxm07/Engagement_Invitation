"use client";

import React, { useState } from "react";

interface AddToCalendarButtonProps {
  className?: string;
}

export const AddToCalendarButton: React.FC<AddToCalendarButtonProps> = ({
  className = "",
}) => {
  const [showOptions, setShowOptions] = useState(false);

  // Confirmed event details: 20 Nov 2026, 06:00 AM - 07:00 AM IST (UTC+05:30)
  const title = "Praveen S & Swathi N - Engagement Ceremony";
  const titleEncoded = encodeURIComponent(title);
  const details =
    "Engagement ceremony of Praveen S and Swathi N.\nVenue: Aarathana Mahaal, Karur, Tamil Nadu.\nSubamuhurtham: 6:00 AM – 7:00 AM IST";
  const detailsEncoded = encodeURIComponent(details);
  const location =
    "Aarathana Mahaal, 446/1C2 Attayamparappu NH 44, Madurai By-pass, near Essar Petrol Bunk, Karur, Tamil Nadu 639003";
  const locationEncoded = encodeURIComponent(location);

  // UTC equivalent: 2026-11-20 06:00 AM IST = 2026-11-20 00:30:00 UTC
  // 2026-11-20 07:00 AM IST = 2026-11-20 01:30:00 UTC
  const dates = "20261120T003000Z/20261120T013000Z";
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titleEncoded}&dates=${dates}&details=${detailsEncoded}&location=${locationEncoded}`;

  // Standard RFC 5545 iCalendar (.ics) format for Apple Calendar & Outlook
  const generateIcsDataUri = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Praveen Swathi Engagement//Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VTIMEZONE",
      "TZID:Asia/Kolkata",
      "BEGIN:STANDARD",
      "DTSTART:19700101T000000",
      "TZOFFSETFROM:+0530",
      "TZOFFSETTO:+0530",
      "TZNAME:IST",
      "END:STANDARD",
      "END:VTIMEZONE",
      "BEGIN:VEVENT",
      "UID:praveen-swathi-engagement-20261120@aarathanumahaal",
      "DTSTAMP:20261031T170000Z",
      "DTSTART;TZID=Asia/Kolkata:20261120T060000",
      "DTEND;TZID=Asia/Kolkata:20261120T070000",
      `SUMMARY:${title}`,
      `DESCRIPTION:${details.replace(/\n/g, "\\n")}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
  };

  return (
    <div className={`relative inline-block w-full ${className}`}>
      {!showOptions ? (
        <button
          type="button"
          onClick={() => setShowOptions(true)}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-sm transition-all duration-300 shadow-md text-[#fcd55c] bg-[#3b0318]/90 hover:bg-[#4d0420] border border-[#e8b32e]/60 active:scale-95 cursor-pointer"
          aria-expanded={showOptions}
          aria-label="Add to Calendar"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#fcd55c]"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="font-body">
            Add to Calendar
          </span>
        </button>
      ) : (
        <div className="flex flex-col gap-2 p-3 rounded-2xl bg-[#440319] border border-[#e8b32e]/70 shadow-xl animate-fadeIn">
          <p className="text-[11px] font-semibold text-[#fcd55c] uppercase tracking-wider text-center font-royal">
            Choose Calendar
          </p>
          <div className="grid grid-cols-2 gap-2">
            {/* Google Calendar */}
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#580524] text-[#fff7df] text-xs font-semibold border border-[#e8b32e]/40 hover:bg-[#6e072d] active:scale-95 transition-all text-center cursor-pointer"
            >
              <span>📅</span>
              <span>Google Cal</span>
            </a>

            {/* Apple / Outlook .ics download */}
            <a
              href={generateIcsDataUri()}
              download="Praveen_Swathi_Engagement.ics"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#580524] text-[#fff7df] text-xs font-semibold border border-[#e8b32e]/40 hover:bg-[#6e072d] active:scale-95 transition-all text-center cursor-pointer"
            >
              <span>🍏</span>
              <span>Apple / ics</span>
            </a>
          </div>
          <button
            type="button"
            onClick={() => setShowOptions(false)}
            className="text-[11px] text-[#ffe082]/70 hover:text-white pt-1 cursor-pointer"
          >
            Close ✕
          </button>
        </div>
      )}
    </div>
  );
};
