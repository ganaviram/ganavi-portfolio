import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";

const section = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <Page>
      <div className="relative z-10 bg-black text-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section
          onMouseMove={handleMouseMove}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Cursor Glow */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${mouseX}px ${mouseY}px,
                  rgba(99,102,241,0.25),
                  transparent 60%
                )
              `,
            }}
          />

          {/* Floating Orbs */}
          <motion.div
            className="pointer-events-none absolute top-32 left-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-32 right-20 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative z-10 max-w-4xl text-center px-6"
          >
            <motion.h1
              whileHover={{ scale: 1.03 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            >
              I build systems
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                that stay calm under pressure.
              </span>
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Engineer by profession. Thinker by nature.  
              Drawn to complexity, clarity, and quiet reliability.
            </p>

            <p className="mt-10 italic text-white/50">
              “Poetry in systems is when nothing breaks.”
            </p>
          </motion.div>
        </section>

        {/* ================= STORY ================= */}
        <section className="py-32 px-6 max-w-5xl mx-auto">
          <motion.div
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-8">My Story</h2>

            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                My journey into engineering didn’t begin with ambition.
                It began with curiosity — a desire to understand how systems behave,
                how they fail, and how they recover.
              </p>

              <p>
                Over time, curiosity turned into responsibility.
                Production systems. Real users. Real consequences.
                That’s where I learned that the best engineering is quiet.
              </p>

              <p>
                Today, I focus on building systems that scale gracefully,
                recover predictably, and respect the humans who depend on them.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= PHILOSOPHY ================= */}
        <section className="py-32 bg-white/5 px-6">
          <motion.div
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-semibold mb-14 text-center">
              How I Think
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Reliability over hype",
                "Simplicity beats cleverness",
                "Automation respects time",
                "Observability before assumptions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black/40 border border-white/10 p-6
                             hover:border-indigo-400/40 hover:shadow-lg
                             transition-all duration-300"
                >
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let’s build something meaningful.
            </h2>

            <p className="text-white/60 mb-10">
              Open to thoughtful conversations and ambitious systems.
            </p>

            {/* IMPORTANT: use Link, not <a> */}
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full
                         bg-gradient-to-r from-indigo-500 to-pink-500
                         text-white font-medium hover:opacity-90 transition"
            >
              Get in touch
            </Link>
          </motion.div>
        </section>

      </div>
    </Page>
  );
}
