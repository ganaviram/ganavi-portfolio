import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building strong
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              technical foundations.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            My skills are built around programming fundamentals,
            database management, and web development.
          </p>

          <p className="mt-10 italic text-white/40">
            “Strong basics create confident developers.”
          </p>
        </motion.div>
      </section>

      {/* SKILLS DOMAINS */}
      <section className="max-w-6xl mx-auto px-6 py-32 space-y-24">

        {skillDomains.map((domain, index) => (
          <motion.div
            key={domain.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {domain.title}
              </h2>
              <p className="mt-3 text-white/60 max-w-3xl">
                {domain.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {domain.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full
                             bg-white/5 backdrop-blur
                             border border-white/10
                             text-white/70 text-sm
                             hover:border-indigo-400/40
                             hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]
                             transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* HOW I APPLY SKILLS */}
      <section className="py-32 bg-white/5 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-10">
            How I Apply My Skills
          </h2>

          <ul className="space-y-5 text-white/70">
            <li>• Write clean and readable Python code</li>
            <li>• Design simple and efficient database structures</li>
            <li>• Build basic web interfaces using HTML, CSS, and JavaScript</li>
            <li>• Practice problem-solving regularly</li>
            <li>• Continuously learn new technologies</li>
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
            Always learning. Always improving.
          </h2>

          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            I am committed to strengthening my technical knowledge
            and gaining hands-on experience in real-world development.
          </p>

          <Link
            to="/projects"
            className="inline-block px-8 py-4 rounded-full
                       bg-gradient-to-r from-indigo-500 to-pink-500
                       text-white font-medium hover:opacity-90 transition"
          >
            View My Projects
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

/* ===================== DATA ===================== */

const skillDomains = [
  {
    title: "Programming Languages",
    description:
      "Core programming knowledge developed through academic learning and internship training.",
    skills: [
      "Python",
      "JavaScript (Basics)",
    ],
  },
  {
    title: "Web Development",
    description:
      "Building simple and user-friendly web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Database Management",
    description:
      "Understanding relational databases and basic database operations.",
    skills: [
      "MySQL",
      "SQL Queries",
    ],
  },
  {
    title: "Operating Systems",
    description:
      "Comfortable working with different operating environments.",
    skills: [
      "Windows",
      "Linux (Basics)",
    ],
  },
  {
    title: "AI / ML Fundamentals",
    description:
      "Basic understanding of AI/ML concepts through internship training.",
    skills: [
      "Python for AI/ML",
      "Basic Machine Learning Concepts",
    ],
  },
  {
    title: "Soft Skills",
    description:
      "Professional qualities that support effective teamwork and growth.",
    skills: [
      "Team Collaboration",
      "Communication Skills",
      "Time Management",
      "Adaptability",
      "Problem Solving",
    ],
  },
];