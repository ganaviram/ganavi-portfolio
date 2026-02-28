import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const projects = [
  {
    title: "Cloud-Native Data Platform",
    context: "FinTech · Internal System",
    description:
      "Designed and operated a secure, scalable cloud data platform handling batch and streaming workloads under strict compliance requirements.",
    highlights: [
      "Multi-account AWS architecture with strong isolation",
      "ETL pipelines using Spark & Airflow",
      "Cost-optimized storage and compute layers",
      "Security-first IAM and networking design",
    ],
    tools: ["AWS", "Spark", "Airflow", "S3", "IAM", "Terraform"],
    impact:
      "Enabled reliable data processing at scale while reducing manual operations and improving observability.",
  },
  {
    title: "Multi-Account AWS Infrastructure",
    context: "Enterprise Platform · Internal",
    description:
      "Built and maintained a multi-account AWS foundation supporting multiple teams and environments with strict security boundaries.",
    highlights: [
      "Account structure & environment isolation",
      "VPC design with secure networking",
      "Centralized logging & monitoring",
      "Least-privilege IAM enforcement",
    ],
    tools: ["AWS", "VPC", "IAM", "CloudWatch", "Terraform", "OpenTofu"],
    impact:
      "Improved security posture and simplified onboarding for new services and teams.",
  },
  {
    title: "CI/CD & Automation Framework",
    context: "Platform Engineering · Internal",
    description:
      "Implemented automation-first CI/CD pipelines to reduce deployment risk and accelerate delivery across services.",
    highlights: [
      "Git-based CI/CD workflows",
      "Infrastructure as Code automation",
      "Environment-aware deployments",
      "Rollback-friendly release strategy",
    ],
    tools: ["CI/CD", "Terraform", "Ansible", "Python"],
    impact:
      "Reduced deployment time and manual intervention while improving reliability.",
  },
  {
    title: "Observability & Reliability Stack",
    context: "SRE · Production Systems",
    description:
      "Designed observability systems to improve system visibility, alerting quality, and incident response.",
    highlights: [
      "Metrics, logging & alerting strategy",
      "Noise-free alerting design",
      "Dashboards for system health",
      "Production incident support",
    ],
    tools: ["Prometheus", "Grafana", "Alerting", "Logging"],
    impact:
      "Improved incident response time and system reliability in production.",
  },
  {
    title: "Applied AI / ML Systems",
    context: "Data Platforms · Experimental & Production",
    description:
      "Worked on applying machine learning capabilities within data platforms, focusing on pipelines, experimentation, and production readiness rather than standalone models.",
    highlights: [
      "Data preparation and feature pipelines",
      "Experimentation & evaluation workflows",
      "Model integration into data systems",
      "Scalability and reliability considerations",
    ],
    tools: ["Python", "Data Pipelines", "ML Workflows", "Cloud Infrastructure"],
    impact:
      "Enabled data-driven experimentation while keeping systems observable, scalable, and maintainable.",
  },
  {
    title: "Networking & Security Architecture",
    context: "Cloud Infrastructure · Production",
    description:
      "Designed secure networking foundations and access controls for cloud environments supporting multiple teams and workloads.",
    highlights: [
      "VPC and subnet architecture design",
      "Secure connectivity and traffic control",
      "IAM boundaries and least-privilege access",
      "Security best practices for production systems",
    ],
    tools: ["VPC", "Networking", "IAM", "Security Architecture"],
    impact:
      "Improved system security, reduced risk, and enabled safe scaling of services.",
  },
];

export default function Projects() {
  return (
    <main className="relative px-6 py-32 max-w-7xl mx-auto">

      {/* HERO */}
      <section className="mb-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Selected Work & Case Studies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-3xl mx-auto text-neutral-400"
        >
          Systems I’ve designed and operated across cloud, infrastructure,
          data platforms, reliability engineering, applied AI/ML, and networking.
          Projects are anonymized to respect confidentiality.
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
          My work focuses on building reliable systems. Code, tools, and models
          are always in service of that goal.
        </motion.p>
      </section>
    </main>
  );
}

/* =========================
   PROJECT CARD WITH CURSOR GLOW
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
          <p className="text-sm text-neutral-500 mb-2">Tools & Tech</p>
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

          <p className="text-sm text-neutral-500">Impact</p>
          <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
