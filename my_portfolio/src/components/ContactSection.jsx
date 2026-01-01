import { motion, useReducedMotion } from "framer-motion";

export default function ContactSection() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section id="contact" className="relative bg-[#0B1020] px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />


      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h2>
          <p className="mt-4 text-white/70">
            Open to entry level software development, web development, and data focused roles.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:bnsl.rohan@gmail.com"
              className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-[#070A12] transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/rohanbnsl"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-14 text-xs text-white/45">
            © {new Date().getFullYear()} Rohan Bansal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
