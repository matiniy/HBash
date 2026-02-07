'use client';

import React from 'react';

const GRADIENT_STYLE = { background: 'radial-gradient(ellipse at center, #FFEFDF 0%, #F3D4B4 100%)' };

export default function GradientNoiseWrapper({ children }: { children: React.ReactNode }) {
  const filterId = `gradientNoise-${React.useId().replace(/:/g, '')}`;
  return (
    <div className="main-gradient-bg relative overflow-x-hidden w-full" style={GRADIENT_STYLE}>
      <div className="gradient-noise-overlay" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <filter id={filterId} x="0" y="0">
              <feTurbulence type="fractalNoise" baseFrequency="0.833" numOctaves="4" result="turbulence" />
              <feColorMatrix
                in="turbulence"
                type="matrix"
                values="0.996 0 0 0 0 0 0.886 0 0 0 0 0 0.776 0 0 0 0 0 1 0"
                result="noise"
              />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#FEE2C6" filter={`url(#${filterId})`} />
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
