import * as motion from "framer-motion/client";

interface SlideRightProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
}

export default function SlideRight(
  { delay, children }: SlideRightProps,
) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: delay ? delay : 1.2 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
