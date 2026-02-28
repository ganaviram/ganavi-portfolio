import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Experience is
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              responsibility earned.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            From intern to trusted engineer —  
            my journey has been shaped by systems where failure is not an option.
          </p>

          <p className="mt-10 italic text-white/40">
            “Production is the best teacher.”
          </p>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

        {/* KFINTECH — INTERN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-24 md:pr-[55%]"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition">
            <h3 className="text-2xl font-semibold">
              KFintech Pvt Ltd
            </h3>

            <p className="mt-1 text-white/60">
              Software Engineer Intern · Aug 2023 – Jan 2024
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              This phase was about learning how real systems behave.
              I worked close to production environments, gaining exposure
              to infrastructure, SRE practices, data platforms,
              and ETL automation.
            </p>

            <p className="mt-4 text-white/60 italic">
              I learned to respect failure modes, observability,
              and the cost of mistakes in live systems.
            </p>
          </div>
        </motion.div>

        {/* KFINTECH — FULL TIME */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-24 md:pl-[55%]"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition">
            <h3 className="text-2xl font-semibold">
              KFintech Pvt Ltd
            </h3>

            <p className="mt-1 text-white/60">
              Software Engineer · Feb 2024 – Nov 2025
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              As a full-time engineer, my role expanded from execution
              to ownership. I worked across DevOps, cloud infrastructure,
              CI/CD automation, data platform engineering,
              networking, and security.
            </p>

            <ul className="mt-6 space-y-3 text-white/65">
              <li>• Owned and automated cloud-native CI/CD pipelines</li>
              <li>• Worked as AWS cloud administrator and DevOps engineer</li>
              <li>• Built and supported large-scale data platforms and ETL systems</li>
              <li>• Designed secure networking foundations with best practices</li>
              <li>• Used Python and Scala for automation and data workflows</li>
              <li>• Handled client-facing responsibilities and delivery pressure</li>
            </ul>

            <p className="mt-6 text-white/60 italic">
              Projects included data lakes, Quest, Klock, and Finstack —
              systems where reliability and correctness mattered deeply.
            </p>
          </div>
        </motion.div>

        {/* ALKIRA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-24 md:pr-[55%]"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition">
            <h3 className="text-2xl font-semibold">
              Alkira Inc
            </h3>

            <p className="mt-1 text-white/60">
              Software Engineer · Nov 2025 – Present
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              At Alkira, I work at a higher bar of scale and reliability.
              My responsibilities span DevOps, SRE, data platforms,
              automation, and networking — contributing to systems
              designed for resilience and growth.
            </p>

            <p className="mt-4 text-white/60 italic">
              This role continues to refine my judgment,
              deepen my ownership mindset,
              and strengthen my systems thinking.
            </p>
          </div>
        </motion.div>
      </section>

      {/* DOMAINS */}
      <section className="py-32 bg-white/5 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Domains of Impact
          </h2>

          <p className="text-center text-white/70 max-w-3xl mx-auto mb-12">
            I don’t work in silos.
            I operate across domains with a systems-first mindset.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "DevOps & CI/CD",
              "Site Reliability Engineering",
              "Data Platform Engineering (SDE)",
              "AWS Cloud Infrastructure",
              "Networking & Security",
              "Automation (Python & Scala)",
              "Client-Facing Engineering",
            ].map((d) => (
              <span
                key={d}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10
                           text-white/70 hover:border-indigo-400/40 transition"
              >
                {d}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* HOW I OPERATE */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10">
            How I Operate
          </h2>

          <ul className="space-y-5 text-white/70">
            <li>• Calm and structured during incidents</li>
            <li>• Root-cause analysis over surface fixes</li>
            <li>• Security-first and reliability-first thinking</li>
            <li>• Clear communication with stakeholders and clients</li>
            <li>• Long-term system health over short-term gains</li>
          </ul>
        </motion.div>
      </section>

      {/* CLOSING */}
      <section className="py-40 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Still learning. Now with context.
          </h2>

          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Every role increased the responsibility I could carry.
            I continue to grow with discipline, curiosity, and intent.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full
                      bg-gradient-to-r from-indigo-500 to-pink-500
                      text-white font-medium
                      hover:scale-105 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
                      transition"
          >
            Let’s talk
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
