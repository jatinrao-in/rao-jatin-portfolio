export default function BackgroundEffects() {
  return (
    <>
      {/* Layer 1: Grain / noise texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          filter: "contrast(1.2) brightness(0.9)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15' mix-blend-mode='multiply'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 2: Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          mixBlendMode: "overlay",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Layer 3: Radial vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle 1200px at 80% 10%, rgba(255,255,200,0.15) 0%, rgba(0,0,0,0.6) 80%)",
        }}
      />

      {/* Layer 4: Decorative coffee rings + stains */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {/* Top-left coffee ring */}
        <svg
          className="absolute pointer-events-none opacity-20 mix-blend-multiply top-[10%] left-[8%]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 200, height: 200 }}
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="#6F4E37" strokeWidth="4" opacity="0.3" />
          <circle cx="105" cy="98" r="80" fill="none" stroke="#6F4E37" strokeWidth="2" opacity="0.4" />
          <circle cx="95" cy="102" r="82" fill="none" stroke="#6F4E37" strokeWidth="6" opacity="0.2" />
          <path d="M 175 100 Q 185 120 170 140" fill="none" stroke="#6F4E37" strokeWidth="3" opacity="0.3" />
        </svg>

        {/* Bottom-right coffee ring */}
        <svg
          className="absolute pointer-events-none opacity-20 mix-blend-multiply bottom-[35%] right-[15%] scale-150 rotate-45"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 200, height: 200, opacity: 0.1 }}
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="#6F4E37" strokeWidth="4" opacity="0.3" />
          <circle cx="105" cy="98" r="80" fill="none" stroke="#6F4E37" strokeWidth="2" opacity="0.4" />
          <circle cx="95" cy="102" r="82" fill="none" stroke="#6F4E37" strokeWidth="6" opacity="0.2" />
        </svg>

        {/* Center faint ring */}
        <svg
          className="absolute pointer-events-none opacity-20 mix-blend-multiply top-[50%] left-[40%] scale-75"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 200, height: 200, opacity: 0.05 }}
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="#6F4E37" strokeWidth="4" opacity="0.3" />
          <circle cx="105" cy="98" r="80" fill="none" stroke="#6F4E37" strokeWidth="2" opacity="0.4" />
        </svg>

        {/* Tape / highlight rectangles */}
        <div className="absolute top-[20%] left-[30%] w-16 h-5 bg-yellow-600/20 mix-blend-multiply rotate-6" />
        <div className="absolute top-[60%] right-[25%] w-12 h-4 bg-yellow-600/20 mix-blend-multiply -rotate-12" />

        {/* Small ink dots */}
        <div className="absolute bottom-[20%] left-[20%] w-4 h-4 rounded-full bg-black/10 shadow-inner" />
        <div className="absolute top-[80%] left-[60%] w-3 h-3 rounded-full bg-black/15 shadow-inner" />
        <div className="absolute top-[15%] right-[40%] flex gap-1 rotate-[20deg] opacity-50">
          <div className="w-1 h-1 bg-black rounded-full shadow-inner" />
          <div className="w-1 h-1 bg-black rounded-full shadow-inner" />
        </div>
      </div>
    </>
  );
}
