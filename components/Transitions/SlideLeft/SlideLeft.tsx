import * as motion from "framer-motion/client";

interface SlideLeftProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
}

export default function SlideLeft(
  { delay, children }: SlideLeftProps,
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
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
