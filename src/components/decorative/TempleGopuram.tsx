import React from "react";

interface TempleGopuramProps {
  className?: string;
  width?: number | string;
}

export const TempleGopuram: React.FC<TempleGopuramProps> = ({
  className = "",
  width = "100%",
}) => {
  return (
    <div className={`relative flex justify-center items-end ${className}`}>
      <svg
        width={width}
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
      >
        <defs>
          {/* Temple Stone & Terracotta Colors matching reference */}
          <linearGradient id="templeTerracotta" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d57a66" />
            <stop offset="50%" stopColor="#b45749" />
            <stop offset="100%" stopColor="#87352d" />
          </linearGradient>

          <linearGradient id="templeTeal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#76b3a9" />
            <stop offset="100%" stopColor="#417c73" />
          </linearGradient>

          <linearGradient id="goldKalasam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3b0" />
            <stop offset="40%" stopColor="#e5a93b" />
            <stop offset="100%" stopColor="#966014" />
          </linearGradient>

          <linearGradient id="stepsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d9899e" />
            <stop offset="100%" stopColor="#9d4b60" />
          </linearGradient>

          <linearGradient id="sanctumGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff1c5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffb300" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Temple Enclosure Wall / Prakaram in Background */}
        <rect x="20" y="160" width="360" height="110" fill="#c48375" opacity="0.4" />
        <path
          d="M 20 160 Q 60 150 100 160 Q 140 150 180 160 Q 220 150 260 160 Q 300 150 340 160 Q 380 150 380 160"
          stroke="#9e5649"
          strokeWidth="3"
          fill="none"
        />

        {/* Tier 1 - Top Shikhara Kalasams (Golden Pots) */}
        <path d="M 197 12 L 203 12 L 201 4 L 199 4 Z" fill="url(#goldKalasam)" />
        <circle cx="200" cy="14" r="5" fill="url(#goldKalasam)" />
        <circle cx="185" cy="22" r="3.5" fill="url(#goldKalasam)" />
        <circle cx="215" cy="22" r="3.5" fill="url(#goldKalasam)" />

        {/* Tier 1 - Crown Dome / Vimanam */}
        <path
          d="M 175 48 C 175 24 225 24 225 48 Z"
          fill="url(#templeTerracotta)"
          stroke="#68251e"
          strokeWidth="1.5"
        />
        <rect x="170" y="48" width="60" height="12" rx="2" fill="url(#templeTeal)" />

        {/* Tier 2 - Upper Gopuram Shrine with niches & miniature mandapas */}
        <polygon points="160,82 170,60 230,60 240,82" fill="url(#templeTerracotta)" />
        <rect x="155" y="82" width="90" height="14" rx="2" fill="url(#templeTeal)" />
        {/* Carved Statues in Niches */}
        <circle cx="185" cy="72" r="4" fill="#fce5cd" />
        <rect x="183" y="76" width="4" height="6" fill="#c27ba0" />
        <circle cx="200" cy="71" r="4.5" fill="#fce5cd" />
        <rect x="197" y="75" width="6" height="7" fill="#e06666" />
        <circle cx="215" cy="72" r="4" fill="#fce5cd" />
        <rect x="213" y="76" width="4" height="6" fill="#c27ba0" />

        {/* Side Mini Gopuram Towers */}
        <polygon points="135,115 145,80 160,80 165,115" fill="url(#templeTerracotta)" />
        <polygon points="265,115 255,80 240,80 235,115" fill="url(#templeTerracotta)" />
        <circle cx="152" cy="78" r="3" fill="url(#goldKalasam)" />
        <circle cx="248" cy="78" r="3" fill="url(#goldKalasam)" />

        {/* Tier 3 - Middle Gopuram Floor */}
        <polygon points="130,126 150,96 250,96 270,126" fill="url(#templeTerracotta)" />
        <rect x="125" y="126" width="150" height="16" rx="2" fill="url(#templeTeal)" />
        {/* Tier 3 Pillars */}
        {[140, 160, 180, 200, 220, 240, 260].map((x) => (
          <rect key={x} x={x - 2} y="104" width="4" height="22" fill="#713229" />
        ))}

        {/* Tier 4 - Main Base Mandapam */}
        <polygon points="105,178 120,142 280,142 295,178" fill="url(#templeTerracotta)" />
        <rect x="95" y="178" width="210" height="18" fill="url(#templeTeal)" />

        {/* Left and Right Side Shrines / Mandapams */}
        <g id="leftShrine">
          <polygon points="65,220 85,160 115,160 115,220" fill="url(#templeTerracotta)" />
          <circle cx="100" cy="157" r="4" fill="url(#goldKalasam)" />
          <rect x="60" y="220" width="60" height="12" fill="url(#templeTeal)" />
        </g>
        <g id="rightShrine">
          <polygon points="335,220 315,160 285,160 285,220" fill="url(#templeTerracotta)" />
          <circle cx="300" cy="157" r="4" fill="url(#goldKalasam)" />
          <rect x="280" y="220" width="60" height="12" fill="url(#templeTeal)" />
        </g>

        {/* Central Sanctum Doorway (Garbhagriha Entrance) */}
        <rect x="168" y="196" width="64" height="64" fill="#321410" rx="3" />
        {/* Sanctum Inner Light Glow */}
        <ellipse cx="200" cy="225" rx="22" ry="26" fill="#fde047" opacity="0.3" />
        {/* Ornate Arch above Entrance */}
        <path
          d="M 166 200 C 166 182 234 182 234 200"
          stroke="url(#goldKalasam)"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Main Temple Pillars Framing Entrance */}
        <rect x="145" y="196" width="14" height="64" fill="#a44b3c" />
        <rect x="142" y="193" width="20" height="6" fill="url(#goldKalasam)" />
        <rect x="142" y="254" width="20" height="6" fill="url(#goldKalasam)" />

        <rect x="241" y="196" width="14" height="64" fill="#a44b3c" />
        <rect x="238" y="193" width="20" height="6" fill="url(#goldKalasam)" />
        <rect x="238" y="254" width="20" height="6" fill="url(#goldKalasam)" />

        {/* Grand Temple Steps (Pinkish stone steps leading down) */}
        <polygon points="150,260 250,260 262,272 138,272" fill="#d97d95" />
        <polygon points="138,272 262,272 274,284 126,284" fill="#c7647d" />
        <polygon points="126,284 274,284 286,296 114,296" fill="#b04e67" />
        <polygon points="114,296 286,296 298,308 102,308" fill="#993d54" />
        <polygon points="102,308 298,308 312,320 88,320" fill="#802e43" />
      </svg>
    </div>
  );
};
