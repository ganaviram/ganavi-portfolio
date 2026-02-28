import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -260]);

  return (
    <main ref={ref} className="relative overflow-hidden">

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"
      />

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-white">Foundations</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              before scale.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            From science to systems — my education shaped how I think,
            reason, and build reliable software.
          </p>

          <p className="mt-10 italic text-white/40">
            “Strong systems begin with strong fundamentals.”
          </p>
        </motion.div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="relative max-w-5xl mx-auto px-6 py-24 z-10">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

        {educationData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative mb-20 flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                            hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
                            transition-all">
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-white/70">
                {item.institution}
              </p>

              <p className="mt-1 text-sm text-white/50">
                {item.location} • {item.university}
              </p>

              <p className="mt-4 text-white/60 italic">
                {item.note}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* TRANSITION QUOTE */}
      <section className="py-32 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl text-white/70 font-light"
        >
          Degrees shaped my thinking.
          <br />
          Certifications sharpened my execution.
        </motion.p>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          Certifications & Credentials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                         hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
                         transition"
            >
              <p className="text-lg font-medium text-white">
                {cert.name}
              </p>

              <p className="mt-2 text-sm text-white/50">
                View credential →
              </p>
            </motion.a>
          ))}
        </div>

        <p className="mt-12 text-center text-white/50 italic">
          Validated expertise across cloud, infrastructure, databases,
          and production-grade systems.
        </p>
      </section>
    </main>
  );
}

/* DATA */

const educationData = [
  {
    title: "Secondary Education (Class X)",
    institution: "Kalanga High School",
    location: "Odisha",
    university: "Board of Secondary Education",
    note: "Early grounding in discipline, logic, and curiosity.",
  },
  {
    title: "Higher Secondary (Science)",
    institution: "Rajsunakhala College",
    location: "Odisha",
    university: "CHSE Odisha",
    note: "Developed analytical thinking through science and mathematics.",
  },
  {
    title: "B.Sc. Chemistry (Honours)",
    institution: "Paramananda Degree College",
    location: "Odisha",
    university: "Utkal University",
    note: "Chemistry taught precision, patience, and respect for processes.",
  },
  {
    title: "Master of Computer Applications (MCA)",
    institution: "The Oxford College of Engineering",
    location: "Karnataka",
    university: "Visvesvaraya Technological University",
    note: "Bridged academic theory with real-world software systems.",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    link: "https://www.credly.com/earner/earned/badge/16c0be1f-2382-4c56-8382-dc56f705ec4a",
  },
  {
    name: "AWS Certified Developer – Associate",
    link: "https://www.credly.com/earner/earned/badge/b305d33c-fd3d-4241-a655-d62c81135601",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    link: "https://www.credly.com/earner/earned/badge/f0205b45-a796-46e9-9efb-2f5c963b4795",
  },
  {
    name: "Yugabyte Certified",
    link: "https://www.credential.net/cec03fc0-c9c1-43e6-86f4-c37a7df23b98#acc.4eCO7o6d",
  },
  {
    name: "OpenTofu Certified",
    link: "https://www.credly.com/earner/earned/badge/b6f67ff5-2cb3-430e-a22a-e6687d849237",
  },
];
