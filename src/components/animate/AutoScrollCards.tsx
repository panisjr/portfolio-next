"use client"
import { motion } from "framer-motion";

export default function AutoScrollCards({
  children,
  duration = 20,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex gap-10 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration,
        delay,
        ease: "linear",
      }}
    >
      <div className="flex gap-10">{children}</div>
      <div className="flex gap-10">{children}</div>
    </motion.div>
  );
}
