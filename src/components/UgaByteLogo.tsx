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
      {/* Official Favicon 3D Isometric Faceted 'U' Icon */}
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square shrink-0 drop-shadow-[0_2px_10px_rgba(198,242,0,0.3)]"
        style={size ? { width: size, height: size } : undefined}
        aria-hidden="true"
      >
        {/* 1. Left Arm Top Bevel Triangle */}
        <polygon points="204,100 396,211 300,266" fill="#d6ff00" />
        {/* 2. Left Arm Outer-Left Vertical Face */}
        <polygon points="204,100 300,266 300,673 204,729" fill="#c6f200" />
        {/* 3. Left Arm Inner-Right Vertical Face */}
        <polygon points="300,266 396,211 396,618 300,673" fill="#99c200" />
        {/* 4. Bottom-Left Inner V Face */}
        <polygon points="300,673 396,618 500,678 500,789" fill="#b2de00" />
        {/* 5. Bottom-Left Outer V Face */}
        <polygon points="204,729 300,673 500,789 500,900" fill="#ccf700" />
        {/* 6. Bottom-Right Inner V Face */}
        <polygon points="700,673 604,618 500,678 500,789" fill="#bee900" />
        {/* 7. Bottom-Right Outer V Face */}
        <polygon points="796,729 700,673 500,789 500,900" fill="#9bc400" />
        {/* 8. Right Arm Top Bevel Triangle */}
        <polygon points="796,100 604,211 700,266" fill="#dcff00" />
        {/* 9. Right Arm Inner-Left Vertical Face */}
        <polygon points="604,211 700,266 700,673 604,618" fill="#c9f500" />
        {/* 10. Right Arm Outer-Right Vertical Face */}
        <polygon points="700,266 796,100 796,729 700,673" fill="#a3cc00" />
      </svg>

      {/* Brand Name Typography */}
      {showWordmark && (
        <span className={`${wordmarkClassName} inline-flex items-baseline`}>
          <span className="text-[#FFFFFF]">Uga</span>
          <span className="text-[#cef11c] logo-accent">Byte</span>
          <span className="text-[10px] md:text-xs font-bold text-[#8E98A8] ml-1 tracking-wider uppercase">
            Inc.
          </span>
        </span>
      )}
    </div>
  );
};
