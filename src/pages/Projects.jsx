import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const projects = [
  {
    title: "Academic Management Information System",
    context: "MCA Major Project · Web Application",
    description:
      "Developed a web-based academic administration system to manage student records, academic information, and reporting efficiently.",
    highlights: [
      "Automated student data entry and management",
      "Search and filter functionality for quick access",
      "Report generation with export to MS Excel",
      "User-friendly interface with structured navigation",
    ],
    tools: ["Python", "MySQL", "HTML", "CSS", "JavaScript"],
    impact:
      "Reduced manual paperwork effort and improved accuracy in managing academic data.",
  },
  {
    title: "System Analyzer Web Application",
    context: "Web-Based Utility Project",
    description:
      "Built an interactive web application that allows users to view detailed system information through a simple and accessible interface.",
    highlights: [
      "Displays complete system configuration in one place",
      "Designed intuitive and interactive UI",
      "Simplified command-line level system access",
      "Improved accessibility for non-technical users",
    ],
    tools: ["Python", "HTML", "CSS", "JavaScript"],
    impact:
      "Made system information easily accessible through a clean web interface.",
  },
  {
    title: "Cars & Accessories Sales Management System",
    context: "BCA Project · Desktop Application",
    description:
      "Designed a sales management system to manage car and accessories data, customer reservations, and daily sales records.",
    highlights: [
      "Maintained product and customer data securely",
      "Supported offline functionality",
      "Integrated SQL database for data storage",
      "Tracked daily reservations and transactions",
    ],
    tools: ["Visual Basic 6.0", "SQL", "Database Management"],
    impact:
      "Improved organization and tracking of sales data in a structured format.",
  },
  {
    title: "Python AI/ML Internship Mini Projects",
    context: "Internship Training · Dotch Endeavours Pvt Ltd",
    description:
      "Worked on small practical tasks and exercises during a 6-week internship focused on Python programming and AI/ML fundamentals.",
    highlights: [
      "Implemented basic machine learning concepts",
      "Practiced data handling using Python",
      "Strengthened logical and analytical thinking",
      "Completed guided coding exercises and assignments",
    ],
    tools: ["Python", "Basic Machine Learning Concepts"],
    impact:
      "Strengthened practical understanding of Python and foundational AI/ML workflows.",
  },
];

export default function Projects() {
  return (
    <main className="relative px-6 py-32 max-w-7xl mx-auto bg-black text-white">

      {/* HERO */}
      <section className="mb-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Academic Projects & Practical Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-3xl mx-auto text-neutral-400"
        >
          Projects developed during academic programs and internship training,
          demonstrating my understanding of programming, databases, and web development.
        </motion.p>
      </section>

      {/* PROJECT CARDS */}
      <section className="space-y-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 0.1} />
        ))}
      </section>

      {/* FOOTER NOTE */}
      <section className="mt-32 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          className="text-sm italic text-neutral-500"
        >
          Each project strengthened my understanding of software development
          and prepared me for real-world challenges.
        </motion.p>
      </section>
    </main>
  );
}

/* =========================
   PROJECT CARD
========================= */

function ProjectCard({ project, delay }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-3xl
                 border border-white/10 bg-white/5 backdrop-blur p-10"
    >
      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(99,102,241,0.18),
              transparent 60%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        
        {/* LEFT */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            {project.title}
          </h2>
          <p className="mt-1 text-sm text-indigo-400">
            {project.context}
          </p>

          <p className="mt-6 text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2 text-neutral-400 text-sm">
            {project.highlights.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="md:w-72 shrink-0">
          <p className="text-sm text-neutral-500 mb-2">Tools & Technologies</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-xs
                           bg-black/40 border border-white/10
                           text-neutral-300"
              >
                {tool}
              </span>
            ))}
          </div>

          <p className="text-sm text-neutral-500">Outcome</p>
          <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}