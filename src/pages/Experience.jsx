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
    <main className="relative overflow-hidden bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Learning through
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              real-world exposure.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            As a fresher, my experience is built on internships,
            academic projects, and continuous skill development.
          </p>

          <p className="mt-10 italic text-white/40">
            “Every experience is a step toward mastery.”
          </p>
        </motion.div>
      </section>

      {/* INTERNSHIP */}
      <section className="relative max-w-5xl mx-auto px-6 py-32">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition">
            <h3 className="text-2xl font-semibold">
              Dotch Endeavours Pvt Ltd
            </h3>

            <p className="mt-1 text-white/60">
              Python AI/ML Intern · 6 Weeks Training
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              Completed internship training focused on Python programming
              and AI/ML fundamentals. Gained practical exposure to writing
              clean code, understanding basic machine learning concepts,
              and working in a structured development environment.
            </p>

            <ul className="mt-6 space-y-3 text-white/65">
              <li>• Strengthened Python programming fundamentals</li>
              <li>• Learned basics of AI/ML concepts and workflows</li>
              <li>• Worked on small problem-solving tasks and practice modules</li>
              <li>• Improved debugging and logical thinking skills</li>
              <li>• Collaborated with mentors and peers during training</li>
            </ul>

            <p className="mt-6 text-white/60 italic">
              This internship gave me confidence to apply academic knowledge
              in a practical environment.
            </p>
          </div>
        </motion.div>

        {/* ACADEMIC PROJECT EXPERIENCE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition">
            <h3 className="text-2xl font-semibold">
              Academic Project Experience
            </h3>

            <p className="mt-6 text-white/70 leading-relaxed">
              During my MCA and BCA programs, I worked on multiple academic
              projects that strengthened my understanding of software
              development and database management.
            </p>

            <ul className="mt-6 space-y-3 text-white/65">
              <li>• Developed a System Analyzer web application</li>
              <li>• Built an Academic Management Information System</li>
              <li>• Designed a Cars & Accessories Sales Management system</li>
              <li>• Implemented database integration using MySQL</li>
              <li>• Created user-friendly interfaces using HTML, CSS, and JavaScript</li>
            </ul>

            <p className="mt-6 text-white/60 italic">
              These projects helped me understand end-to-end application
              development from design to implementation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SKILLS GAINED */}
      <section className="py-32 bg-white/5 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Skills Gained Through Experience
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Python Programming",
              "MySQL Database Management",
              "HTML, CSS, JavaScript",
              "Problem Solving",
              "Logical Thinking",
              "Team Collaboration",
              "Time Management",
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

      {/* HOW I GROW */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10">
            How I Continue to Grow
          </h2>

          <ul className="space-y-5 text-white/70">
            <li>• Practicing coding regularly to improve logic</li>
            <li>• Learning new technologies through online courses</li>
            <li>• Building small projects to strengthen fundamentals</li>
            <li>• Improving communication and teamwork skills</li>
            <li>• Staying updated with industry trends</li>
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
            Ready to begin my professional journey.
          </h2>

          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            I am actively seeking an entry-level opportunity where I can
            contribute, learn from experienced professionals, and grow
            as a software developer.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full
                      bg-gradient-to-r from-indigo-500 to-pink-500
                      text-white font-medium
                      hover:scale-105 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
                      transition"
          >
            Let’s Connect
          </Link>
        </motion.div>
      </section>
    </main>
  );
}