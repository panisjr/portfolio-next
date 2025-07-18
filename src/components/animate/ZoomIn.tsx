"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function ZoomIn({
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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration, delay },
        },
        hidden: { opacity: 0, scale: scaleFrom, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}
