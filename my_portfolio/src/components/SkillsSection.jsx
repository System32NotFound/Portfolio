import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section id="skills" className="relative bg-[#0B1020] px-6 py-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
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
            Skills
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Calm, practical tooling. The things I reach for to build and ship.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.section
              key={group.title}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : index * 0.03,
                ease,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>

              <ul className="mt-5 space-y-2 text-white/75">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
