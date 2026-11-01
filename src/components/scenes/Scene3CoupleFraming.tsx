import React from "react";
import { FloralToran } from "@/components/decorative/FloralToran";
import { KolamPattern } from "@/components/decorative/KolamPattern";
import { PersonDetails } from "@/types/invitation";

interface Scene3CoupleFramingProps {
  groom: PersonDetails;
  bride: PersonDetails;
}

export const Scene3CoupleFraming: React.FC<Scene3CoupleFramingProps> = ({
  groom,
  bride,
}) => {
  return (
    <section
      id="scene-3"
      aria-label="Couple Names and Traditional Decorative Framing"
      className="relative min-h-[95vh] w-full flex flex-col justify-between items-center px-4 py-8 overflow-hidden bg-gradient-to-b from-[#800837] via-[#66052a] to-[#500320]"
    >
      {/* Background Mandala Pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <KolamPattern size={380} opacity={0.14} />
      </div>

      {/* Top Traditional Floral Toran with Mango Leaves & Marigolds */}
      <div className="w-full relative z-20 reveal-on-scroll">
        <FloralToran showSideGarlands={true} className="top-0" />
      </div>

      {/* Central Couple Typography Framing */}
      <div className="relative z-10 w-full max-w-sm mx-auto text-center my-auto py-6 px-4 space-y-4">
        {/* Groom Lineage & Name */}
        <div className="space-y-1 reveal-slide-left delay-100">
          <p className="text-[11px] font-medium tracking-wide text-[#ffe082]/90 font-ornate">
            {groom.parentsLineage}
          </p>
          <h2 className="text-3xl xs:text-4xl font-extrabold tracking-wider text-gold-gradient font-royal drop-shadow-md">
            {groom.name.toUpperCase()}
          </h2>
        </div>

        {/* Traditional Weds / Vivaha Symbolism */}
        <div className="flex items-center justify-center gap-3 py-1 reveal-scale delay-200">
          <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#f5c542] to-transparent" />
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#46031b] border border-[#e8b32e] text-[#fcd55c] text-xs font-royal font-bold shadow-md">
            WEDS
          </div>
          <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#f5c542] to-transparent" />
        </div>

        {/* Bride Lineage & Name */}
        <div className="space-y-1 reveal-slide-right delay-300">
          <h2 className="text-3xl xs:text-4xl font-extrabold tracking-wider text-gold-gradient font-royal drop-shadow-md">
            {bride.name.toUpperCase()}
          </h2>
          <p className="text-[11px] font-medium tracking-wide text-[#ffe082]/90 font-ornate">
            {bride.parentsLineage}
          </p>
        </div>
      </div>

      {/* Bottom Traditional Floral Border Flourish */}
      <div className="relative z-10 w-full flex items-center justify-center gap-2 pb-2 reveal-on-scroll delay-400">
        <span className="text-[#fcd55c] text-sm">❀</span>
        <span className="h-[1px] w-24 bg-[#e8b32e]/50" />
        <span className="text-[#fcd55c] text-xs font-royal uppercase tracking-widest">
          SUBHAM
        </span>
        <span className="h-[1px] w-24 bg-[#e8b32e]/50" />
        <span className="text-[#fcd55c] text-sm">❀</span>
      </div>
    </section>
  );
};
