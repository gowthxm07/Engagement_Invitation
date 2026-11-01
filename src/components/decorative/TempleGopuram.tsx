import React from "react";
import Image from "next/image";

interface TempleGopuramProps {
  className?: string;
  width?: number | string;
}

export const TempleGopuram: React.FC<TempleGopuramProps> = ({
  className = "",
}) => {
  return (
    <div className={`relative flex justify-center items-end w-full ${className}`}>
      <div className="relative w-full max-w-[340px] xs:max-w-[360px] aspect-[692/832] mx-auto drop-shadow-2xl">
        <Image
          src="/images/decorations/realistic_gopuram.png"
          alt="Realistic South Indian Dravidian temple gopuram tower with sculpted tiers and golden kalasams"
          fill
          className="object-contain object-bottom select-none pointer-events-none"
          sizes="(max-width: 440px) 100vw, 360px"
          priority
        />
      </div>
    </div>
  );
};
