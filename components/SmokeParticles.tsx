export default function SmokeParticles() {
  return (
    <div className="fixed bottom-0 right-10 pointer-events-none z-[100] drop-shadow-md hidden lg:block">
      <div className="smoke-particle absolute bottom-0 right-10 w-24 h-24" style={{ animationDelay: "0s" }} />
      <div className="smoke-particle absolute bottom-0 right-2 w-32 h-32" style={{ animationDelay: "2.5s" }} />
      <div className="smoke-particle absolute bottom-0 right-16 w-20 h-20" style={{ animationDelay: "5s" }} />
    </div>
  );
}
