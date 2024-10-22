import * as motion from "framer-motion/client";

interface SlideUpProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number
}

export default function SlideUp(
  { delay, children }: SlideUpProps,
) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0, z: 30 }}
      whileInView={{ y: 0, opacity: 1, z: 0, transition: { duration: delay ? delay : 1.2 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
