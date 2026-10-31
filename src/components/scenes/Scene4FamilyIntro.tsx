import React from "react";
import { Language, PersonDetails, PlaceholdersConfig } from "@/types/invitation";
import { MarigoldGarland } from "@/components/decorative/MarigoldGarland";

interface Scene4FamilyIntroProps {
  groom: PersonDetails;
  bride: PersonDetails;
  placeholders: PlaceholdersConfig;
  language: Language;
}

export const Scene4FamilyIntro: React.FC<Scene4FamilyIntroProps> = ({
  groom,
  bride,
  placeholders,
  language,
}) => {
  return (
    <section
      id="scene-4"
      aria-label="Family Lineage and Introduction"
      className="relative min-h-[95vh] w-full flex flex-col justify-center items-center px-4 py-12 overflow-hidden bg-gradient-to-b from-[#500320] via-[#5c0626] to-[#6a082c] border-y border-[#e8b32e]/30"
    >
      {/* Traditional Banana Leaf & Marigold Accents in Background */}
      <div className="absolute top-2 left-2 opacity-60 pointer-events-none hidden xs:block animate-sway-slow">
        <MarigoldGarland flowerCount={6} />
      </div>
      <div className="absolute top-2 right-2 opacity-60 pointer-events-none hidden xs:block animate-sway-delayed">
        <MarigoldGarland flowerCount={6} />
      </div>

      <div className="relative z-10 w-full max-w-sm mx-auto space-y-5">
        {/* Section Header with Banana Leaf / Auspicious Motif */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2 text-[#4caf50]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#43a047]">
              {/* Auspicious Green Leaf Icon */}
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.52-11 4.54" />
            </svg>
            <p className="text-[11px] uppercase tracking-widest text-[#fcd55c] font-royal font-bold">
              {language === "ta" ? "இருவீட்டார் வாழ்த்துக்கள்" : "Family Blessings & Lineage"}
            </p>
          </div>
          <h2 className="text-2xl xs:text-3xl font-bold font-royal text-gold-gradient">
            {language === "ta" ? "பெற்றோர்கள் ஆசிகள்" : "Parents' Blessings"}
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#e8b32e] to-transparent" />
        </div>

        {/* Groom's Family Card */}
        <div className="p-5 rounded-2xl bg-[#440319]/85 backdrop-blur-xs border border-[#e8b32e]/40 shadow-xl relative">
          <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#ffd700] to-[#e8b32e] text-[#3b0318] text-[10px] font-bold uppercase tracking-wider font-royal shadow-sm">
            {language === "ta" ? "மணமகன் இல்லத்தார்" : "Groom's Family"}
          </div>
          <div className="mt-2 space-y-1.5">
            <h3 className="text-lg font-bold text-[#fff4d1] font-royal">
              {language === "ta" ? groom.nameTamil : groom.name}
            </h3>
            <p className="text-xs text-[#fcd55c] font-ornate">
              {language === "ta" ? "பெற்றோர்கள்:" : "Parents:"}
            </p>
            {/* Clearly marked editable placeholder */}
            <div className="p-2.5 rounded-lg bg-[#2d0210]/70 border border-dashed border-[#e8b32e]/50">
              <p className="text-xs text-[#ffe082] italic font-body">
                {language === "ta"
                  ? placeholders.groomParents.ta
                  : placeholders.groomParents.en}
              </p>
            </div>
            <p className="text-[11px] text-[#fff7df]/70 italic font-ornate">
              {language === "ta" ? groom.familyNoteTamil : groom.familyNote}
            </p>
          </div>
        </div>

        {/* Bride's Family Card */}
        <div className="p-5 rounded-2xl bg-[#440319]/85 backdrop-blur-xs border border-[#e8b32e]/40 shadow-xl relative">
          <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#ffd700] to-[#e8b32e] text-[#3b0318] text-[10px] font-bold uppercase tracking-wider font-royal shadow-sm">
            {language === "ta" ? "மணமகள் இல்லத்தார்" : "Bride's Family"}
          </div>
          <div className="mt-2 space-y-1.5">
            <h3 className="text-lg font-bold text-[#fff4d1] font-royal">
              {language === "ta" ? bride.nameTamil : bride.name}
            </h3>
            <p className="text-xs text-[#fcd55c] font-ornate">
              {language === "ta" ? "பெற்றோர்கள்:" : "Parents:"}
            </p>
            {/* Clearly marked editable placeholder */}
            <div className="p-2.5 rounded-lg bg-[#2d0210]/70 border border-dashed border-[#e8b32e]/50">
              <p className="text-xs text-[#ffe082] italic font-body">
                {language === "ta"
                  ? placeholders.brideParents.ta
                  : placeholders.brideParents.en}
              </p>
            </div>
            <p className="text-[11px] text-[#fff7df]/70 italic font-ornate">
              {language === "ta" ? bride.familyNoteTamil : bride.familyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
