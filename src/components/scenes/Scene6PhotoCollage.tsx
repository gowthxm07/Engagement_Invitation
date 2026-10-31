import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState<"photo" | "art">("art");

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

        {/* View Switcher: Illustrated Portrait vs Real Photograph */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-full bg-[#781831]/80 backdrop-blur-xs border border-[#fef08a]/60 shadow-md">
            <button
              type="button"
              onClick={() => setActiveTab("art")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                activeTab === "art"
                  ? "bg-[#fef08a] text-[#781831] font-bold shadow-xs"
                  : "text-[#fef08a]/80 hover:text-white"
              }`}
            >
              {language === "ta" ? "ஓவிய வடிவம்" : "Hand-Painted Art"}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("photo")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                activeTab === "photo"
                  ? "bg-[#fef08a] text-[#781831] font-bold shadow-xs"
                  : "text-[#fef08a]/80 hover:text-white"
              }`}
            >
              {language === "ta" ? "உண்மைப் புகைப்படம்" : "Real Photo"}
            </button>
          </div>
        </div>

        {/* Central Couple Display Card */}
        <div className="relative mx-auto rounded-2xl p-2 bg-gradient-to-b from-[#fef08a] via-[#fde047] to-[#eab308] shadow-2xl border-2 border-[#b45309]">
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#781831] border border-[#78350f]/30">
            {activeTab === "art" ? (
              /* Hand-Painted Illustrated Portrait with Traditional Arch */
              <Image
                src="/images/illustrations/couple_portrait.jpg"
                alt="Hand-painted portrait of Praveen S and Swathi N in traditional wedding attire"
                fill
                className="object-cover object-center transition-all duration-700 animate-fadeIn"
                sizes="(max-width: 440px) 100vw, 400px"
                priority
              />
            ) : (
              /* The Actual Couple Photograph: Praveen S & Swathi N at Temple */
              <Image
                src="/images/couple/praveen_and_swathi.jpeg"
                alt="Authentic photograph of Praveen S and Swathi N at temple"
                fill
                className="object-cover object-center transition-all duration-700 animate-fadeIn"
                sizes="(max-width: 440px) 100vw, 400px"
              />
            )}

            {/* Bottom Gradient Overlay for Caption */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col items-center text-center">
              <span className="text-sm font-bold text-[#fef08a] font-royal drop-shadow-md">
                {language === "ta"
                  ? `${groom.nameTamil} & ${bride.nameTamil}`
                  : `${groom.name} & ${bride.name}`}
              </span>
              <span className="text-[11px] text-[#fed7aa] font-ornate italic">
                {activeTab === "art"
                  ? (language === "ta" ? "பாரம்பரிய திருமண ஓவியம்" : "Traditional Engagement Portrait")
                  : (language === "ta" ? "நிஜ தம்பதியர் புகைப்படம்" : "Authentic Couple Photograph")}
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle Message */}
        <p className="text-center text-xs text-[#78350f] font-ornate italic px-4">
          {language === "ta"
            ? "இரு மனங்கள் இணைந்து புதிய வாழ்வைத் தொடங்கும் இனிய தருணம்"
            : "Two souls, two families, united by divine blessings and unconditional love"}
        </p>
      </div>
    </section>
  );
};
