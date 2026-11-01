import React from "react";

interface TemplePillarsProps {
  className?: string;
  side: "left" | "right";
}

export const TemplePillars: React.FC<TemplePillarsProps> = ({
  className = "",
  side,
}) => {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute top-0 bottom-0 pointer-events-none z-10 w-[68px] ${
        isLeft ? "left-0" : "right-0"
      } ${className}`}
    >
      <div className={`w-full h-full ${!isLeft ? "-scale-x-100" : ""}`}>
        <svg
          viewBox="0 0 70 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full opacity-90 drop-shadow-lg"
      >
        <defs>
          <linearGradient id="sandstoneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b37651" />
            <stop offset="35%" stopColor="#d89b72" />
            <stop offset="70%" stopColor="#c5845c" />
            <stop offset="100%" stopColor="#8c4e2b" />
          </linearGradient>

          <linearGradient id="pillarShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6e3518" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#431e0c" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Vertical Main Pillar Shaft */}
        <rect x="0" y="0" width="56" height="500" fill="url(#sandstoneGrad)" />

        {/* Inner shadow */}
        <rect x="42" y="0" width="14" height="500" fill="url(#pillarShadow)" />

        {/* Top Capital & Corbel */}
        <polygon points="0,0 70,0 60,35 0,35" fill="#a4613d" />
        <rect x="0" y="35" width="62" height="12" fill="#c5845c" />
        <rect x="0" y="47" width="56" height="8" fill="#8c4e2b" />

        {/* Carved Yali / Mythical Lion Motif */}
        <g id="yaliSculpture" transform="translate(6, 120)">
          {/* Yali Head & Crown */}
          <path
            d="M 12 10 Q 32 0 44 18 Q 48 30 40 40 Q 32 46 22 42 Q 10 36 12 10 Z"
            fill="#8e4f2c"
            stroke="#5a2b13"
            strokeWidth="1.2"
          />
          {/* Eye */}
          <circle cx="28" cy="20" r="3.5" fill="#fff" />
          <circle cx="29" cy="20" r="1.8" fill="#2b1509" />
          {/* Snout and Tusks */}
          <path
            d="M 38 28 Q 46 32 44 42 Q 38 38 34 34 Z"
            fill="#d89b72"
            stroke="#5a2b13"
          />
          {/* Mane */}
          <path
            d="M 8 16 Q 0 30 8 45 Q 2 60 14 70 Q 6 85 20 95"
            stroke="#5a2b13"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Muscular Front Forelimb / Paw */}
          <path
            d="M 24 45 C 38 52 46 75 42 105 C 36 108 26 108 22 102 C 24 82 20 62 24 45 Z"
            fill="#a4613d"
            stroke="#5a2b13"
            strokeWidth="1.2"
          />
          {/* Claws */}
          <circle cx="34" cy="106" r="2.5" fill="#5a2b13" />
          <circle cx="40" cy="105" r="2.5" fill="#5a2b13" />
        </g>

        {/* Mid Pillar Bands & Carved Rosettes */}
        {[270, 310, 350].map((y) => (
          <g key={y}>
            <rect x="0" y={y} width="56" height="14" fill="#a4613d" />
            <circle cx="28" cy={y + 7} r="4" fill="#d89b72" />
            <circle cx="28" cy={y + 7} r="2" fill="#5a2b13" />
            <line x1="0" y1={y} x2="56" y2={y} stroke="#6e3518" strokeWidth="1" />
            <line x1="0" y1={y + 14} x2="56" y2={y + 14} stroke="#6e3518" strokeWidth="1" />
          </g>
        ))}

        {/* Lower Pillar Base (Pedestal) */}
        <polygon points="0,430 62,430 68,460 0,460" fill="#a4613d" />
        <rect x="0" y="460" width="70" height="40" fill="#7d3e1d" />
      </svg>
      </div>
    </div>
  );
};
