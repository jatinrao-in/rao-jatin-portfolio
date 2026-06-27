import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  period: string;
  url: string;
  description: string[];
  tech: string;
  image: string;
  techClasses: string[];
}

function PaperPin() {
  return (
    <div className="absolute -top-6 left-6 z-40">
      <svg width="32" height="48" viewBox="0 0 24 60" fill="none">
        <path d="M12 2C8 2 6 5 6 10V40C6 47 10 52 16 52C22 52 26 47 26 40V12" stroke="url(#silver-grad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 12V40C16 44 14 46 12 46C10 46 8 44 8 40V14" stroke="url(#silver-grad)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const dotClasses = project.techClasses.map((c) => `target-dot-${c}`).join(" ");

  return (
    <div className={`relative transition-all duration-500 mb-20 group`}>
      {/* Red dot indicator */}
      <div className={`absolute -left-8 top-6 w-3 h-3 bg-red-600 rounded-full border border-red-900 shadow-sm z-40 transition-opacity duration-300 ${dotClasses} opacity-20`} />

      {/* Project title + log */}
      <div className="mb-4 pl-0">
        <h3 className="text-3xl md:text-4xl font-black font-serif uppercase tracking-tight mb-2 underline decoration-2 underline-offset-4 pointer-events-none">
          {project.title}
        </h3>
        <div className="font-mono text-xs uppercase tracking-widest text-[#111]/70 mb-4 bg-yellow-100 p-2 w-fit border border-yellow-300 shadow-sm rotate-1">
          Logged: {project.period}
          <br />
          Node:{" "}
          <Link href={project.url} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800 hover:underline cursor-crosshair inline-block">
            {project.url.replace("https://", "")}
          </Link>
        </div>
      </div>

      {/* 2-col grid: bullets + polaroid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Bullets */}
        <div className="xl:col-span-6">
          <ul className="space-y-4 text-[16px] font-serif leading-[1.6] opacity-90 pl-4 border-l-[3px] border-red-700 pointer-events-none">
            {project.description.map((line, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[20px] top-[2px] opacity-100 text-red-700">-</span>
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-4 font-mono text-xs uppercase tracking-widest opacity-60">
            Tech: {project.tech}
          </div>
        </div>

        {/* Polaroid image */}
        <div className="xl:col-span-6 relative mt-6 xl:mt-0">
          <div className="bg-[#f4f1ea] border border-gray-300 p-3 pt-4 pb-12 shadow-paper rotate-3 group-hover:rotate-0 group-hover:scale-[1.05] group-hover:z-50 transition-all duration-500 w-full ml-auto relative">
            <PaperPin />
            <div className="w-full aspect-[4/3] border border-gray-400 bg-[#e8e4db] overflow-hidden relative shadow-inner">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top grayscale contrast-125 mix-blend-multiply group-hover:grayscale-0 group-hover:contrast-100 group-hover:mix-blend-normal transition-all duration-[1s]"
              />
            </div>
            <div
              className="absolute bottom-1.5 left-0 right-0 text-center text-[1.6rem] text-black/90 font-bold"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              {project.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    title: "Saya CRM Software",
    period: "2025 – Present",
    url: "http://www.sayacrm.in",
    description: [
      "Designed and built custom CRM software solution for automating client relationships and workflows.",
      "Engineered real-time dashboard systems, automated reports, and automated notifications using WhatsApp API.",
      "Main corporate catalog and engineers database accessible at: https://sayaengineers.com/."
    ],
    tech: "Next.js, Node.js, MongoDB, WhatsApp Automation, Vercel",
    image: "/saya.png",
    techClasses: ["Nextjs", "Nodejs", "MongoDB", "Vercel"],
  },
  {
    title: "Wow Bakers Franchise",
    period: "2025",
    url: "http://www.wowbakers.co.in",
    description: [
      "Engineered frenchies/bakery showcase website highlighting special confectionery menus and catalogs.",
      "Implemented interactive booking forms for franchise requests and custom cake orders.",
      "Crafted pixel-perfect layout featuring fluid animations and responsive mobile views."
    ],
    tech: "React.js, Tailwind CSS, Responsive Design, Vercel",
    image: "/wowbakers.png",
    techClasses: ["Reactjs", "TailwindCSS", "Vercel"],
  },
  {
    title: "RaoJatin Shop E-commerce",
    period: "2026",
    url: "https://raojatin.shop",
    description: [
      "Developed a full-fledged custom e-commerce solution with dynamic product listings and sorting.",
      "Implemented local storage cart persistence, secure checkout flow, and custom payment handling.",
      "Fully responsive brutalist-designed product page optimized for fast load times and conversions."
    ],
    tech: "Next.js, Tailwind CSS, Node.js, Express.js, MongoDB",
    image: "/raojatinshop.png",
    techClasses: ["Nextjs", "TailwindCSS", "Nodejs", "MongoDB"],
  },
  {
    title: "AK Reality Properties",
    period: "2025",
    url: "http://ak-reality.in",
    description: [
      "Created dynamic real estate property dealer web app showcasing available land, homes, and listings.",
      "Built advanced search filters (price range, location, type) with instantly updating lists.",
      "Integrated interactive agent booking, contact panels, and secure listing administration back-office."
    ],
    tech: "React.js, Tailwind CSS, Firebase, Express.js, PostgreSQL",
    image: "/akreality.png",
    techClasses: ["Reactjs", "TailwindCSS", "Firebase", "PostgreSQL"],
  },
];

export default function ProjectsList() {
  return (
    <div className="lg:col-span-7 mt-8 lg:mt-32 pb-48 max-w-[800px] mx-auto lg:mx-0 space-y-12 lg:border-l-[3px] border-[#111]/30 lg:pl-16 relative">
      <section>
        {/* Section header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative z-10 shrink-0">
            <div className="bg-yellow-400 text-black font-serif font-black text-xl w-8 h-10 flex items-end justify-center pb-1 shadow-[2px_2px_4px_rgba(0,0,0,0.3)] border border-yellow-500 clip-marker -rotate-[3deg]">
              C
            </div>
            <div className="absolute top-0 left-1/2 w-4 h-1 bg-white/40 -translate-x-1/2 z-20" />
          </div>
          <h2 className="font-mono text-xl font-bold uppercase tracking-widest border-b-[2px] border-[#111] pb-1 w-full">
            Linked Evidence Cases
          </h2>
        </div>

        {/* Projects */}
        <div className="mt-8 space-y-28">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
