import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -260]);

  return (
    <main ref={ref} className="relative overflow-hidden bg-black text-white">

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
            <span className="block text-white">Building Knowledge</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              step by step.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            My academic journey laid the foundation for programming,
            problem-solving, and understanding how software systems work.
          </p>

          <p className="mt-10 italic text-white/40">
            “Strong fundamentals create confident developers.”
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
                {item.location} • {item.year}
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
          Education built my foundation.
          <br />
          Training strengthened my practical skills.
        </motion.p>
      </section>

      {/* TRAINING & CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          Training & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
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
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-white/50 italic">
          Continuously learning and improving technical skills to stay
          industry-ready.
        </p>
      </section>
    </main>
  );
}

/* DATA */

const educationData = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "The Oxford College of Engineering",
    location: "Bangalore, Karnataka",
    year: "2024 • 77%",
    note:
      "Focused on programming, databases, and software development concepts.",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "SMSG Jain Degree College",
    location: "Bangalore, Karnataka",
    year: "2022 • 75%",
    note:
      "Built strong foundation in computer fundamentals and application development.",
  },
  {
    title: "Higher Secondary (Science)",
    institution: "Pre-University Education",
    location: "2019",
    year: "70%",
    note:
      "Developed analytical thinking through mathematics and science subjects.",
  },
  {
    title: "Secondary School (SSLC)",
    institution: "Indian Public School",
    location: "2017",
    year: "55%",
    note:
      "Early academic journey that shaped discipline and learning habits.",
  },
];

const certifications = [
  {
    name: "Python AI/ML Internship Training",
    description:
      "Completed 6-week internship training at Dotch Endeavours Pvt Ltd focusing on Python and AI/ML fundamentals.",
  },
];