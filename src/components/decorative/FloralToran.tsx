import React from "react";

interface FloralToranProps {
  className?: string;
  showSideGarlands?: boolean;
}

export const FloralToran: React.FC<FloralToranProps> = ({
  className = "",
  showSideGarlands = true,
}) => {
  return (
    <div className={`w-full relative pointer-events-none z-20 ${className}`}>
      {/* Top Swag & Toran SVG */}
      <svg
        viewBox="0 0 440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <defs>
          {/* Mango Leaf Gradient */}
          <linearGradient id="mangoLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7cb342" />
            <stop offset="40%" stopColor="#43a047" />
            <stop offset="100%" stopColor="#1b5e20" />
          </linearGradient>

          {/* Marigold Orange & Yellow */}
          <radialGradient id="marigoldOrange" cx="40%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ffe082" />
            <stop offset="35%" stopColor="#ff9800" />
            <stop offset="85%" stopColor="#e65100" />
            <stop offset="100%" stopColor="#bf360c" />
          </radialGradient>

          <radialGradient id="marigoldYellow" cx="40%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#ffeb3b" />
            <stop offset="75%" stopColor="#fbc02d" />
            <stop offset="100%" stopColor="#f57f17" />
          </radialGradient>

          {/* Red Flower */}
          <radialGradient id="redFlower" cx="40%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ff8a80" />
            <stop offset="30%" stopColor="#e53935" />
            <stop offset="80%" stopColor="#b71c1c" />
            <stop offset="100%" stopColor="#7f0000" />
          </radialGradient>
        </defs>

        {/* Top Dark String / Thread */}
        <line x1="0" y1="12" x2="440" y2="12" stroke="#5d4037" strokeWidth="2.5" />

        {/* Green Leaf Swags (Pleated scalloped festoon) */}
        <path
          d="M 10 12 Q 70 42 130 12 Q 190 42 250 12 Q 310 42 370 12 Q 410 32 435 12"
          stroke="#4caf50"
          strokeWidth="6"
          strokeDasharray="4 2"
          fill="none"
        />
        <path
          d="M 10 14 Q 70 44 130 14 Q 190 44 250 14 Q 310 44 370 14 Q 410 34 435 14"
          stroke="#2e7d32"
          strokeWidth="4"
          fill="none"
        />

        {/* Mango Leaves hanging at swag valleys */}
        {[70, 190, 310].map((cx) => (
          <g key={cx} className="animate-sway-slow">
            {/* Left Leaf */}
            <path
              d={`M ${cx - 5} 24 C ${cx - 16} 40 ${cx - 14} 62 ${cx - 3} 76 C ${cx + 1} 62 ${cx + 1} 40 ${cx - 5} 24 Z`}
              fill="url(#mangoLeafGrad)"
              stroke="#1b5e20"
              strokeWidth="0.8"
            />
            {/* Center Leaf */}
            <path
              d={`M ${cx} 26 C ${cx - 8} 44 ${cx - 6} 68 ${cx + 4} 84 C ${cx + 12} 68 ${cx + 8} 44 ${cx} 26 Z`}
              fill="url(#mangoLeafGrad)"
              stroke="#1b5e20"
              strokeWidth="0.8"
            />
            {/* Right Leaf */}
            <path
              d={`M ${cx + 5} 24 C ${cx + 3} 40 ${cx + 8} 62 ${cx + 14} 74 C ${cx + 18} 60 ${cx + 12} 40 ${cx + 5} 24 Z`}
              fill="url(#mangoLeafGrad)"
              stroke="#1b5e20"
              strokeWidth="0.8"
            />
            {/* Leaf Veins */}
            <line x1={cx - 4} y1="26" x2={cx - 3} y2="72" stroke="#aed581" strokeWidth="0.8" />
            <line x1={cx + 2} y1="28" x2={cx + 4} y2="80" stroke="#aed581" strokeWidth="0.8" />
          </g>
        ))}

        {/* Red Flower Rosettes & Marigolds along the top line */}
        {[30, 70, 110, 150, 190, 230, 270, 310, 350, 390, 420].map((x, idx) => (
          <g key={x}>
            {idx % 2 === 0 ? (
              // Red Flower
              <circle cx={x} cy="15" r="8" fill="url(#redFlower)" />
            ) : (
              // Marigold Orange
              <circle cx={x} cy="16" r="8.5" fill="url(#marigoldOrange)" />
            )}
            <circle cx={x} cy={idx % 2 === 0 ? "15" : "16"} r="2.5" fill="#ffe082" />
          </g>
        ))}
      </svg>

      {/* Side Marigold Garlands (Left & Right) */}
      {showSideGarlands && (
        <>
          <div className="absolute top-10 left-1 flex flex-col items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full shadow-sm my-0.5 border border-amber-600/30"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(circle at 35% 35%, #ffe082, #ff9800 60%, #bf360c)"
                      : "radial-gradient(circle at 35% 35%, #fff9c4, #fbc02d 60%, #e65100)",
                }}
              />
            ))}
          </div>

          <div className="absolute top-10 right-1 flex flex-col items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full shadow-sm my-0.5 border border-amber-600/30"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(circle at 35% 35%, #ffe082, #ff9800 60%, #bf360c)"
                      : "radial-gradient(circle at 35% 35%, #fff9c4, #fbc02d 60%, #e65100)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
