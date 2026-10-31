import React from "react";
import { GaneshaMotif } from "@/components/decorative/GaneshaMotif";
import { KolamPattern } from "@/components/decorative/KolamPattern";
import { EventDetails, Language, PlaceholdersConfig } from "@/types/invitation";

interface Scene2MagentaIntroProps {
  event: EventDetails;
  placeholders: PlaceholdersConfig;
  language: Language;
}

export const Scene2MagentaIntro: React.FC<Scene2MagentaIntroProps> = ({
  event,
  placeholders,
  language,
}) => {
  return (
    <section
      id="scene-2"
      aria-label="Ornamental Magenta and Gold Tapestry"
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-b from-[#70082f] via-[#580524] to-[#46031b] border-t-4 border-[#e8b32e]/50"
    >
      {/* Background Mandala / Kolam Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <KolamPattern size={360} opacity={0.12} />
      </div>

      {/* Ornate Gold Bordered Card */}
      <div className="relative z-10 w-full max-w-sm mx-auto p-6 text-center rounded-2xl bg-[#520521]/60 backdrop-blur-xs border border-[#e8b32e]/40 shadow-2xl">
        {/* Lord Ganesha Auspicious Motif */}
        <GaneshaMotif size={80} className="mb-4" />

        {/* Divine Blessings Invocation */}
        <div className="space-y-1 mb-6">
          <p className="text-[11px] uppercase tracking-widest text-[#fcd55c] font-royal">
            {language === "ta" ? "தெய்வத் திருவருளுடன்" : "With the divine blessings of"}
          </p>
          <p className="text-sm font-ornate italic text-[#fff4d1] font-semibold">
            {language === "ta"
              ? placeholders.grandparentsBlessing.ta
              : placeholders.grandparentsBlessing.en}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#f5c542] to-transparent" />
          <span className="text-[#fcd55c] text-xs">ॐ</span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#f5c542] to-transparent" />
        </div>

        {/* Ceremonial Inviting Word */}
        <h2 className="text-3xl xs:text-4xl font-ornate italic text-gold-gradient font-bold drop-shadow-sm mb-3">
          {language === "ta" ? "அழைக்கின்றோம்..." : "Inviting..."}
        </h2>

        {/* Warm Welcome Message */}
        <p className="text-xs xs:text-sm text-[#fff7df]/90 font-ornate leading-relaxed max-w-xs mx-auto">
          {language === "ta"
            ? event.greetingsMessageTamil
            : event.greetingsMessage}
        </p>

        {/* Event Type Badge */}
        <div className="inline-block mt-6 px-4 py-1.5 rounded-full bg-[#3b0318]/80 border border-[#e8b32e]/50">
          <span className="text-xs font-semibold tracking-wider text-[#fcd55c] uppercase font-royal">
            {language === "ta" ? event.typeTamil : event.type}
          </span>
        </div>
      </div>
    </section>
  );
};
