import { motion } from "framer-motion";

export default function FaceScanner({
  top,
  left,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="absolute"
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative w-14 h-14">

        {/* Scanner Beam */}

        <motion.div
          initial={{
            y: -28,
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            y: 28,
            opacity: [0, 1, 1, 0],
            scaleX: [0, 1, 1],
          }}
          viewport={{ once: true }}
          transition={{
            delay,
            duration: 0.9,
            ease: "linear",
          }}
          className="absolute left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,.9)]"
        />

        {/* Lock Pulse */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          whileInView={{
            opacity: [0, .35, 0],
            scale: [0.4, 1.25, 1.5],
          }}
          viewport={{ once: true }}
          transition={{
            delay: delay + .82,
            duration: .45,
          }}
          className="absolute inset-0 rounded-full border border-white"
        />

        {/* Brackets */}

        <motion.div
          initial={{
            opacity: 0,
            scale: .7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: delay + .9,
            duration: .25,
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white" />
        </motion.div>

      </div>
    </motion.div>
  );
}