import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/abhilash251105/",
    value: "linkedin.com/in/abhilash251105",
    copy: false,
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/abhilash251105",
    value: "github.com/abhilash251105",
    copy: false,
  },
  {
    name: "Email",
    icon: Mail,
    link: "mailto:abhilashtmca2023@gmail.com",
    value: "abhilashtmca2023@gmail.com",
    copy: true,
  },
  {
    name: "Phone",
    icon: Phone,
    link: "tel:+918480618808",
    value: "+91 84806 18808",
    copy: true,
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-36 pb-32 px-6">

      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Let’s{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            connect
          </span>
          .
        </h1>

        <p className="text-neutral-400 text-lg mb-6">
          Open to collaborations, impactful projects, and meaningful conversations.
        </p>

        {/* AVAILABILITY */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                        bg-white/5 border border-white/10 text-sm text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities & discussions
        </div>
      </motion.section>

      {/* CONTACT GRID */}
      <section className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        {contacts.map((item, index) => (
          <ContactCard key={item.name} item={item} index={index} />
        ))}
      </section>

      {/* FOOTER NOTE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-28 text-center text-neutral-500 text-sm"
      >
        Prefer email? I usually respond within a day.
      </motion.section>
    </main>
  );
}

/* =========================
   CONTACT CARD
========================= */

function ContactCard({ item, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [copied, setCopied] = useState(false);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  function handleCopy(e) {
    e.preventDefault();
    navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <motion.a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden group rounded-2xl p-6
                 bg-white/5 border border-white/10 backdrop-blur
                 hover:border-indigo-400/40
                 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]
                 transition-all"
    >
      {/* CURSOR GLOW */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(99,102,241,0.2),
              transparent 60%
            )
          `,
        }}
      />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition">
            <item.icon className="w-6 h-6 text-indigo-400" />
          </div>

          <div>
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-sm text-neutral-400">{item.value}</p>
          </div>
        </div>

        {/* COPY BUTTON */}
        {item.copy && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-400" />
            )}
          </button>
        )}
      </div>
    </motion.a>
  );
}
