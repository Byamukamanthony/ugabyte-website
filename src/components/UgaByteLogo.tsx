import React from "react";

interface UgaByteLogoProps {
  className?: string;
  size?: number | string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const UgaByteLogo: React.FC<UgaByteLogoProps> = ({
  className = "h-8",
  size,
  showWordmark = true,
  wordmarkClassName = "text-xl font-black tracking-tight",
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official 3D Isometric Faceted 'U' Icon (untouched original + responsive sizes) */}
      <img
        src="/assets/aistudio/ugabyte_icon_29c10976.png"
        srcSet="/favicon-96x96.png 96w, /favicon.png 192w, /android-chrome-512x512.png 512w, /assets/aistudio/ugabyte_icon_29c10976.png 1600w"
        sizes="40px"
        width={36}
        height={36}
        alt="UgaByte"
        className="h-full w-auto aspect-square shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(198,242,0,0.3)]"
        style={size ? { width: size, height: size } : undefined}
        loading="eager"
        decoding="async"
      />

      {/* Brand Name Typography */}
      {showWordmark && (
        <span className={`${wordmarkClassName} inline-flex items-baseline`}>
          <span className="text-[#FFFFFF]">Uga</span>
          <span className="text-[#cef11c] logo-accent">Byte</span>
        </span>
      )}
    </div>
  );
};
