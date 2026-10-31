import React from "react";

interface TraditionalCoupleAvatarProps {
  className?: string;
  width?: number | string;
}

export const TraditionalCoupleAvatar: React.FC<TraditionalCoupleAvatarProps> = ({
  className = "",
  width = 300,
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        width={width}
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        <defs>
          {/* Skin tones */}
          <linearGradient id="groomSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3c299" />
            <stop offset="100%" stopColor="#d49b6a" />
          </linearGradient>

          <linearGradient id="brideSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbe2cb" />
            <stop offset="100%" stopColor="#e5b48b" />
          </linearGradient>

          {/* Saree Crimson & Silk Gold */}
          <linearGradient id="sareeCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c2185b" />
            <stop offset="40%" stopColor="#9c0d38" />
            <stop offset="100%" stopColor="#690422" />
          </linearGradient>

          <linearGradient id="zariGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff099" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>

          {/* Traditional Silk Shirt White */}
          <linearGradient id="silkShirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>

          {/* Rose & Jasmine Garland */}
          <radialGradient id="roseGarlandRed" cx="40%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ff5252" />
            <stop offset="70%" stopColor="#c62828" />
            <stop offset="100%" stopColor="#8e0000" />
          </radialGradient>
        </defs>

        {/* ----------------- BRIDE (Left, facing right) ----------------- */}
        <g id="brideIllustration" transform="translate(45, 10)">
          {/* Hair & Long Braid with Malli Poo (Jasmine Flowers) */}
          <path
            d="M 60 40 C 45 35 30 55 35 110 C 32 150 36 195 44 200 C 48 190 46 140 48 110 C 50 80 65 65 60 40 Z"
            fill="#1c1917"
          />
          {/* Jasmine Flowers (Malli Poo) along hair */}
          {[50, 65, 80, 95, 110, 130, 155].map((y, idx) => (
            <circle
              key={idx}
              cx={idx % 2 === 0 ? "38" : "42"}
              cy={y}
              r="4.5"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="0.8"
            />
          ))}

          {/* Head & Neck Profile */}
          <path
            d="M 68 45 C 64 35 78 22 92 26 C 104 30 108 45 106 58 C 104 68 96 74 86 74 C 82 74 80 84 80 92 L 72 92 C 72 82 70 70 68 45 Z"
            fill="url(#brideSkin)"
          />
          {/* Bride Facial Features (Soft profile facing right) */}
          {/* Forehead Pottu (Red Bindi) */}
          <circle cx="102" cy="40" r="2.2" fill="#d32f2f" />
          {/* Eye with Eyeliner */}
          <ellipse cx="98" cy="46" rx="3.5" ry="2" fill="#1c1917" />
          <circle cx="98.5" cy="45.5" r="0.8" fill="#ffffff" />
          {/* Soft Smile */}
          <path d="M 99 58 Q 104 60 102 63" stroke="#b91c1c" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Earring (Jhumka) */}
          <circle cx="76" cy="56" r="2.5" fill="url(#zariGold)" />
          <polygon points="73,60 79,60 76,66" fill="url(#zariGold)" />

          {/* Red Silk Saree Blouse & Pallu */}
          <path
            d="M 64 92 C 64 88 88 88 96 92 L 108 190 L 52 190 Z"
            fill="url(#sareeCrimson)"
          />
          {/* Gold Zari Border on Saree */}
          <path
            d="M 72 92 L 86 190 L 98 190 L 80 92 Z"
            fill="url(#zariGold)"
            opacity="0.9"
          />

          {/* Gold Bangles (Valayal) */}
          <rect x="88" y="148" width="16" height="3" rx="1.5" fill="url(#zariGold)" />
          <rect x="88" y="153" width="16" height="3" rx="1.5" fill="url(#zariGold)" />

          {/* Wedding Garland (Maalai) on Bride */}
          <g transform="translate(68, 78)">
            {[10, 25, 40, 55, 70, 85].map((y, idx) => (
              <g key={idx}>
                <circle cx={idx % 2 === 0 ? "16" : "24"} cy={y} r="6.5" fill="url(#roseGarlandRed)" />
                <circle cx={idx % 2 === 0 ? "16" : "24"} cy={y} r="2" fill="#ffffff" />
              </g>
            ))}
          </g>
        </g>

        {/* ----------------- GROOM (Right, facing left) ----------------- */}
        <g id="groomIllustration" transform="translate(170, 8)">
          {/* Head & Hair Profile (Well-groomed hair & neat beard) */}
          <path
            d="M 40 42 C 40 28 54 20 68 22 C 80 24 86 36 84 50 C 82 58 76 66 66 68 L 66 88 L 56 88 L 54 68 C 42 66 40 54 40 42 Z"
            fill="url(#groomSkin)"
          />
          {/* Hair */}
          <path
            d="M 46 36 C 48 24 62 18 76 22 C 84 25 86 36 82 46 C 76 42 66 38 52 40 Z"
            fill="#1c1917"
          />
          {/* Groom Trimmed Beard & Mustache */}
          <path
            d="M 42 54 C 40 62 48 70 58 70 C 62 70 64 66 64 62 C 58 64 50 62 46 54 Z"
            fill="#292524"
          />
          {/* Eye */}
          <ellipse cx="48" cy="45" rx="3.5" ry="2" fill="#1c1917" />
          <circle cx="47.5" cy="44.5" r="0.8" fill="#ffffff" />
          {/* Forehead Sandalwood Vibhuti / Chandanam */}
          <line x1="44" y1="34" x2="52" y2="34" stroke="#fef08a" strokeWidth="1.5" />
          <circle cx="48" cy="34" r="1" fill="#dc2626" />

          {/* Traditional White Silk Shirt */}
          <path
            d="M 32 88 C 42 84 72 84 82 88 L 94 192 L 20 192 Z"
            fill="url(#silkShirt)"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          {/* Silk Shirt Collar */}
          <polygon points="46,88 56,104 66,88 56,92" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          {/* Gold Wristwatch */}
          <rect x="36" y="152" width="12" height="6" rx="2" fill="url(#zariGold)" />

          {/* Wedding Garland (Maalai) on Groom */}
          <g transform="translate(24, 76)">
            {[10, 25, 40, 55, 70, 85].map((y, idx) => (
              <g key={idx}>
                <circle cx={idx % 2 === 0 ? "24" : "16"} cy={y} r="6.5" fill="url(#roseGarlandRed)" />
                <circle cx={idx % 2 === 0 ? "24" : "16"} cy={y} r="2" fill="#ffffff" />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};
