interface MainBreakerProps {
  isOn: boolean;
  onToggle: () => void;
}

export default function MainBreaker({ isOn, onToggle }: MainBreakerProps) {
  return (
    <div className="fixed top-8 right-8 z-[9990] flex flex-col items-center">
      {/* Label */}
      <div
        className={`text-[10px] font-mono tracking-widest mb-2 font-bold px-2 py-0.5 border transition-colors ${
          isOn
            ? "bg-[#222] text-yellow-500 border-yellow-600"
            : "bg-[#111] text-red-400 border-red-800 animate-pulse"
        }`}
      >
        {isOn ? "MAIN BREAKER" : "BLACKOUT"}
      </div>

      {/* Switch housing */}
      <button
        onClick={onToggle}
        className={`w-14 h-[4.5rem] rounded border-4 transition-all duration-300 flex items-center justify-center relative shadow-2xl ${
          isOn ? "bg-[#d4d0c5] border-[#999]" : "bg-[#1a1a1a] border-[#555]"
        }`}
        style={{
          boxShadow: isOn
            ? "0 10px 10px rgba(0,0,0,0.2),inset 0 -10px 15px rgba(0,0,0,0.1)"
            : "0 10px 20px rgba(0,0,0,0.8),inset 0 -10px 15px rgba(0,0,0,0.5), 0 0 20px rgba(255,0,0,0.2)",
        }}
        aria-label={isOn ? "Switch off lights" : "Switch on lights"}
      >
        {/* Lever */}
        <div
          className={`w-8 h-10 rounded transition-all duration-500 shadow-md border-y-2 border-black ${
            isOn
              ? "bg-red-500 -translate-y-2"       /* lever UP = ON */
              : "bg-red-900 translate-y-2"          /* lever DOWN = OFF */
          }`}
        />

        {/* Glow ring when OFF */}
        {!isOn && (
          <div className="absolute inset-0 rounded border-2 border-red-600/30 animate-pulse pointer-events-none" />
        )}
      </button>

      {/* Tooltip hint */}
      <div
        className={`mt-2 text-[8px] font-mono tracking-widest transition-opacity ${
          isOn ? "opacity-0" : "opacity-80 text-red-400"
        }`}
      >
        TORCH MODE
      </div>
    </div>
  );
}
