import { motion } from "framer-motion";

export default function SlideDownOnLoad({
  children,
  duration = 0.6,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
