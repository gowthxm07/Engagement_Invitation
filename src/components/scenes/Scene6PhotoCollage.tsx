import React from "react";
import Image from "next/image";
import { Language, PersonDetails } from "@/types/invitation";

interface Scene6PhotoCollageProps {
  groom: PersonDetails;
  bride: PersonDetails;
  language: Language;
}

export const Scene6PhotoCollage: React.FC<Scene6PhotoCollageProps> = ({
  groom,
  bride,
  language,
}) => {
  return (
    <section
      id="scene-6"
      aria-label="Couple Photograph and Moments Collage"
      className="relative min-h-[95vh] w-full flex flex-col justify-center items-center px-4 py-12 overflow-hidden bg-gradient-to-b from-[#d99b05] via-[#eab308] to-[#f5c542] text-[#4a1805]"
    >
      <div className="relative z-10 w-full max-w-sm mx-auto space-y-4">
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[#852a12] font-royal">
            {language === "ta" ? "மகிழ்ச்சியான தருணங்கள்" : "Cherished Moments"}
          </p>
          <h2 className="text-2xl xs:text-3xl font-extrabold font-royal text-[#781831]">
            {language === "ta"
              ? `${groom.nameTamil} & ${bride.nameTamil}`
              : `${groom.name} & ${bride.name}`}
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-[#852a12]/40" />
        </div>

        {/* Central Couple Photograph Card */}
        <div className="relative mx-auto rounded-2xl p-2 bg-gradient-to-b from-[#fef08a] via-[#fde047] to-[#eab308] shadow-2xl border-2 border-[#b45309]">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#781831] border border-[#78350f]/30">
            {/* The Actual Couple Photograph: Praveen S & Swathi N */}
            <Image
              src="/images/couple/praveen_and_swathi.jpeg"
              alt="Praveen S and Swathi N"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 440px) 100vw, 400px"
              priority
            />

            {/* Bottom Gradient Overlay for Name Caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col items-center text-center">
              <span className="text-sm font-bold text-[#fef08a] font-royal drop-shadow-md">
                {language === "ta"
                  ? `${groom.nameTamil} & ${bride.nameTamil}`
                  : `${groom.name} & ${bride.name}`}
              </span>
              <span className="text-[11px] text-[#fed7aa] font-ornate italic">
                {language === "ta"
                  ? "திருநிச்சயதார்த்த தம்பதிகள்"
                  : "The Engaged Couple"}
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle / Phase 2 Note */}
        <p className="text-center text-xs text-[#78350f] font-ornate italic px-4">
          {language === "ta"
            ? "இரு மனங்கள் இணைந்து புதிய வாழ்வைத் தொடங்கும் இனிய தருணம்"
            : "Two souls, two families, united by divine blessings and unconditional love"}
        </p>
      </div>
    </section>
  );
};
