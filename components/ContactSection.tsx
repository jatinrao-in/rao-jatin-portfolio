import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="mt-12 md:mt-24 mb-20 md:mb-32 relative z-[60] mx-4 md:mx-16 max-w-[1200px] 2xl:max-w-[1300px] xl:mx-auto pt-4 md:pt-8 flex flex-col items-center">
      {/* USB evidence prop */}
      <div className="absolute -top-40 md:-top-32 lg:-top-48 right-12 md:right-[25%] lg:right-[28%] z-[100] transition-opacity opacity-100">
        <div className="relative group flex flex-col items-center" tabIndex={0}>
          {/* Evidence tag */}
          <div className="absolute -top-10 -left-6 w-24 h-12 bg-amber-100/90 border border-amber-900/20 shadow-md p-1 font-mono text-[8px] rotate-[-10deg] flex flex-col justify-between z-10 hidden md:flex">
            <div className="flex justify-between border-b border-amber-900/10 pb-1">
              <span>ITEM #001</span>
              <span>RJ_2026</span>
            </div>
            <div className="font-bold text-amber-900/60 leading-none">
              EVIDENCE:<br />DATA_CORE
            </div>
          </div>
          {/* USB drive */}
          <div className="w-14 h-24 md:w-16 md:h-28 bg-zinc-400 rounded-sm shadow-[0_15px_25px_rgba(0,0,0,0.4)] relative border-x border-zinc-500 overflow-hidden z-20">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-6 bg-zinc-300 border border-zinc-400 rounded-t-sm flex items-center justify-around px-1 pt-1">
              <div className="w-1.5 h-2 bg-zinc-500 rounded-sm" />
              <div className="w-1.5 h-2 bg-zinc-500 rounded-sm" />
            </div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full blur-[1px] bg-emerald-500 shadow-[0_0_5px_emerald]" />
            <div className="absolute bottom-3 left-0 right-0 text-center flex flex-col items-center opacity-80 mix-blend-multiply">
              <span className="text-[6px] md:text-[7px] font-mono text-zinc-800 font-black uppercase tracking-tighter leading-[0.8] mb-1">128GB EXTRACT</span>
              <div className="w-6 md:w-8 h-[1px] bg-zinc-600/30 my-0.5" />
              <span className="text-[5px] md:text-[6px] font-mono text-zinc-700">RESUME.PDF</span>
            </div>
          </div>
          {/* Hover label */}
          <span
            className="absolute -right-32 md:-right-40 top-1/2 -translate-y-1/2 text-xl md:text-2xl text-red-700 opacity-0 group-hover:opacity-100 transition-opacity rotate-12 font-bold whitespace-nowrap z-0 pointer-events-none drop-shadow-sm"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Extract Credentials?
          </span>
        </div>
      </div>

      {/* 3 sticky notes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 place-items-center w-full">

        {/* Wanted! */}
        <div className="p-6 md:p-8 shadow-paper w-full max-w-[340px] h-[260px] rotate-[-3deg] hover:rotate-0 transition-transform relative flex flex-col justify-center border bg-[#feff9c] border-yellow-200">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 backdrop-blur-md shadow-[inset_0_0_5px_rgba(255,255,255,0.7)] border border-white/30 rotate-2 z-50" />
          <h4
            className="font-bold text-red-700 text-3xl uppercase tracking-widest mb-4 border-b-2 border-red-700/30 pb-2"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Wanted!
          </h4>
          <p className="font-mono text-[13px] leading-relaxed text-black opacity-90">
            Remote Collaborations.<br />
            Client Projects.<br />
            Open Source Contributions.<br />
            <br />
            Signal active frequencies for immediate deployment.
          </p>
        </div>

        {/* Direct Line */}
        <div className="p-6 md:p-8 shadow-paper w-full max-w-[340px] h-[260px] rotate-[4deg] hover:rotate-0 transition-transform relative flex flex-col justify-center border bg-[#f0f4ff] border-blue-200">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-red-600 shadow-sm border border-red-800 z-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full absolute top-[3px] left-[3px]" />
          </div>
          <h4
            className="font-bold text-3xl uppercase tracking-widest mb-6 text-blue-900"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Direct Line
          </h4>
          <div className="flex flex-col space-y-5 font-mono text-sm text-black">
            <div className="flex items-center space-x-3 relative w-full group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <span className="break-words underline decoration-[0.5px] underline-offset-4 pointer-events-none" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
                info.raojatin@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-3 relative w-full group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <span className="break-words underline decoration-[0.5px] underline-offset-4 pointer-events-none">
                +91 9306018924
              </span>
            </div>
          </div>
        </div>

        {/* Network */}
        <div className="p-6 md:p-8 shadow-paper w-full max-w-[340px] h-[260px] rotate-[-5deg] hover:rotate-0 transition-transform relative flex flex-col justify-center border bg-[#ffe4e4] border-pink-200">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 backdrop-blur-md shadow-[inset_0_0_5px_rgba(255,255,255,0.7)] border border-white/30 rotate-[-4deg] z-50" />
          <h4
            className="font-bold text-3xl uppercase tracking-widest mb-6 text-red-900"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Network
          </h4>
          <div className="flex flex-col space-y-6 font-mono text-[13px] tracking-widest text-black opacity-90">
            <Link href="https://www.linkedin.com/in/jatin-yadav-60653a390" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 flex items-center space-x-3 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="underline underline-offset-4">Rao Jatin</span>
            </Link>
            <Link href="https://github.com/raojatin" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 flex items-center space-x-3 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3 0 4.5-1.5 4.5-5.24 0-2 0-3-1-4.5 1-2 1-3 0-5-2 0-3 1-4.5 2-1.5 0-3 0-4.5-2-1 2-1 3 0 5-1 1.5-1 2.5-1 4.5 0 3.74 1.5 5.24 4.5 5.24a4.8 4.8 0 0 0-1 3.26v4" />
              </svg>
              <span className="underline underline-offset-4">raojatin</span>
            </Link>
            <Link href="https://instagram.com/raojatin.in" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 flex items-center space-x-3 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="2 2 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="underline underline-offset-4">@raojatin.in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
