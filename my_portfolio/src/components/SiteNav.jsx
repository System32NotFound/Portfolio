import useActiveSection from "../hooks/useActiveSection";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SiteNav() {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <div className="fixed left-0 right-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-white backdrop-blur"
        >
          <a
            href="#top"
            className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold tracking-tight text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            RB
          </a>

          {/* Mobile safe: horizontal scroll, no clipping */}
          <div className="-mx-1 flex-1 overflow-x-auto px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max items-center gap-1">
              {SECTIONS.map((s) => {
                const isActive = activeId === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={[
                        "whitespace-nowrap rounded-xl px-3 py-2 text-xs font-medium transition",
                        "focus:outline-none focus:ring-2 focus:ring-white/30",
                        isActive
                          ? "bg-white/12 text-white"
                          : "text-white/70 hover:bg-white/8 hover:text-white",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
