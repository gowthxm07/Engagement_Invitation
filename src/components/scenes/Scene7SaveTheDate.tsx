import React from "react";
import { VintageCar } from "@/components/decorative/VintageCar";
import { KolamPattern } from "@/components/decorative/KolamPattern";
import { EventDetails, VenueDetails } from "@/types/invitation";

interface Scene7SaveTheDateProps {
  event: EventDetails;
  venue: VenueDetails;
}

export const Scene7SaveTheDate: React.FC<Scene7SaveTheDateProps> = ({
  event,
  venue,
}) => {
  return (
    <section
      id="scene-6"
      aria-label="Save the Date with Vintage Vehicle"
      className="relative min-h-[95vh] w-full flex flex-col justify-between items-center px-6 py-12 overflow-hidden bg-gradient-to-b from-[#f8e6ea] via-[#f1d5dc] to-[#e8c4ce] text-[#541829]"
    >
      {/* Background Mandala Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <KolamPattern size={360} opacity={0.16} />
      </div>

      {/* Top Header: SAVE THE DATE */}
      <div className="relative z-10 text-center space-y-1 pt-4 reveal-on-scroll delay-100">
        <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8a334c] font-royal">
          Please Join Us
        </p>
        <h2 className="text-3xl xs:text-4xl font-extrabold tracking-widest text-[#69182f] font-royal drop-shadow-sm">
          SAVE THE DATE
        </h2>
        <div className="w-20 h-0.5 mx-auto bg-[#8a334c]/40" />
      </div>

      {/* Centerpiece: Vintage Mint Car Illustration with smooth slide reveal */}
      <div className="relative z-10 my-4 transform hover:scale-105 transition-transform duration-500 reveal-slide-left delay-200">
        <VintageCar width={260} />
      </div>

      {/* Date & Muhurtham Details (Framed in Dusty Pink) */}
      <div className="relative z-10 w-full max-w-sm mx-auto text-center space-y-4 pb-4 reveal-scale delay-300">
        {/* Subamuhurtham Card */}
        <div className="p-5 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#d49ba8] shadow-md">
          <div className="space-y-1">
            <span className="inline-block px-3 py-1 rounded-full bg-[#69182f] text-[#fff7df] text-[11px] font-bold uppercase tracking-wider font-royal">
              {event.subamuhurthamLabel}
            </span>
            <h3 className="text-xl xs:text-2xl font-extrabold text-[#541829] font-royal pt-1">
              {event.dateFull}
            </h3>
            <p className="text-sm font-bold text-[#8a334c] font-ornate">
              {event.timeFormatted}
            </p>
          </div>

          <div className="mt-3 pt-3 border-t border-[#d49ba8]/50 flex items-center justify-center gap-1.5 text-xs text-[#69182f] font-ornate font-semibold">
            <span>📍</span>
            <span>
              {venue.name}, {venue.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
