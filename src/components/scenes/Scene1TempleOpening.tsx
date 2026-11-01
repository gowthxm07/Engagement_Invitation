import React from "react";
import { HangingBrassLamp } from "@/components/decorative/HangingBrassLamp";
import { TemplePillars } from "@/components/decorative/TemplePillars";
import { TempleGopuram } from "@/components/decorative/TempleGopuram";
import { PersonDetails } from "@/types/invitation";

interface Scene1TempleOpeningProps {
  groom: PersonDetails;
  bride: PersonDetails;
}

export const Scene1TempleOpening: React.FC<Scene1TempleOpeningProps> = ({
  groom,
  bride,
}) => {
  return (
    <section
      id="scene-1"
      aria-label="Grand South Indian Temple Opening"
      className="relative min-h-[100vh] w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#87ceeb] via-[#bfe3f7] to-[#e8c6ce]"
    >
      {/* Dravidian Carved Stone Pillars sliding inward from screen edges */}
      <TemplePillars side="left" className="anim-pillar-left" />
      <TemplePillars side="right" className="anim-pillar-right" />

      {/* Hanging Brass Oil Lamps (Diya) descending from above then swaying */}
      <div className="absolute top-0 left-8 z-20 anim-lamp-descend">
        <div className="animate-sway-slow">
          <HangingBrassLamp chainLength={75} lampScale={0.85} />
        </div>
      </div>
      <div className="absolute top-0 left-20 z-20 anim-lamp-descend delay-150 hidden xs:block">
        <div className="animate-sway-delayed">
          <HangingBrassLamp chainLength={110} lampScale={0.75} />
        </div>
      </div>

      <div className="absolute top-0 right-8 z-20 anim-lamp-descend">
        <div className="animate-sway-slow">
          <HangingBrassLamp chainLength={75} lampScale={0.85} />
        </div>
      </div>
      <div className="absolute top-0 right-20 z-20 anim-lamp-descend delay-150 hidden xs:block">
        <div className="animate-sway-delayed">
          <HangingBrassLamp chainLength={110} lampScale={0.75} />
        </div>
      </div>

      {/* Morning Sky Cloud Wisps */}
      <div className="absolute top-12 inset-x-0 flex justify-center pointer-events-none opacity-40">
        <div className="w-64 h-16 bg-white/60 blur-xl rounded-full" />
      </div>

      {/* Ceremonial Names Header with staggered entrance sequence */}
      <div className="relative z-20 pt-20 px-8 text-center space-y-2 mt-2">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#692938] uppercase font-royal drop-shadow-sm anim-slide-up delay-300">
          Auspicious Beginning
        </p>

        <h1 className="text-2xl xs:text-3xl font-extrabold tracking-wider text-[#4a1825] font-royal drop-shadow-md anim-slide-up delay-450">
          {groom.name.toUpperCase()}
        </h1>

        <div className="flex items-center justify-center gap-3 anim-pop delay-600">
          <span className="h-[1px] w-10 bg-[#8c3a4f]/40" />
          <span className="text-sm font-semibold tracking-widest text-[#7a2238] font-royal uppercase">
            WEDS
          </span>
          <span className="h-[1px] w-10 bg-[#8c3a4f]/40" />
        </div>

        <h2 className="text-2xl xs:text-3xl font-extrabold tracking-wider text-[#4a1825] font-royal drop-shadow-md anim-slide-up delay-750">
          {bride.name.toUpperCase()}
        </h2>

        <p className="text-xs text-[#6e2236] font-ornate italic pt-1 anim-slide-up delay-900">
          Engagement Celebration
        </p>
      </div>

      {/* Grand South Indian Temple Gopuram visibly rising up from below */}
      <div className="relative z-10 w-full px-4 -mb-1 anim-gopuram delay-150">
        <TempleGopuram />
      </div>

      {/* Scroll Down Affordance Indicator */}
      <div className="absolute bottom-2 inset-x-0 z-30 flex flex-col items-center justify-center pointer-events-none anim-slide-up delay-900">
        <span className="text-[10px] uppercase tracking-widest text-[#580524] font-semibold bg-white/80 backdrop-blur-xs px-3 py-0.5 rounded-full shadow-xs animate-bounce">
          Scroll Down ↓
        </span>
      </div>
    </section>
  );
};
