import React from "react";
import { Language, PersonDetails, PlaceholdersConfig } from "@/types/invitation";

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
      className="relative min-h-[90vh] w-full flex flex-col justify-center items-center px-5 py-14 overflow-hidden bg-gradient-to-b from-[#500320] via-[#5c0626] to-[#6a082c] border-y border-[#e8b32e]/30"
    >
      <div className="relative z-10 w-full max-w-sm mx-auto space-y-6">
        {/* Section Header */}
        <div className="text-center space-y-1">
          <p className="text-[11px] uppercase tracking-widest text-[#fcd55c] font-royal">
            {language === "ta" ? "இருவீட்டார் அறிமுகம்" : "Honouring Families"}
          </p>
          <h2 className="text-2xl xs:text-3xl font-bold font-royal text-gold-gradient">
            {language === "ta" ? "குடும்ப ஆசிகள்" : "Family Blessings"}
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#e8b32e] to-transparent" />
        </div>

        {/* Groom's Family Card */}
        <div className="p-5 rounded-xl bg-[#440319]/80 border border-[#e8b32e]/40 shadow-lg relative">
          <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-[#e8b32e] text-[#3b0318] text-[10px] font-bold uppercase tracking-wider font-royal">
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
            <div className="p-2.5 rounded-md bg-[#2d0210]/60 border border-dashed border-[#e8b32e]/50">
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
        <div className="p-5 rounded-xl bg-[#440319]/80 border border-[#e8b32e]/40 shadow-lg relative">
          <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-[#e8b32e] text-[#3b0318] text-[10px] font-bold uppercase tracking-wider font-royal">
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
            <div className="p-2.5 rounded-md bg-[#2d0210]/60 border border-dashed border-[#e8b32e]/50">
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
