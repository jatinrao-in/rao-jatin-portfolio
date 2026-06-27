export default function SVGDefs() {
  return (
    <>
      {/* Marker texture filter for hand-drawn SVG strokes */}
      <svg className="w-0 h-0 absolute pointer-events-none">
        <defs>
          <filter id="marker-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Silver gradient for paper pins */}
      <svg className="w-0 h-0 absolute pointer-events-none">
        <defs>
          <linearGradient id="silver-grad" x1="6" y1="2" x2="26" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5E7EB" />
            <stop offset="0.5" stopColor="#9CA3AF" />
            <stop offset="1" stopColor="#4B5563" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
