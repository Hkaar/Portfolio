import * as motion from "framer-motion/client";

interface SlideRightProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
  repeat?: boolean
}

export default function SlideRight(
  { delay, repeat, children, className }: SlideRightProps,
) {
  return (
    <motion.div
      className={className}
      initial={{ x: -50, opacity: 0, z: 30 }}
      whileInView={{
        x: 0,
        opacity: 1,
        z: 0,
        transition: { duration: delay ? delay : 1.2 },
      }}
      viewport={{ once: repeat ? false : true }}
    >
      {children}
    </motion.div>
  );
}
