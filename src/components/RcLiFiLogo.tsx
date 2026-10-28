import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "color";
  showTagline?: boolean;
}

export function RcLiFiLogo({
  className = "h-14 sm:h-16 w-auto",
  variant = "color",
}: LogoProps) {
  // Use white-optimized logo for dark surfaces if variant is light
  const logoSrc = variant === "light" ? "/rclifilog-white.png" : "/RCLOGODARK.png";

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="RC LiFi Logo"
        className="h-full w-auto object-contain drop-shadow-sm transition-transform duration-300"
        loading="eager"
      />
    </div>
  );
}

