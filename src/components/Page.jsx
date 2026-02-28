import { motion } from "framer-motion";

export default function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-10 min-h-screen pt-20"
    >
      {children}
    </motion.main>
  );
}
