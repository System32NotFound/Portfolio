import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const name = "Rohan Bansal";

  const baseEase = [0.22, 1, 0.36, 1];
  const perCharDelay = reduceMotion ? 0 : 0.08;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070A12] text-white">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute top-24 -left-32 h-[520px] w-[520px] rounded-full bg-fuchsia-400/20 blur-3xl" />

        {/* This one was most likely causing horizontal overflow on small screens */}
        <div className="absolute -bottom-40 right-0 h-[560px] w-[560px] translate-x-1/3 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: baseEase }}
            className="text-sm font-medium tracking-wide text-white/70"
          >
            Entry level software developer with experience across web development,
            data analysis, and production ready projects.
          </motion.p>

          {/* Name: letter reveal */}
          <h1
            aria-label={name}
            className="mt-4 flex flex-wrap font-semibold leading-[0.95] tracking-tight
                       text-[clamp(44px,12vw,124px)] sm:text-[clamp(64px,9vw,124px)]"
            style={{ overflowWrap: "anywhere" }}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: i * perCharDelay,
                  ease: baseEase,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Intro appears after name */}
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : name.length * perCharDelay + 0.35,
              ease: baseEase,
            }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Experience building production ready web applications, data dashboards, and applied machine learning projects.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : name.length * perCharDelay + 1.0,
              ease: baseEase,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-[#070A12] shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              View Projects
            </a>

            <a
              href="/resume-rohan-bansal.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/25 px-7 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Contact
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : name.length * perCharDelay + 1.6,
            }}
            className="mt-16 flex items-center gap-3 text-xs text-white/60"
          >
            <span>Scroll</span>
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? {} : { y: [0, 6, 0] }}
              transition={
                reduceMotion
                  ? {}
                  : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
              }
              className="inline-block"
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
