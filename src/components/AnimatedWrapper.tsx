import type { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedWrapperProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  duration?: number;
  fromOpacity?: number;
  toOpacity?: number;
  onceInView?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const AnimatedWrapper = ({
  children,
  delay = 0,
  y = 10,
  scale,
  duration = 0.5,
  fromOpacity = 0,
  toOpacity = 1,
  onceInView = true,
  ...rest
}: AnimatedWrapperProps) => {
  const initial = {
    opacity: fromOpacity,
    y,
    ...(scale !== undefined ? { scale: 0 } : {}),
  };

  const animate = {
    opacity: toOpacity,
    y: 0,
    ...(scale !== undefined ? { scale: 1 } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: onceInView }}
      transition={{ delay, duration, easing: "ease-out" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
