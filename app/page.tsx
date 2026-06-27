"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import SVGDefs from "@/components/SVGDefs";
import BackgroundEffects from "@/components/BackgroundEffects";
import MainBreaker from "@/components/MainBreaker";
import Header from "@/components/Header";
import CaseFileCards from "@/components/CaseFileCards";
import ProjectsList from "@/components/ProjectsList";
import ContactSection from "@/components/ContactSection";
import SmokeParticles from "@/components/SmokeParticles";
import FooterTicker from "@/components/FooterTicker";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightsOn, setLightsOn] = useState(true);
  const [mouse, setMouse] = useState({ x: -999, y: -999 });
  const flashlightRef = useRef<HTMLDivElement>(null);

  // Dynamic shadow tracking based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Paper shadow
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = ((e.clientX - cx) / cx) * 8;
      const dy = ((e.clientY - cy) / cy) * 8;
      document.documentElement.style.setProperty("--shadow-x", `${dx}px`);
      document.documentElement.style.setProperty("--shadow-y", `${Math.abs(dy) + 5}px`);

      // Flashlight position — use requestAnimationFrame for smoothness
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update flashlight overlay gradient directly via DOM for max perf
  useEffect(() => {
    if (!flashlightRef.current) return;
    if (!lightsOn) {
      flashlightRef.current.style.background = `
        radial-gradient(
          circle 230px at ${mouse.x}px ${mouse.y}px,
          rgba(255, 220, 140, 0.30) 0%,
          rgba(200, 160, 80, 0.12) 60%,
          rgba(0, 0, 0, 0.97) 100%
        )
      `;
    }
  }, [mouse, lightsOn]);

  const handleToggle = useCallback(() => {
    setLightsOn((prev) => !prev);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen font-sans relative overflow-x-clip transition-colors duration-1000 bg-[#8c6b4a]"
      style={{ "--shadow-x": "0px", "--shadow-y": "5px" } as React.CSSProperties}
    >
      {/* Global SVG defs */}
      <SVGDefs />

      {/* Background layers */}
      <BackgroundEffects />

      {/* ── BLACKOUT / FLASHLIGHT OVERLAY ── */}
      <div
        ref={flashlightRef}
        className="fixed inset-0 pointer-events-none z-[9980] transition-opacity duration-700"
        style={{
          opacity: lightsOn ? 0 : 1,
          background: lightsOn
            ? "transparent"
            : `radial-gradient(
                circle 230px at ${mouse.x}px ${mouse.y}px,
                rgba(255, 220, 140, 0.30) 0%,
                rgba(200, 160, 80, 0.12) 60%,
                rgba(0, 0, 0, 0.97) 100%
              )`,
        }}
      />

      {/* Extra full-black layer that fades in behind flashlight for dramatic effect */}
      <div
        className="fixed inset-0 pointer-events-none z-[9970] bg-black transition-opacity duration-700"
        style={{ opacity: lightsOn ? 0 : 0.92 }}
      />

      {/* Fixed UI — always on top of blackout */}
      <MainBreaker isOn={lightsOn} onToggle={handleToggle} />

      {/* SVG wire overlay (decorative) */}
      <div className="absolute inset-0 pointer-events-none z-[55] overflow-visible" style={{ minHeight: "100vh" }}>
        <svg className="w-full h-full overflow-visible" />
      </div>

      {/* Main content */}
      <div className="px-4 md:px-16 pt-16 lg:pt-24 pb-16 text-[#111]">
        <Header />
        <main className="max-w-[1250px] 2xl:max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 relative z-30 font-serif px-4 md:px-8">
          <CaseFileCards />
          <ProjectsList />
        </main>
      </div>

      <ContactSection />
      <SmokeParticles />
      <FooterTicker />
    </div>
  );
}
