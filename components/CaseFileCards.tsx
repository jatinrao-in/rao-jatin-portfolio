"use client";
import { useState } from "react";

type Tab = "SUMMARY" | "BACKGROUND" | "ARSENAL";

function SectionMarker({ letter }: { letter: string }) {
  return (
    <div className="relative z-10 shrink-0">
      <div className="bg-yellow-400 text-black font-serif font-black text-xl w-8 h-10 flex items-end justify-center pb-1 shadow-[2px_2px_4px_rgba(0,0,0,0.3)] border border-yellow-500 clip-marker -rotate-[3deg]">
        {letter}
      </div>
      <div className="absolute top-0 left-1/2 w-4 h-1 bg-white/40 -translate-x-1/2 z-20" />
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block mx-0.5">
      <span className="absolute inset-y-0 inset-x-[-6px] bg-[#e8f118] opacity-60 mix-blend-multiply rotate-[-1deg] scale-105 skew-x-12 rounded-sm pointer-events-none" style={{ filter: "blur(0.5px)" }} />
      <span className="absolute inset-y-1 inset-x-[-4px] bg-[#dce123] opacity-40 mix-blend-multiply rotate-[1deg] pointer-events-none" />
      <span className="relative z-10 font-bold">{children}</span>
    </span>
  );
}

function CardShell({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      className="absolute inset-x-0 top-0 border p-6 md:p-8 min-h-[550px] overflow-hidden shadow-heavy-paper transform-origin-top bg-[#ece9e0] border-[#ccc]"
      style={style}
    >
      {/* Corner shadows */}
      <div className="absolute -top-4 -left-8 w-24 h-8 bg-[#111]/10 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rotate-[-35deg] mix-blend-multiply z-50 border border-[#111]/5" />
      <div className="absolute bottom-12 -right-8 w-24 h-8 bg-[#111]/10 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rotate-[45deg] mix-blend-multiply z-50 border border-[#111]/5" />
      {/* Coffee rings */}
      <div className="absolute top-[30%] -right-8 w-40 h-40 border-[8px] border-[#4e342e]/10 rounded-full mix-blend-multiply opacity-20 pointer-events-none rotate-12" />
      <div className="absolute top-[33%] -right-4 w-32 h-32 border-[4px] border-[#4e342e]/10 rounded-full mix-blend-multiply opacity-15 pointer-events-none -rotate-12" />
      {/* Binding hole */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 border border-gray-400 rounded-full shadow-inner bg-black/5 opacity-50 z-50" />
      {children}
    </div>
  );
}

function SummaryCard() {
  return (
    <CardShell style={{ zIndex: 50, transform: "rotate(-1deg)" }}>
      <section className="h-full flex flex-col pt-2 md:px-4">
        <div className="flex items-center space-x-4 mb-6">
          <SectionMarker letter="I" />
          <h2 className="font-mono text-xl font-bold uppercase tracking-widest border-b-[2px] border-[#111] pb-1 w-full">
            Investigator&apos;s Summary
          </h2>
        </div>

        {/* Bureau header */}
        <div className="flex justify-between border-b-2 border-red-800/80 pb-2 mb-6 mt-4 relative">
          <div className="absolute -top-3 -right-3 z-40 scale-75 rotate-[30deg]">
            <svg width="32" height="48" viewBox="0 0 24 60" fill="none">
              <path d="M12 2C8 2 6 5 6 10V40C6 47 10 52 16 52C22 52 26 47 26 40V12" stroke="url(#silver-grad)" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 12V40C16 44 14 46 12 46C10 46 8 44 8 40V14" stroke="url(#silver-grad)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-800">Bureau of Investigations</span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">ID: #RJ-001</span>
        </div>

        {/* Summary text */}
        <p className="text-[17px] md:text-[18px] xl:text-[19px] leading-[1.8] font-serif mb-5 text-[#222]">
          Subject is a highly capable{" "}
          <Highlight>freelance web developer</Highlight>{" "}
          focused on building premium, high-performance web applications. Known to{" "}
          <Highlight>turn visitors into customers</Highlight>{" "}
          with pixel-perfect design and solid engineering.
        </p>

        {/* Footer: Signature + fingerprint */}
        <div className="mt-12 border-t border-dashed border-[#111]/30 pt-8 flex justify-between items-center relative">
          {/* CLASSIFIED stamp */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto opacity-20 hover:opacity-100 transition-opacity duration-500 group/stamp">
            <div className="w-28 h-28 border-4 border-red-700 rounded-full flex items-center justify-center rotate-[-15deg] relative">
              <div className="absolute inset-2 border-2 border-red-700/50 rounded-full" />
              <span className="text-red-700 font-bold font-mono text-[15px] text-center tracking-widest uppercase group-hover/stamp:text-red-600 transition-colors">
                CLASSIFIED<br />DATA
              </span>
            </div>
          </div>
          {/* Agent signature */}
          <div
            className="font-bold text-blue-800 text-5xl -rotate-6 opacity-90 drop-shadow-sm ml-4"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Agent &apos;J&apos;
          </div>
          {/* Fingerprint authorized */}
          <div className="flex items-center gap-3">
            <div className="font-mono text-[11px] tracking-widest text-[#111]/50 uppercase text-right leading-[1.3]">
              Fingerprint<br />Authorized
            </div>
            <svg width="30" height="40" viewBox="0 0 40 50" fill="none" className="opacity-60 grayscale">
              <path d="M20 5C13 5 8 10 8 18C8 20 8.5 22 9 24M20 5C27 5 32 10 32 18C32 20 31.5 22 31 24M20 5V8M12 18C12 12 16 9 20 9C24 9 28 12 28 18M15 28C14 24 14 20 14 18M25 28C26 24 26 20 26 18M20 15V22M17 18H23M20 35C15 35 12 32 12 28M20 35C25 35 28 32 28 28M20 35V42M14 40C12 38 10 35 10 32M26 40C28 38 30 35 30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15 45Q20 48 25 45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>
    </CardShell>
  );
}

function BackgroundCard() {
  return (
    <CardShell style={{ zIndex: 11, transform: "translateX(12px) translateY(15px) rotate(4deg)" }}>
      <section className="relative clear-both">
        <div className="flex items-center space-x-4 mb-6">
          <SectionMarker letter="A" />
          <h2 className="font-mono text-xl font-bold uppercase tracking-widest border-b-[2px] border-[#111] pb-1 w-full">
            Background
          </h2>
        </div>

        {/* Experience */}
        <div className="mb-8 mt-4">
          <h3 className="font-bold text-[18px]">Freelance Developer</h3>
          <p className="opacity-90 font-mono text-[13px] uppercase mt-1">
            Web &amp; Software Dev [2024 – Present]
          </p>
          <div className="mt-3 text-[16px] leading-[1.6] pl-4 border-l-2 border-[#111]">
            Subject was deployed to build and deliver{" "}
            <span className="relative inline-block mx-1 group font-mono font-bold text-[#111] overflow-hidden">
              <span className="relative z-10 px-1 transition-all duration-700 delay-100 group-hover:text-red-900 group-hover:drop-shadow-md">
                10+ client projects
              </span>
              <span className="absolute inset-x-0 inset-y-1 mx-[1px] bg-[#222] group-hover:bg-[#222]/10 group-hover:-translate-x-full transition-transform duration-[1.2s] ease-out z-20 pointer-events-none shadow-sm" style={{ clipPath: "polygon(1% 4%, 98% 0%, 100% 96%, 3% 98%)", mixBlendMode: "multiply" }} />
            </span>
            including enterprise ERP systems, luxury web apps, and SaaS platforms.
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4 pt-4 border-t border-[#111]/20">
          <div className="cursor-crosshair group hover:bg-yellow-200/30 p-1 -mx-1 rounded relative">
            <h3 className="font-bold text-[16px] mb-1 w-2/3">IIT Madras</h3>
            <p className="opacity-80 font-mono text-xs tracking-widest uppercase">
              BS Data Science [2024 – Present]
            </p>
            <div className="hidden group-hover:flex absolute right-1 md:right-[-10px] top-[-10px] flex-row-reverse items-center justify-end text-blue-800 text-[1rem] md:text-[1.2rem] w-[200px] md:w-[240px] pointer-events-none mix-blend-multiply rotate-[-5deg] z-50 leading-[1.1]"
              style={{ fontFamily: "var(--font-caveat), cursive" }}>
              <span className="w-full">Subject mastered data-driven architecture.</span>
              <svg width="40" height="20" viewBox="0 0 50 20" className="opacity-50 mr-1 md:mr-2 shrink-0">
                <path d="M40 10 L10 10 L20 0 M10 10 L20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="cursor-crosshair group hover:bg-yellow-200/30 p-1 -mx-1 rounded relative">
            <h3 className="font-bold text-[16px] mb-1 w-2/3">Rewari, Haryana</h3>
            <p className="opacity-80 font-mono text-xs tracking-widest uppercase">
              Based Here / Operates Globally
            </p>
            <div className="hidden group-hover:flex absolute right-1 md:right-[-15px] top-[-12px] flex-row-reverse items-center justify-end text-blue-800 text-[1rem] md:text-[1.2rem] w-[200px] md:w-[240px] pointer-events-none mix-blend-multiply rotate-[-3deg] z-50 leading-[1.1]"
              style={{ fontFamily: "var(--font-caveat), cursive" }}>
              <span className="w-full">Remote-first, client worldwide.</span>
              <svg width="40" height="20" viewBox="0 0 50 20" className="opacity-50 mr-1 md:mr-2 shrink-0">
                <path d="M40 10 L10 10 L20 0 M10 10 L20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </CardShell>
  );
}

function ArsenalCard() {
  const skills = {
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "GSAP"],
    Backend: ["Node.js", "Express.js", "Python"],
    Database: ["MongoDB", "PostgreSQL", "Firebase"],
    Tools: ["Git", "Vercel", "Figma", "Docker", "MSG91 API"],
  };

  return (
    <CardShell style={{ zIndex: 12, transform: "translateX(24px) translateY(30px) rotate(8deg)" }}>
      <section className="h-full text-[#111]">
        <div className="flex items-center space-x-4 mb-6">
          <SectionMarker letter="B" />
          <h2 className="font-mono text-xl font-bold uppercase tracking-widest border-b-[2px] border-[#111] pb-1 w-full">
            Arsenal &amp; Tooling
          </h2>
        </div>
        <p className="text-sm font-mono text-blue-800 mb-6 bg-blue-100/50 p-2 inline-block border border-blue-200 shadow-sm">
          *Hover items to trace physical coordinates.*
        </p>
        <ul className="space-y-6 text-[16px]">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="leading-relaxed border-b border-[#111]/10 pb-3 last:border-0">
              <strong className="block font-mono text-[13px] uppercase text-red-800 mb-1 tracking-widest">
                {category}:
              </strong>
              {items.map((skill, i) => (
                <span key={skill}>
                  <span className={`relative inline-block border-b border-[#111]/30 hover:border-[#111] hover:bg-yellow-200/40 transition-colors z-30 font-bold skill-node-${skill.replace(/[^a-zA-Z]/g, "")}`}>
                    {skill}
                  </span>
                  {i < items.length - 1 && <span>, </span>}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </CardShell>
  );
}

export default function CaseFileCards() {
  const [activeTab, setActiveTab] = useState<Tab>("SUMMARY");

  const tabs: Tab[] = ["SUMMARY", "BACKGROUND", "ARSENAL"];

  const zMap: Record<Tab, Record<Tab, number>> = {
    SUMMARY: { SUMMARY: 50, BACKGROUND: 11, ARSENAL: 12 },
    BACKGROUND: { SUMMARY: 11, BACKGROUND: 50, ARSENAL: 12 },
    ARSENAL: { SUMMARY: 11, BACKGROUND: 12, ARSENAL: 50 },
  };

  return (
    <div className="lg:col-span-5 mt-8 lg:mt-32 lg:sticky lg:top-24 h-fit z-[100]">
      <div className="relative h-fit min-h-[600px] w-full">
        {/* Tab nav */}
        <div className="flex space-x-1 absolute -top-10 left-0 z-[60]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 font-mono text-[10px] font-bold uppercase transition-all border border-b-0 rounded-t-sm ${
                activeTab === tab
                  ? "bg-[#ece9e0] text-black border-gray-300 shadow-none z-10 scale-y-110 drop-shadow-[-2px_0px_2px_rgba(0,0,0,0.1)]"
                  : "bg-[#d0cdc2] text-[#555] border-gray-300 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:bg-[#c0bdc2]"
              }`}
              style={{ transformOrigin: "bottom center" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards rendered with dynamic z-index */}
        <div style={{ position: "relative", minHeight: 600 }}>
          <div style={{ zIndex: zMap[activeTab].SUMMARY, position: "absolute", inset: 0 }}>
            <SummaryCard />
          </div>
          <div style={{ zIndex: zMap[activeTab].BACKGROUND, position: "absolute", inset: 0 }}>
            <BackgroundCard />
          </div>
          <div style={{ zIndex: zMap[activeTab].ARSENAL, position: "absolute", inset: 0 }}>
            <ArsenalCard />
          </div>
        </div>
      </div>
    </div>
  );
}
