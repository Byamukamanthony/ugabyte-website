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
      {/* 3D Isometric Faceted 'U' Icon */}
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square shrink-0 drop-shadow-[0_0_12px_rgba(206,241,28,0.25)]"
        style={size ? { width: size, height: size } : undefined}
        aria-hidden="true"
      >
        {/* Gradients for authentic 3D lighting */}
        <defs>
          {/* Front Vibrant Face */}
          <linearGradient id="frontLimeGrad" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#e3ff1a" />
            <stop offset="100%" stopColor="#ccf200" />
          </linearGradient>

          {/* Left Wall Shade */}
          <linearGradient id="leftWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3cf00" />
            <stop offset="100%" stopColor="#8cb800" />
          </linearGradient>

          {/* Right Wall Shade (Deepest shadow) */}
          <linearGradient id="rightWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#88b500" />
            <stop offset="100%" stopColor="#709600" />
          </linearGradient>

          {/* Top Bevel Highlight */}
          <linearGradient id="topBevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d9ff1a" />
            <stop offset="100%" stopColor="#b4e400" />
          </linearGradient>

          {/* Bottom Left Bevel */}
          <linearGradient id="bottomLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b2e000" />
            <stop offset="100%" stopColor="#94be00" />
          </linearGradient>

          {/* Bottom Right Bevel */}
          <linearGradient id="bottomRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8cb800" />
            <stop offset="100%" stopColor="#769e00" />
          </linearGradient>
        </defs>

        {/* 1. Left Arm - Outer Left Wall */}
        <polygon
          points="204,100 204,729 300,785 300,211"
          fill="url(#leftWallGrad)"
        />

        {/* 2. Left Arm - Top Angled Face */}
        <polygon
          points="204,100 300,211 396,226 300,115"
          fill="url(#topBevelGrad)"
        />

        {/* 3. Left Arm - Front Face */}
        <polygon
          points="300,211 300,785 396,729 396,226"
          fill="url(#frontLimeGrad)"
        />

        {/* 4. Left Inner Cutout Wall */}
        <polygon
          points="396,226 396,618 500,678 500,785 396,729"
          fill="#bce800"
        />

        {/* 5. Bottom Left V Face */}
        <polygon
          points="204,729 500,900 500,845 300,785"
          fill="url(#bottomLeftGrad)"
        />

        {/* 6. Bottom Right V Face */}
        <polygon
          points="796,729 500,900 500,845 700,785"
          fill="url(#bottomRightGrad)"
        />

        {/* 7. Right Inner Cutout Wall */}
        <polygon
          points="604,226 604,618 500,678 500,785 604,729"
          fill="#9fcc00"
        />

        {/* 8. Right Arm - Front Face */}
        <polygon
          points="700,211 700,785 604,729 604,226"
          fill="url(#frontLimeGrad)"
        />

        {/* 9. Right Arm - Top Angled Face */}
        <polygon
          points="796,100 700,211 604,226 700,115"
          fill="#a4d100"
        />

        {/* 10. Right Arm - Outer Right Wall */}
        <polygon
          points="796,100 796,729 700,785 700,211"
          fill="url(#rightWallGrad)"
        />
      </svg>

      {/* Brand Name Typography */}
      {showWordmark && (
        <span className={`${wordmarkClassName} inline-flex items-baseline`}>
          <span className="text-[#FFFFFF]">Uga</span>
          <span className="text-[#cef11c]">Byte</span>
        </span>
      )}
    </div>
  );
};
