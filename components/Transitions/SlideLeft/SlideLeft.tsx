import * as motion from "framer-motion/client";
import { twMerge } from "tailwind-merge";

interface SlideLeftProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
  repeat?: boolean;
}

export default function SlideLeft(
  { delay, repeat, children, className }: SlideLeftProps,
) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0, z: 30 }}
      whileInView={{
        x: 0,
        opacity: 1,
        z: 0,
        transition: { duration: delay ? delay : 1.2 },
      }}
      viewport={{ once: repeat ? false : true }}
    >
      <div className={twMerge("w-full", className)}>
        {children}
      </div>
    </motion.div>
  );
}
