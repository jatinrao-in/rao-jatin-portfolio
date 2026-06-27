export default function FooterTicker() {
  const messages = [
    { tag: "INTEL", text: "SUBJECT RAO JATIN SPECIALIZES IN FULL-STACK WEB DEVELOPMENT" },
    { tag: "STATUS", text: "AVAILABLE FOR NEW OPPORTUNITIES — REMOTE & ON-SITE" },
    { tag: "LOG", text: "SAYA INDUSTRIAL SOLUTION — 70% OPERATIONS AUTOMATED SUCCESSFULLY" },
    { tag: "DATA", text: "IIT MADRAS BS DATA SCIENCE PROGRAM — ACTIVE ENROLLMENT DETECTED" },
    { tag: "INFO", text: "GEOLOCATION: REWARI, INDIA // DEPLOYING GLOBALLY VIA VERCEL" },
    { tag: "SIGNAL", text: "PORTFOLIO ASSETS RE-INDEXED... 100% SUCCESS" },
    { tag: "INTEL", text: "SUBJECT RAO JATIN SPECIALIZES IN FULL-STACK WEB DEVELOPMENT" },
    { tag: "STATUS", text: "AVAILABLE FOR NEW OPPORTUNITIES — REMOTE & ON-SITE" },
    { tag: "LOG", text: "SAYA INDUSTRIAL SOLUTION — 70% OPERATIONS AUTOMATED SUCCESSFULLY" },
    { tag: "DATA", text: "IIT MADRAS BS DATA SCIENCE PROGRAM — ACTIVE ENROLLMENT DETECTED" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[120] bg-[#111] border-t border-red-700/30 h-10 flex items-center overflow-hidden font-mono text-[9px] uppercase tracking-widest text-red-700/60 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      {/* Live feed badge */}
      <div className="flex items-center gap-4 px-6 bg-[#111] text-red-600 h-full font-bold border-r border-red-700/20 relative z-20 shrink-0">
        <span
          className="w-2 h-2 bg-red-600 rounded-full"
          style={{ animation: "pulse 1.5s ease-in-out infinite", boxShadow: "0 0 8px red" }}
        />
        <span className="relative z-10">LIVE_FEED</span>
        <div className="absolute inset-0 bg-red-900/10 pointer-events-none" />
      </div>

      {/* Scrolling messages */}
      <div className="whitespace-nowrap animate-marquee flex items-center gap-12 pl-4 relative z-0">
        {messages.map((m, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-red-500 font-black">[{m.tag}]</span>
            {m.text}
          </span>
        ))}
      </div>
    </footer>
  );
}
