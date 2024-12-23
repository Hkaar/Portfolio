import * as motion from "framer-motion/client";
import { twMerge } from "tailwind-merge";

interface SlideDownProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number
  repeat?: boolean
}

export default function SlideDown(
  { delay, repeat, children, className }: SlideDownProps,
) {
  return (
    <motion.div
      className={twMerge("w-full", className)}
      initial={{ y: -50, opacity: 0, z: 30 }}
      whileInView={{ y: 0, opacity: 1, z: 0, transition: { duration: delay ? delay : 1.2 } }}
      viewport={{ once: repeat ? false : true }}
    >
      {children}
    </motion.div>
  );
}
