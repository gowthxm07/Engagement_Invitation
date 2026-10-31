import React from "react";

interface HangingBrassLampProps {
  chainLength?: number;
  lampScale?: number;
  className?: string;
}

export const HangingBrassLamp: React.FC<HangingBrassLampProps> = ({
  chainLength = 120,
  lampScale = 1,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center pointer-events-none ${className}`}
      style={{ transform: `scale(${lampScale})`, transformOrigin: "top center" }}
    >
      {/* Brass Chain */}
      <svg
        width="14"
        height={chainLength}
        viewBox={`0 0 14 ${chainLength}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        <defs>
          <linearGradient id="brassChainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#996515" />
            <stop offset="40%" stopColor="#ffd700" />
            <stop offset="70%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#805300" />
          </linearGradient>
        </defs>
        {/* Repeating chain links */}
        {Array.from({ length: Math.floor(chainLength / 12) }).map((_, i) => (
          <ellipse
            key={i}
            cx="7"
            cy={i * 12 + 6}
            rx="4.5"
            ry="6"
            stroke="url(#brassChainGrad)"
            strokeWidth="1.8"
            fill="none"
          />
        ))}
      </svg>

      {/* Brass Lamp Base & Bowl */}
      <svg
        width="54"
        height="64"
        viewBox="0 0 54 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative -mt-1 drop-shadow-md"
      >
        <defs>
          <radialGradient id="lampGlow" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffb300" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff6f00" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#eab308" />
            <stop offset="70%" stopColor="#a16207" />
            <stop offset="100%" stopColor="#713f12" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff3d00" />
            <stop offset="40%" stopColor="#ff9100" />
            <stop offset="80%" stopColor="#ffea00" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* Ambient flame halo glow */}
        <circle cx="27" cy="16" r="16" fill="url(#lampGlow)" className="animate-pulse" />

        {/* Flickering Oil Flame */}
        <path
          d="M 27 5 Q 23 15 27 21 Q 31 15 27 5 Z"
          fill="url(#flameGrad)"
          className="animate-flame"
        />

        {/* Central flame core */}
        <ellipse cx="27" cy="18" rx="2" ry="3" fill="#ffffff" opacity="0.9" />

        {/* Brass Cap / Finial */}
        <path
          d="M 24 19 L 30 19 L 29 23 L 25 23 Z"
          fill="url(#brassMetallic)"
          stroke="#713f12"
          strokeWidth="0.5"
        />

        {/* Deep Oil Bowl (Agal / Thooku) */}
        <path
          d="M 7 24 C 10 36 44 36 47 24 C 47 24 45 27 27 27 C 9 27 7 24 7 24 Z"
          fill="url(#brassMetallic)"
          stroke="#542e0c"
          strokeWidth="0.8"
        />
        {/* Bowl Rim */}
        <ellipse
          cx="27"
          cy="24"
          rx="20"
          ry="3.5"
          fill="#ca8a04"
          stroke="#713f12"
          strokeWidth="0.8"
        />

        {/* Ornate Bell & Base Drops */}
        <path
          d="M 22 34 L 32 34 L 30 45 L 24 45 Z"
          fill="url(#brassMetallic)"
        />
        <circle cx="27" cy="49" r="4.5" fill="url(#brassMetallic)" stroke="#713f12" strokeWidth="0.5" />
        <circle cx="27" cy="56" r="2.5" fill="#eab308" />
      </svg>
    </div>
  );
};
