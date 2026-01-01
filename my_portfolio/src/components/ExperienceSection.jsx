import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "../data/experience";

export default function ExperienceSection() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section id="experience" className="relative bg-[#0B1020] px-6 py-32 text-white">
      {/* soft background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-24 h-[520px] w-[520px] rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Roles that shaped how I collaborate, build, and ship.
          </p>
        </motion.div>

        <div className="mt-16">
          {/* timeline spine */}
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-white/12 sm:left-5" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.id}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{
                    duration: 0.9,
                    delay: reduceMotion ? 0 : index * 0.04,
                    ease,
                  }}
                  className="relative pl-12 sm:pl-14"
                >
                  {/* timeline dot */}
                  <div className="absolute left-[11px] top-9 h-3 w-3 rounded-full bg-white/60 ring-4 ring-white/10 sm:left-[15px]" />

                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                    {/* soft glow */}
                    <div className="pointer-events-none absolute -top-40 right-[-160px] h-[520px] w-[520px] rounded-full bg-emerald-300/10 blur-3xl transition-opacity group-hover:opacity-80" />

                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="text-xs font-medium tracking-wide text-white/55">
                          {exp.period} · {exp.location}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                          {exp.role}
                        </h3>
                        <p className="mt-2 text-white/70">{exp.company}</p>
                      </div>

                      {exp.summary ? (
                        <p className="text-lg leading-relaxed text-white/80">
                          {exp.summary}
                        </p>
                      ) : null}

                      {exp.bullets?.length ? (
                        <ul className="grid gap-2 text-white/70 sm:grid-cols-2">
                          {exp.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-white/40" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {exp.tech?.length ? (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
