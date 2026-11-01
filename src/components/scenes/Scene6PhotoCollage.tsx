import React from "react";
import Image from "next/image";
import { PersonDetails } from "@/types/invitation";

interface Scene6PhotoCollageProps {
  groom: PersonDetails;
  bride: PersonDetails;
}

export const Scene6PhotoCollage: React.FC<Scene6PhotoCollageProps> = ({
  groom,
  bride,
}) => {
  return (
    <section
      id="scene-5"
      aria-label="Hand-Painted Engagement Portrait"
      className="relative min-h-[95vh] w-full flex flex-col justify-center items-center px-4 py-12 overflow-hidden bg-gradient-to-b from-[#d99b05] via-[#eab308] to-[#f5c542] text-[#4a1805]"
    >
      <div className="relative z-10 w-full max-w-sm mx-auto space-y-5">
        {/* Section Heading */}
        <div className="text-center space-y-1 reveal-on-scroll delay-100">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[#852a12] font-royal">
            Cherished Moments
          </p>
          <h2 className="text-2xl xs:text-3xl font-extrabold font-royal text-[#781831]">
            {groom.name} &amp; {bride.name}
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-[#852a12]/40" />
        </div>

        {/* Central Couple Display Card: Hand-Painted Illustrated Portrait */}
        <div className="relative mx-auto rounded-2xl p-2.5 bg-gradient-to-b from-[#fef08a] via-[#fde047] to-[#eab308] shadow-2xl border-2 border-[#b45309] reveal-scale delay-200">
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#781831] border border-[#78350f]/30">
            {/* Hand-Painted Illustrated Portrait with Traditional Wedding Garlands & Attire */}
            <Image
              src="/images/illustrations/couple_portrait.jpg"
              alt="Hand-painted portrait of Praveen S and Swathi N in traditional wedding attire"
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 440px) 100vw, 400px"
              priority
            />

            {/* Bottom Gradient Overlay for Caption */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col items-center text-center">
              <span className="text-sm font-bold text-[#fef08a] font-royal drop-shadow-md">
                {groom.name} &amp; {bride.name}
              </span>
              <span className="text-[11px] text-[#fed7aa] font-ornate italic">
                Traditional Engagement Portrait
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle Message */}
        <p className="text-center text-xs text-[#78350f] font-ornate italic px-4 reveal-on-scroll delay-300">
          Two souls, two families, united by divine blessings and unconditional love
        </p>
      </div>
    </section>
  );
};
