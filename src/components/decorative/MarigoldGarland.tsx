import React from "react";

interface MarigoldGarlandProps {
  flowerCount?: number;
  className?: string;
}

export const MarigoldGarland: React.FC<MarigoldGarlandProps> = ({
  flowerCount = 7,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center pointer-events-none ${className}`}>
      {Array.from({ length: flowerCount }).map((_, idx) => {
        const isOrange = idx % 2 === 0;
        return (
          <div
            key={idx}
            className="w-5 h-5 rounded-full shadow-sm my-0.5 relative flex items-center justify-center"
            style={{
              background: isOrange
                ? "radial-gradient(circle at 35% 35%, #ffe082 10%, #ff9800 60%, #bf360c 100%)"
                : "radial-gradient(circle at 35% 35%, #ffffff 10%, #fbc02d 60%, #e65100 100%)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
            }}
          >
            {/* Inner flower texture dot */}
            <div
              className="w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: isOrange ? "#ffe082" : "#fff9c4",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
