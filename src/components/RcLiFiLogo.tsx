import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "color";
  showTagline?: boolean;
}

export function RcLiFiLogo({
  className = "h-10 w-auto",
}: LogoProps) {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="/RCLOGODARK.png"
        alt="RC LiFi Logo"
        className="h-full w-auto object-contain drop-shadow-sm"
      />
    </div>
  );
}
