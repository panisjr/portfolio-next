import { motion } from "framer-motion";

export default function PopUpOnLoad({
  children,
  duration = 0.5,
  delay = 0,
  scaleFrom = 0.8,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  scaleFrom?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
