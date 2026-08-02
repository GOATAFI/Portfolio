import { motion } from "framer-motion";

export default function FaceTarget({
  top,
  left,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.45,
      }}
      className="absolute"
      style={{
        top,
        left,
      }}
    >
      <motion.div
        initial={{
          scaleX: 0,
          scaleY: 0,
        }}
        whileInView={{
          scaleX: 1,
          scaleY: 1,
        }}
        transition={{
          delay,
          duration: 0.45,
        }}
        className="w-20 h-20 rounded-full border-2 border-white"
      />

      <motion.p
        initial={{
          opacity: 0,
          y: 8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: delay + 0.25,
        }}
        className="mt-2 text-[10px] tracking-[0.25em] text-white whitespace-nowrap"
      >
        FACE DETECTED
      </motion.p>
    </motion.div>
  );
}