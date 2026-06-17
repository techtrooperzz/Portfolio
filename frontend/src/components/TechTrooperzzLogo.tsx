import React from 'react';

interface LogoProps {
  className?: string;
  height?: number | string;
}

export const TechTrooperzzLogo: React.FC<LogoProps> = ({ className = '', height = 36 }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height }}>
      <svg 
        viewBox="0 0 460 115" 
        style={{ height: '100%', width: 'auto' }}
        className="overflow-visible" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SWOOP / DIVISION WAVE */}
        {/* Beautiful high-precision curve reproducing the sleek modern look */}
        <path 
          d="M 10 38 L 95 38 C 115 38 105 88 125 88 L 360 88 C 365 88 368 83 368 78" 
          stroke="currentColor" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        />

        {/* TT MONOGRAM ZONE */}
        <g className="translate-x-3 translate-y-[-2px]">
          {/* Main Large Serif T */}
          <text 
            x="14" 
            y="66" 
            fontFamily="'DM Serif Display', Georgia, serif" 
            fontWeight="bold" 
            fontSize="54" 
            fill="#94a3b8"
          >
            T
          </text>
          {/* Secondary Nested Italicized Small t */}
          <text 
            x="46" 
            y="64" 
            fontFamily="'DM Serif Display', Georgia, serif" 
            fontStyle="italic" 
            fontWeight="bold" 
            fontSize="40" 
            fill="#a78bfa"
          >
            t
          </text>
        </g>

        {/* BRAND TYPOGRAPHY HEADER */}
        <g className="translate-y-[4px]">
          <text 
            x="132" 
            y="72" 
            fontFamily="'DM Serif Display', Georgia, serif" 
            fontSize="38" 
            fill="white" 
            letterSpacing="0.03em"
          >
            Tech Trooperzz
          </text>
        </g>
      </svg>
    </div>
  );
};
