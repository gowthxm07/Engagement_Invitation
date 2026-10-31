import React from "react";

interface KolamPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const KolamPattern: React.FC<KolamPatternProps> = ({
  className = "",
  size = 280,
  opacity = 0.18,
}) => {
  return (
    <div
      className={`flex justify-center items-center pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="kolamGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2b2" />
            <stop offset="50%" stopColor="#f3c64f" />
            <stop offset="100%" stopColor="#c59218" />
          </linearGradient>
        </defs>

        {/* Concentric Decorative Circles */}
        <circle cx="100" cy="100" r="95" stroke="url(#kolamGold)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="88" stroke="url(#kolamGold)" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="82" stroke="url(#kolamGold)" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="60" stroke="url(#kolamGold)" strokeWidth="1" />
        <circle cx="100" cy="100" r="38" stroke="url(#kolamGold)" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="16" stroke="url(#kolamGold)" strokeWidth="1" />
        <circle cx="100" cy="100" r="6" fill="url(#kolamGold)" />

        {/* 16 Radial Petals */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              {/* Outer Scallop Petal */}
              <path
                d="M 94 12 Q 100 2 106 12 Q 100 20 94 12 Z"
                fill="none"
                stroke="url(#kolamGold)"
                strokeWidth="1"
              />
              {/* Mid Lotus Petal */}
              <path
                d="M 92 40 C 92 20 108 20 108 40 C 104 50 96 50 92 40 Z"
                stroke="url(#kolamGold)"
                strokeWidth="0.9"
                fill="none"
              />
              {/* Inner Petal */}
              <path
                d="M 95 62 Q 100 52 105 62 Q 100 70 95 62 Z"
                fill="none"
                stroke="url(#kolamGold)"
                strokeWidth="0.8"
              />
              <circle cx="100" cy="22" r="1.5" fill="url(#kolamGold)" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
