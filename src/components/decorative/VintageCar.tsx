import React from "react";

interface VintageCarProps {
  className?: string;
  width?: number | string;
}

export const VintageCar: React.FC<VintageCarProps> = ({
  className = "",
  width = 240,
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        width={width}
        viewBox="0 0 260 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          {/* Vintage Mint Teal Body Paint */}
          <linearGradient id="vintageMint" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a3d2ca" />
            <stop offset="45%" stopColor="#68b0ab" />
            <stop offset="100%" stopColor="#417d78" />
          </linearGradient>

          {/* Chrome & Silver Trim */}
          <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="25%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="75%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>

          {/* Windshield Reflection */}
          <linearGradient id="windshieldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
          </linearGradient>

          {/* Ground Shadow */}
          <radialGradient id="carShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2b1119" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2b1119" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft Ground Shadow */}
        <ellipse cx="130" cy="148" rx="105" ry="10" fill="url(#carShadow)" />

        {/* Front Tyres */}
        <rect x="42" y="105" width="24" height="42" rx="6" fill="#1f2937" />
        <rect x="194" y="105" width="24" height="42" rx="6" fill="#1f2937" />
        {/* Tyre Tread / Inner Hub */}
        <rect x="45" y="112" width="18" height="28" rx="4" fill="#374151" />
        <rect x="197" y="112" width="18" height="28" rx="4" fill="#374151" />

        {/* Car Cabin Roof & Pillars */}
        <path
          d="M 64 62 C 68 40 82 24 130 24 C 178 24 192 40 196 62 Z"
          fill="url(#vintageMint)"
          stroke="#356662"
          strokeWidth="1.5"
        />

        {/* Front Windshield */}
        <path
          d="M 72 60 C 76 43 88 32 130 32 C 172 32 184 43 188 60 Z"
          fill="url(#windshieldGlass)"
          stroke="#4b5563"
          strokeWidth="1.2"
        />
        {/* Rearview Mirror */}
        <rect x="124" y="34" width="12" height="6" rx="2" fill="#e5e7eb" stroke="#4b5563" strokeWidth="0.8" />
        {/* Windshield Reflection Glare */}
        <path d="M 88 56 L 105 36 L 115 36 L 98 56 Z" fill="#ffffff" opacity="0.45" />

        {/* Main Body Hood & Front Fenders */}
        <path
          d="M 36 82 C 36 68 46 64 68 64 L 192 64 C 214 64 224 68 224 82 L 226 112 C 226 116 220 118 214 118 L 46 118 C 40 118 34 116 34 112 Z"
          fill="url(#vintageMint)"
          stroke="#2f5753"
          strokeWidth="1.5"
        />

        {/* Classic Chrome Grille */}
        <rect
          x="72"
          y="78"
          width="116"
          height="32"
          rx="5"
          fill="#111827"
          stroke="url(#chromeGrad)"
          strokeWidth="2"
        />
        {/* Grille Vertical Slats */}
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={i}
            x1={80 + i * 7}
            y1="82"
            x2={80 + i * 7}
            y2="106"
            stroke="url(#chromeGrad)"
            strokeWidth="1.5"
          />
        ))}

        {/* Dual Classic Headlights (Left & Right) */}
        {/* Left Headlights */}
        <g id="leftLights">
          <circle cx="54" cy="94" r="13" fill="url(#chromeGrad)" />
          <circle cx="54" cy="94" r="10.5" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
          <circle cx="54" cy="94" r="4" fill="#ffffff" opacity="0.8" />
        </g>
        {/* Right Headlights */}
        <g id="rightLights">
          <circle cx="206" cy="94" r="13" fill="url(#chromeGrad)" />
          <circle cx="206" cy="94" r="10.5" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
          <circle cx="206" cy="94" r="4" fill="#ffffff" opacity="0.8" />
        </g>

        {/* Classic Chrome Front Bumper */}
        <rect
          x="30"
          y="114"
          width="200"
          height="12"
          rx="6"
          fill="url(#chromeGrad)"
          stroke="#4b5563"
          strokeWidth="1"
        />
        {/* Bumper Overriders */}
        <rect x="76" y="110" width="8" height="18" rx="2" fill="url(#chromeGrad)" stroke="#374151" strokeWidth="0.8" />
        <rect x="176" y="110" width="8" height="18" rx="2" fill="url(#chromeGrad)" stroke="#374151" strokeWidth="0.8" />

        {/* Vintage License Plate: "SAVE THE DATE / 20-11-2026" */}
        <rect
          x="105"
          y="115"
          width="50"
          height="14"
          rx="2"
          fill="#fef08a"
          stroke="#854d0e"
          strokeWidth="0.8"
        />
        <text
          x="130"
          y="125"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="bold"
          fill="#78350f"
          fontFamily="sans-serif"
          letterSpacing="0.5"
        >
          20•11•2026
        </text>
      </svg>
    </div>
  );
};
