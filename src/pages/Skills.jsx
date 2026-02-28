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
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Tools change.
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Systems thinking doesn’t.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            My skills span infrastructure, data, reliability, automation,
            and product — unified by a systems-first mindset.
          </p>

          <p className="mt-10 italic text-white/40">
            “Depth before noise. Reliability before novelty.”
          </p>
        </motion.div>
      </section>

      {/* SKILLS DOMAINS */}
      <section className="max-w-7xl mx-auto px-6 py-32 space-y-28">

        {skillDomains.map((domain, index) => (
          <motion.div
            key={domain.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-semibold">
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

      {/* HOW I USE THESE SKILLS */}
      <section className="py-32 bg-white/5 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-10">
            How I Use These Skills
          </h2>

          <ul className="space-y-5 text-white/70">
            <li>• Choose tools based on problem constraints, not trends</li>
            <li>• Design for failure before success</li>
            <li>• Automate repetitive work to protect human focus</li>
            <li>• Balance speed with correctness and security</li>
            <li>• Think in systems, not isolated components</li>
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
            Skills evolve. Judgment compounds.
          </h2>

          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            I continue to learn — but always with intent,
            context, and responsibility.
          </p>

          {/* FIXED BUTTON */}
          <Link
            to="/projects"
            className="inline-block px-8 py-4 rounded-full
                       bg-gradient-to-r from-indigo-500 to-pink-500
                       text-white font-medium hover:opacity-90 transition"
          >
            See my work
          </Link>

        </motion.div>
      </section>
    </main>
  );
}

/* ===================== DATA ===================== */

const skillDomains = [
  {
    title: "Cloud & Infrastructure",
    description:
      "Designing and operating scalable, secure, and production-grade cloud environments.",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Multi-Cloud Architecture",
      "Infrastructure Provisioning",
    ],
  },
  {
    title: "DevOps & Site Reliability Engineering",
    description:
      "Building automation-first systems that scale reliably under pressure.",
    skills: [
      "CI/CD Automation",
      "Terraform",
      "OpenTofu",
      "Ansible",
      "Release Engineering",
      "SRE Practices",
    ],
  },
  {
    title: "Data Platforms & ETL",
    description:
      "Engineering batch and streaming data systems with reliability and scale.",
    skills: [
      "ETL Architecture",
      "Apache Spark",
      "Apache Airflow",
      "Data Lakes",
      "Streaming Platforms",
      "Redpanda / Kafka",
    ],
  },
  {
    title: "Databases & Storage Systems",
    description:
      "Selecting and operating databases based on workload, scale, and consistency needs.",
    skills: [
      "PostgreSQL",
      "MariaDB",
      "MySQL",
      "Oracle",
      "MongoDB",
      "DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "YugabyteDB",
      "Snowflake",
    ],
  },
  {
    title: "Programming & Automation",
    description:
      "Writing clear, maintainable code to automate systems and data workflows.",
    skills: [
      "Python",
      "Scala",
      "Java",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
      "React",
    ],
  },
  {
    title: "Observability & Reliability",
    description:
      "Ensuring systems are measurable, debuggable, and resilient.",
    skills: [
      "Grafana",
      "Prometheus",
      "Metrics & Alerting",
      "Logging & Tracing",
      "Incident Response",
    ],
  },
  {
    title: "Networking & Security",
    description:
      "Designing secure network foundations with best-practice security controls.",
    skills: [
      "VPC Design",
      "IAM",
      "Network Security",
      "Firewall Rules",
      "Secure Architectures",
    ],
  },
  {
    title: "Web & Product Engineering",
    description:
      "Building user-facing systems with a focus on performance and usability.",
    skills: [
      "Web Development",
      "API Design",
      "Frontend Architecture",
    ],
  },
  {
    title: "AI / ML (Applied)",
    description:
      "Exploring AI/ML as an extension of data systems — applied, not hype-driven.",
    skills: [
      "Applied AI/ML",
      "Data-Driven Systems",
      "Experimentation Mindset",
    ],
  },
];