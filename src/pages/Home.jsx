import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import profilePic from "../assets/mypic.jpeg"; // adjust path if needed

const name = "Abhilash";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imageRef = useRef(null);

  // Parallax tilt for image
  const rotateX = useTransform(mouseY, [-200, 200], [12, -12]);
  const rotateY = useTransform(mouseX, [-200, 200], [-12, 12]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 15 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 15 });

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  function handleImageMove(e) {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function resetImage() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* ================= FILM GRAIN ================= */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.035] bg-[url('/grain.png')] mix-blend-overlay" />

      {/* ================= CURSOR GLOW ================= */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(168,85,247,0.22),
              transparent 65%
            )
          `,
        }}
      />

      {/* FLOATING ORBS */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-32 left-24 -z-10
             w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-32 right-24 -z-10
             w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"
      />

      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-44 pb-32">
        
        {/* ================= PROFILE IMAGE ================= */}
        <motion.div
          ref={imageRef}
          onMouseMove={handleImageMove}
          onMouseLeave={resetImage}
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative mb-16"
        >
          {/* Rotating Gradient Glow */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 rounded-3xl
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       blur-3xl opacity-30"
          />

          {/* Glass Morph Card */}
          <div className="relative rounded-3xl p-6
                          bg-white/5 backdrop-blur-xl
                          border border-white/10
                          shadow-[0_0_60px_rgba(168,85,247,0.25)] overflow-hidden">

            {/* Hover Lift Wrapper */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              {/* Light Sweep */}
              <motion.div
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-10
                           bg-gradient-to-r from-transparent via-white/20 to-transparent
                           skew-x-12"
              />

              <motion.img
                src={profilePic}
                alt="Abhilash"
                className="w-56 h-64 md:w-64 md:h-72 object-cover
                           rounded-2xl shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  boxShadow: `
                    0px 20px 60px rgba(0,0,0,0.6),
                    0px 0px 40px rgba(168,85,247,0.25)
                  `,
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= NAME ================= */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl"
        >
          Hi, I’m{" "}
          <span className="inline-flex">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + i * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.2,
                  textShadow: "0px 0px 40px rgba(168,85,247,1)",
                }}
                className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                           bg-clip-text text-transparent cursor-default"
              >
                {char}
              </motion.span>
            ))}
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 text-neutral-400 max-w-2xl text-lg leading-relaxed"
        >
          A software engineer who enjoys building systems that work in the real
          world — reliable, scalable, and thoughtfully designed.
        </motion.p>
      </section>

      {/* ================= PERSONAL QUOTE ================= */}
      <section className="px-6 py-28 text-center">
        <motion.blockquote
          whileHover={{
            scale: 1.02,
            textShadow: "0px 0px 30px rgba(255,255,255,0.15)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl italic text-neutral-300"
        >
          “I believe technology should feel calm, intuitive, and human —
          something that quietly supports life instead of complicating it.”
        </motion.blockquote>

        <p className="mt-4 text-sm text-neutral-500">
          — Personal philosophy
        </p>
      </section>

      {/* ================= PROFESSIONAL QUOTE ================= */}
      <section className="px-6 py-28 text-center bg-white/5 backdrop-blur">
        <motion.blockquote
          whileHover={{
            scale: 1.02,
            textShadow: "0px 0px 35px rgba(168,85,247,0.35)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl italic text-neutral-200"
        >
          “Engineering resilient, scalable systems across cloud, data, and
          infrastructure — with a systems-first mindset and production ownership.”
        </motion.blockquote>

        <p className="mt-4 text-sm text-neutral-500">
          — Professional approach
        </p>
      </section>

      {/* ================= PERSONAL + PROFESSIONAL ================= */}
      <section className="px-6 py-32 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Beyond the keyboard",
            text:
              "Outside of work, I enjoy cooking, singing, and learning things that have nothing to do with code. I value balance, clarity, and long-term thinking — in life as much as in engineering.",
            glow: "hover:border-indigo-400/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]",
          },
          {
            title: "At work",
            text:
              "I work across DevOps, SRE, data platforms, and cloud infrastructure, focusing on systems that are observable, maintainable, and built to scale under real-world constraints.",
            glow: "hover:border-pink-400/50 hover:shadow-[0_0_35px_rgba(236,72,153,0.3)]",
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.7 }}
            className={`rounded-3xl p-10 bg-white/5 border border-white/10 backdrop-blur transition ${card.glow}`}
          >
            <h3 className="text-lg font-medium mb-4">{card.title}</h3>
            <p className="text-neutral-400 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 pb-44 text-center">
        <motion.h2
          whileHover={{
            textShadow: "0px 0px 40px rgba(168,85,247,0.6)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Personal values. Professional execution.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-neutral-400 mb-12"
        >
          Open to meaningful conversations, collaborations, and opportunities.
        </motion.p>

        <Link
          to="/contact"
          className="inline-block px-8 py-4 rounded-xl
                     bg-gradient-to-r from-indigo-500 to-pink-500
                     text-sm font-medium
                     hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
                     transition"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}