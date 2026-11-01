import React from "react";
import { HangingBrassLamp } from "@/components/decorative/HangingBrassLamp";
import { PersonDetails } from "@/types/invitation";

interface Scene5GroomBrideIntroProps {
  groom: PersonDetails;
  bride: PersonDetails;
}

export const Scene5GroomBrideIntro: React.FC<Scene5GroomBrideIntroProps> = ({
  groom,
  bride,
}) => {
  return (
    <section
      id="scene-4"
      aria-label="Golden Groom and Bride Introduction"
      className="relative min-h-[90vh] w-full flex flex-col justify-between items-center px-6 py-12 overflow-hidden bg-gradient-to-b from-[#eab308] via-[#e2a806] to-[#d99b05] text-[#4a1805]"
    >
      {/* Hanging Brass Lamps on Left & Right */}
      <div className="absolute top-0 left-6 z-20 animate-sway-slow">
        <HangingBrassLamp chainLength={70} lampScale={0.8} />
      </div>
      <div className="absolute top-0 right-6 z-20 animate-sway-slow">
        <HangingBrassLamp chainLength={70} lampScale={0.8} />
      </div>

      {/* Ornate Gold Filigree Top Lace SVG */}
      <div className="w-full relative z-10 pt-4 px-2 reveal-on-scroll">
        <svg
          viewBox="0 0 360 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto opacity-70"
        >
          <path
            d="M 10 30 Q 50 5 90 30 Q 130 55 170 30 Q 180 25 190 30 Q 230 55 270 30 Q 310 5 350 30"
            stroke="#78350f"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M 30 30 C 50 15 70 15 90 30 C 110 45 130 45 150 30 C 170 15 190 15 210 30 C 230 45 250 45 270 30 C 290 15 310 15 330 30"
            stroke="#92400e"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Swirl Medallions */}
          {[90, 180, 270].map((x) => (
            <circle key={x} cx={x} cy="30" r="5" fill="#fef3c7" stroke="#78350f" strokeWidth="1.2" />
          ))}
        </svg>
      </div>

      {/* Center Introducing Text matching reference */}
      <div className="relative z-10 my-auto text-center space-y-3 px-4">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#852a12] font-royal reveal-on-scroll delay-100">
          Introducing The
        </p>

        <h2 className="text-3xl xs:text-4xl font-extrabold tracking-wider font-royal text-[#781831] drop-shadow-sm leading-tight reveal-scale delay-200">
          GROOM AND BRIDE
        </h2>

        <div className="flex items-center justify-center gap-3 pt-2 reveal-on-scroll delay-300">
          <span className="h-0.5 w-10 bg-[#852a12]/50" />
          <span className="text-sm font-bold text-[#781831] font-royal">
            {groom.name}
          </span>
          <span className="text-xs text-[#852a12]">♥</span>
          <span className="text-sm font-bold text-[#781831] font-royal">
            {bride.name}
          </span>
          <span className="h-0.5 w-10 bg-[#852a12]/50" />
        </div>
      </div>

      {/* Bottom Flourish */}
      <div className="relative z-10 text-center pb-2 reveal-on-scroll delay-400">
        <p className="text-xs text-[#78350f] font-ornate italic">
          A sacred journey of love, friendship &amp; togetherness
        </p>
      </div>
    </section>
  );
};
