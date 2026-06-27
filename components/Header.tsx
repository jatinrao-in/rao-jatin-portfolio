"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`pb-12 sticky top-0 z-30 transition-all duration-500 origin-top ${
      scrolled 
        ? "opacity-0 pointer-events-none -translate-y-8 scale-95" 
        : "opacity-100 translate-y-0 scale-100"
    }`}>
      {/* Subject ID bar */}
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between font-mono text-[11px] tracking-widest uppercase opacity-80 mb-6 border-b border-[#111] pb-2 px-4 md:px-8">
        <span className="bg-[#e8f118] text-black px-2 py-0.5 mix-blend-multiply flex items-center shadow-sm font-bold">
          SUBJECT_ID: RAO_JATIN
        </span>
        <span className="relative mt-2 md:mt-0">
          DATE_PULLED: {" "}
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          {/* Animated underline */}
          <svg
            className="absolute pointer-events-none overflow-visible -bottom-1 left-0 w-full h-2 text-red-600 mix-blend-multiply"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M5,10 Q 50,15 95,5 M 10,15 Q 60,20 100,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
              style={{ filter: "url(#marker-texture)" }}
            />
          </svg>
        </span>
      </div>

      {/* Main header content */}
      <div className="max-w-[1250px] 2xl:max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-50 px-4 md:px-8">
        {/* Giant name */}
        <h1
          className="font-serif font-black leading-[0.8] tracking-tighter uppercase"
          style={{ fontSize: "clamp(4.5rem, 12vw, 9rem)" }}
        >
          RAO
          <br />
          JATIN
        </h1>

        {/* Right side: sticky note + photo + status */}
        <div className="flex gap-4 md:gap-8 items-end relative">
          {/* Yellow sticky note — phone/email */}
          <div
            className="absolute -top-16 -left-6 lg:-top-20 lg:-left-20 bg-[#feff9c] p-5 lg:p-6 shadow-paper rotate-[-6deg] max-w-[140px] lg:max-w-[170px] leading-[0.9] z-40 hidden md:flex flex-col items-center justify-center font-bold text-black border border-yellow-200"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            {/* Tape strip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-md shadow-sm border border-white/30 rotate-3 z-50 mix-blend-overlay" />
            <span className="text-center text-[1.8rem] lg:text-[2.2rem]">
              Call Him!
              <br />
              <span className="text-[1.1rem] lg:text-[1.3rem]">+91 9306018924</span>
            </span>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-[#d5d679]" />
          </div>

          {/* Polaroid photo card */}
          <div className="w-[180px] h-[230px] md:w-[200px] md:h-[260px] lg:w-[260px] lg:h-[330px] p-2 lg:p-3 pb-8 lg:pb-12 rotate-2 transition-transform relative z-30 shrink-0 group hover:rotate-0 shadow-paper bg-[#f4f1ea] border-gray-300 border">
            {/* Tape on photo */}
            <div className="absolute bottom-6 -right-6 w-20 h-7 bg-white/30 backdrop-blur-md rotate-[-25deg] shadow-sm border border-white/20 z-50 mix-blend-overlay" />
            {/* Red pushpin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-red-600 shadow-sm border border-red-800 z-50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full absolute top-[3px] left-[3px]" />
            </div>
            {/* Photo area */}
            <div className="w-full h-full bg-gray-200 overflow-hidden border border-[#111]/30 relative z-20 flex items-center justify-center">
              <Image
                src="/pp.jpg"
                alt="Rao Jatin"
                fill
                priority={true}
                className="object-cover transition-all duration-500 grayscale contrast-125 mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal"
              />
            </div>
            {/* Caption */}
            <div
              className="text-[1.8rem] lg:text-[2.6rem] font-bold text-center mt-2 lg:mt-3 leading-[0.5] relative z-20 text-black"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Web Developer
            </div>
          </div>

          {/* Status panel */}
          <div className="text-sm font-bold opacity-90 max-w-[200px] uppercase font-mono tracking-widest space-y-2 border-l-[4px] border-red-700 pl-4 pb-1">
            <div>Web &amp; Software Engineer</div>
            <div>Loc: Rewari, IN</div>
            <div className="text-[#111] font-black inline-block shrink-0 relative mt-2 text-base top-1 px-3">
              STATUS: ACTIVE
              {/* Red marker circle */}
              <svg
                className="absolute pointer-events-none overflow-visible -inset-x-3 -inset-y-1 w-[calc(100%+24px)] h-[calc(100%+8px)] z-50 text-[#dc2626] opacity-90 drop-shadow-sm"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ position: "absolute", inset: "-4px -12px" }}
              >
                <path
                  d="M50,10 C 80,15 95,40 85,75 C 75,100 30,105 10,75 C -10,40 15,10 50,5 C 65,3 85,10 90,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                  style={{ filter: "url(#marker-texture)" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
