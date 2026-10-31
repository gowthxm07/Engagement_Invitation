import React from "react";
import { DirectionsButton } from "@/components/ui/DirectionsButton";
import { AddToCalendarButton } from "@/components/ui/AddToCalendarButton";
import { KolamPattern } from "@/components/decorative/KolamPattern";
import { EventDetails, Language, PlaceholdersConfig, VenueDetails } from "@/types/invitation";

interface Scene8EventVenueProps {
  event: EventDetails;
  venue: VenueDetails;
  placeholders: PlaceholdersConfig;
  language: Language;
}

export const Scene8EventVenue: React.FC<Scene8EventVenueProps> = ({
  event,
  venue,
  placeholders,
  language,
}) => {
  return (
    <section
      id="scene-8"
      aria-label="Engagement Event and Venue Information"
      className="relative min-h-[95vh] w-full flex flex-col justify-center items-center px-5 py-12 overflow-hidden bg-gradient-to-b from-[#e8c4ce] via-[#deb7c1] to-[#cf9ea9] text-[#4a1221]"
    >
      {/* Subtle Background Kolam */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <KolamPattern size={380} opacity={0.12} />
      </div>

      <div className="relative z-10 w-full max-w-sm mx-auto space-y-6 text-center">
        {/* Section Header */}
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[#6e2236] font-royal">
            {language === "ta" ? "திருமண மண்டப விபரம்" : "Venue & Celebrations"}
          </p>
          <h2 className="text-2xl xs:text-3xl font-extrabold font-royal text-[#580524]">
            {language === "ta" ? "நிகழ்ச்சி விபரம்" : "Event Information"}
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-[#580524]/40" />
        </div>

        {/* Venue Information Box */}
        <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#b87d8d] shadow-xl text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#580524] text-[#fcd55c] flex items-center justify-center shadow-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl xs:text-2xl font-extrabold text-[#580524] font-royal">
              {language === "ta" ? venue.nameTamil : venue.name}
            </h3>
            <p className="text-xs text-[#8a334c] font-semibold uppercase tracking-wider font-royal">
              {language === "ta" ? venue.subTitleTamil : venue.subTitle}
            </p>
          </div>

          {/* Full Address */}
          <div className="text-xs leading-relaxed text-[#4a1221] font-body px-2 space-y-1 bg-[#fdf2f4] p-3 rounded-lg border border-[#e8c6ce]">
            {language === "ta" ? (
              <p className="font-tamil-text">{venue.fullAddressTamil}</p>
            ) : (
              <>
                <p className="font-semibold">{venue.addressLine1}</p>
                <p>{venue.addressLine2}</p>
                <p>
                  {venue.city}, {venue.state} – {venue.pincode}
                </p>
                <p className="text-[11px] text-[#782236] font-medium pt-1">
                  Landmark: {venue.landmark}
                </p>
              </>
            )}
          </div>

          {/* Subamuhurtham Timings Reminder */}
          <div className="py-2 px-3 rounded-lg bg-[#580524] text-[#fff7df] space-y-0.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#fcd55c] font-royal">
              {language === "ta" ? event.subamuhurthamLabelTamil : event.subamuhurthamLabel}
            </p>
            <p className="text-sm font-bold">
              {language === "ta" ? event.dateFullTamil : event.dateFull}
            </p>
            <p className="text-xs text-[#fed7aa] font-medium">
              {language === "ta" ? event.timeFormattedTamil : event.timeFormatted}
            </p>
          </div>

          {/* Action Buttons: Google Maps & Add to Calendar */}
          <div className="pt-2 flex flex-col gap-2.5">
            <DirectionsButton
              url={venue.googleMapsUrl}
              language={language}
              className="w-full"
            />
            <AddToCalendarButton
              language={language}
              className="w-full"
            />
          </div>
        </div>

        {/* RSVP Placeholder Note */}
        <div className="p-3 rounded-xl bg-white/60 border border-dashed border-[#8a334c]/50 text-center">
          <p className="text-[11px] font-bold text-[#69182f] uppercase tracking-wider font-royal">
            {language === "ta" ? "தொடர்புக்கு / RSVP:" : "RSVP & Enquiries:"}
          </p>
          <p className="text-xs text-[#580524] italic font-body pt-0.5">
            {language === "ta"
              ? placeholders.rsvpContacts.ta
              : placeholders.rsvpContacts.en}
          </p>
        </div>
      </div>
    </section>
  );
};
