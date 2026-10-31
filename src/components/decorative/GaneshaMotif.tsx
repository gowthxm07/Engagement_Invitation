import React from "react";

interface GaneshaMotifProps {
  className?: string;
  size?: number;
}

export const GaneshaMotif: React.FC<GaneshaMotifProps> = ({
  className = "",
  size = 72,
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <defs>
          <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8db" />
            <stop offset="35%" stopColor="#f7d057" />
            <stop offset="70%" stopColor="#df9e19" />
            <stop offset="100%" stopColor="#8f5c00" />
          </linearGradient>

          <filter id="ganeshaGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Aura Circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          opacity="0.8"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#ganeshaGold)"
          strokeWidth="0.8"
          opacity="0.5"
        />

        {/* Auspicious Tilak / Thiruman at top forehead */}
        <path
          d="M 47 16 L 53 16 L 52 24 L 48 24 Z"
          fill="url(#ganeshaGold)"
        />
        <circle cx="50" cy="20" r="1.5" fill="#e53935" />

        {/* Crown (Mukut) */}
        <path
          d="M 40 26 L 50 14 L 60 26 L 56 27 L 50 22 L 44 27 Z"
          fill="url(#ganeshaGold)"
        />

        {/* Head / Forehead Arch */}
        <path
          d="M 36 34 C 42 27 58 27 64 34"
          stroke="url(#ganeshaGold)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Large Ears */}
        {/* Left Ear */}
        <path
          d="M 37 32 C 22 28 20 46 32 50 C 35 51 36 48 37 45"
          stroke="url(#ganeshaGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Ear */}
        <path
          d="M 63 32 C 78 28 80 46 68 50 C 65 51 64 48 63 45"
          stroke="url(#ganeshaGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small Expressive Eye & Brow */}
        <path
          d="M 43 38 Q 47 37 50 39"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="47" cy="41" r="1.8" fill="url(#ganeshaGold)" />

        {/* Trunk (Sundakkai / Vakratunda curve to left) */}
        <path
          d="M 52 38 C 55 45 54 58 48 66 C 42 74 32 72 32 64 C 32 58 40 59 42 63 C 43 65 41 68 37 67"
          stroke="url(#ganeshaGold)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Modak (Sweet) held by Trunk */}
        <circle cx="34" cy="62" r="3" fill="#ffe082" stroke="#d4af37" strokeWidth="0.8" />

        {/* Tusk (Danta) on right */}
        <path
          d="M 55 46 L 62 48 L 56 50 Z"
          fill="url(#ganeshaGold)"
        />

        {/* Belly & Lotus Base Petals */}
        <path
          d="M 30 82 C 40 76 60 76 70 82 C 62 86 38 86 30 82 Z"
          fill="url(#ganeshaGold)"
          opacity="0.85"
        />
        <circle cx="50" cy="85" r="2.5" fill="#fcd55c" />
      </svg>
    </div>
  );
};
