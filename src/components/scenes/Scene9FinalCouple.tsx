import React from "react";
import { TraditionalCoupleAvatar } from "@/components/decorative/TraditionalCoupleAvatar";
import { MarigoldGarland } from "@/components/decorative/MarigoldGarland";
import { KolamPattern } from "@/components/decorative/KolamPattern";
import { EventDetails, PersonDetails } from "@/types/invitation";

interface Scene9FinalCoupleProps {
  groom: PersonDetails;
  bride: PersonDetails;
  event: EventDetails;
}

export const Scene9FinalCouple: React.FC<Scene9FinalCoupleProps> = ({
  groom,
  bride,
  event,
}) => {
  return (
    <section
      id="scene-8"
      aria-label="Final Illustrated Couple Scene with Traditional Decorations"
      className="relative min-h-[100vh] w-full flex flex-col justify-between items-center px-4 py-8 overflow-hidden bg-gradient-to-b from-[#cf9ea9] via-[#e8c4ce] to-[#ebd0d7] text-[#541829]"
    >
      {/* Background Kolam Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <KolamPattern size={400} opacity={0.15} />
      </div>

      {/* Hanging Marigold Garlands Framing Top descending from above */}
      <div className="w-full relative z-20 flex justify-between px-6 pt-2 anim-slide-down delay-100">
        <div className="flex gap-2 animate-sway-slow">
          <MarigoldGarland flowerCount={6} />
          <MarigoldGarland flowerCount={8} />
          <MarigoldGarland flowerCount={5} className="hidden xs:flex" />
        </div>
        <div className="flex gap-2 animate-sway-delayed">
          <MarigoldGarland flowerCount={5} className="hidden xs:flex" />
          <MarigoldGarland flowerCount={8} />
          <MarigoldGarland flowerCount={6} />
        </div>
      </div>

      {/* Central Gracious Presence Invitation Text */}
      <div className="relative z-10 text-center max-w-sm mx-auto px-4 space-y-2 mt-4 anim-slide-up delay-250">
        <p className="text-xs uppercase tracking-widest font-semibold text-[#8a334c] font-royal">
          Cordial Invitation
        </p>

        <h2 className="text-xl xs:text-2xl font-extrabold text-[#580524] font-ornate leading-snug">
          {event.formalInvitationNote}
        </h2>

        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="h-[1px] w-12 bg-[#8a334c]/40" />
          <span className="text-xs font-royal font-bold text-[#69182f]">
            {groom.name} &amp; {bride.name}
          </span>
          <span className="h-[1px] w-12 bg-[#8a334c]/40" />
        </div>
      </div>

      {/* Illustrated Couple Artwork (Praveen & Swathi) smoothly rising from below */}
      <div className="relative z-10 w-full max-w-xs mx-auto my-2 anim-couple-rise delay-400">
        <TraditionalCoupleAvatar width="100%" />
      </div>

      {/* Footer Blessings & Note */}
      <div className="relative z-10 w-full text-center pb-8 space-y-2 anim-slide-up delay-650">
        <p className="text-xs text-[#6e2236] font-ornate italic">
          Seeking your presence and blessings for a joyous new beginning
        </p>

        <div className="pt-2 text-[10px] text-[#8a334c]/80 uppercase tracking-widest font-royal">
          Praveen S ♥ Swathi N • Karur • 20 Nov 2026
        </div>
      </div>
    </section>
  );
};
