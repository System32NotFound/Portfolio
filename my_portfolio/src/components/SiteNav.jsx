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
      <div className="mx-auto max-w-6xl px-6 pt-5">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white backdrop-blur"
        >
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-white/90 hover:text-white"
          >
            RB
          </a>

          <ul className="flex items-center gap-1">
            {SECTIONS.map((s) => {
              const isActive = activeId === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={[
                      "rounded-xl px-3 py-2 text-xs font-medium transition",
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
        </nav>
      </div>
    </div>
  );
}
