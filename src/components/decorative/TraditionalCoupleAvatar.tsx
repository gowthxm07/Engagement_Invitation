import React from "react";
import Image from "next/image";

interface TraditionalCoupleAvatarProps {
  className?: string;
  width?: number | string;
  useTransparent?: boolean;
}

export const TraditionalCoupleAvatar: React.FC<TraditionalCoupleAvatarProps> = ({
  className = "",
  useTransparent = true,
}) => {
  const imageSrc = useTransparent
    ? "/images/illustrations/couple_full_body_transparent.png"
    : "/images/illustrations/couple_full_body.jpg";

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {/* Soft warm glow behind the couple */}
      <div className="absolute inset-0 max-w-[280px] max-h-[380px] mx-auto my-auto rounded-full bg-gradient-to-t from-[#f5c542]/20 via-[#e28a9d]/30 to-transparent blur-2xl pointer-events-none" />

      {/* Illustrated Couple Portrait (Praveen S & Swathi N) */}
      <div className="relative w-full max-w-[320px] aspect-[9/16] drop-shadow-2xl flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="Illustrated South Indian couple: Praveen S and Swathi N in traditional wedding attire"
          fill
          className="object-contain object-bottom select-none transition-transform duration-500 hover:scale-[1.02]"
          sizes="(max-width: 440px) 320px, 400px"
          priority
        />
      </div>
    </div>
  );
};
