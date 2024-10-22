import * as motion from "framer-motion/client";

interface SlideRightProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
}

export default function SlideRight(
  { delay, children }: SlideRightProps,
) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0, z: 30 }}
      whileInView={{
        x: 0,
        opacity: 1,
        z: 0,
        transition: { duration: delay ? delay : 1.2 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
