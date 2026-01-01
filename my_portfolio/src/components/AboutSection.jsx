import { motion, useReducedMotion } from "framer-motion";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      id="about"
      className="relative bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            I’m a fresh computer science graduate based in Perth, seeking an entry level software development role.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            I’ve worked across web development and data analysis, building React applications, dashboards, and analytical tooling. I care about writing clear code, shipping practical solutions, and understanding the systems I work on.

          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/85">
              Software Development
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/85">
              Data Analysis
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/85">
              Problem Solving
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/85">
              Clean Code
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
