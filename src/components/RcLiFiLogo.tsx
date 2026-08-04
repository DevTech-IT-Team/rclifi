import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "color";
  showTagline?: boolean;
}

export function RcLiFiLogo({
  className = "h-10 w-auto",
  variant = "color",
  showTagline = true,
}: LogoProps) {
  // Variant colors
  const primaryTextColor =
    variant === "light"
      ? "#FFFFFF"
      : variant === "dark"
      ? "#0B3D91"
      : "#0B3D91";

  const secondaryTextColor =
    variant === "light"
      ? "#38BDF8"
      : "#0284C7";

  const taglineColor =
    variant === "light"
      ? "rgba(255, 255, 255, 0.85)"
      : "rgba(11, 61, 145, 0.75)";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 320 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-sm"
      >
        <defs>
          {/* Northern Lights Aurora Gradient for Beam */}
          <linearGradient id="auroraBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="45%" stopColor="#06B6D4" />
            <stop offset="80%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Cyan Glow Gradient */}
          <linearGradient id="cyanGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#0B3D91" />
          </linearGradient>

          {/* Metallic Navy Shield Gradient */}
          <linearGradient id="navyShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B3D91" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <filter id="auroraGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Emblem: "R" + Arrow-through-"C" with Aurora Light Beam --- */}
        <g transform="translate(4, 4)">
          {/* Outer Ring / C Curve */}
          <path
            d="M 46 8 A 28 28 0 1 0 46 64"
            stroke="url(#navyShieldGrad)"
            strokeWidth="9"
            strokeLinecap="round"
          />

          {/* Letter 'R' Base */}
          <path
            d="M 18 16 V 56 M 18 16 H 32 C 39 16 39 30 32 30 H 18 M 28 30 L 40 56"
            stroke={variant === "light" ? "#FFFFFF" : "#0B3D91"}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dynamic Light Beam Arrow through 'C' (Northern Lights effect) */}
          <path
            d="M 8 36 L 56 36 M 46 26 L 58 36 L 46 46"
            stroke="url(#auroraBeamGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#auroraGlowFilter)"
          />

          {/* Optical Pulse Particles */}
          <circle cx="58" cy="36" r="3" fill="#00D4FF" />
          <circle cx="22" cy="36" r="2.5" fill="#10B981" />
        </g>

        {/* --- Brand Name: "RC LiFi" --- */}
        {/* 'RC' */}
        <text
          x="78"
          y="48"
          fill={primaryTextColor}
          fontFamily="Space Grotesk, Inter, sans-serif"
          fontWeight="800"
          fontSize="42"
          letterSpacing="-0.02em"
        >
          RC
        </text>

        {/* 'LiFi' */}
        <text
          x="142"
          y="48"
          fill={secondaryTextColor}
          fontFamily="Space Grotesk, Inter, sans-serif"
          fontWeight="800"
          fontSize="42"
          letterSpacing="-0.02em"
        >
          LiFi
        </text>

        {/* Optical Spark Dot above 'i' */}
        <circle cx="166" cy="18" r="3" fill="#00D4FF" />
        <circle cx="215" cy="18" r="3" fill="#10B981" />

        {/* --- Tagline: "Light Fidelity" --- */}
        {showTagline && (
          <g>
            <line
              x1="78"
              y1="57"
              x2="280"
              y2="57"
              stroke="url(#auroraBeamGrad)"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            <text
              x="78"
              y="74"
              fill={taglineColor}
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="13"
              letterSpacing="0.22em"
            >
              LIGHT FIDELITY
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
