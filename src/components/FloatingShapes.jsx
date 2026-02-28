import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingShapes() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -120]);
  const y2 = useTransform(scrollY, [0, 500], [0, 160]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-3xl"
      />
    </div>
  );
}
