import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ children, className }) {
  const ref = useRef(null);

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  }

  function reset() {
    ref.current.style.transform = `translate(0,0)`;
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.05 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
