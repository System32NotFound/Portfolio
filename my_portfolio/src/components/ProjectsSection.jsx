import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#0F1F2B] to-[#102F28] px-6 py-32 text-slate-100"
    >
      {/* subtle glow, contained */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute -right-64 top-[40%] h-[520px] w-[520px] rounded-full bg-indigo-300/8 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Selected work that shows how I think, build, and ship.
          </p>
        </motion.div>

        <div className="mt-16 space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.9,
                delay: reduceMotion ? 0 : index * 0.03,
                ease,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            >
              {/* small internal glow, doesn't overflow */}
              <div className="pointer-events-none absolute -top-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-emerald-300/10 blur-3xl opacity-60 transition-opacity group-hover:opacity-90" />

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-medium tracking-wide text-slate-400">
                    {project.category} · {project.year}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">
                    {project.description}
                  </p>
                </div>

                {project.highlights?.length ? (
                  <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="flex flex-wrap gap-3">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                      Live
                    </a>
                  ) : null}

                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/25 bg-white/5 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
