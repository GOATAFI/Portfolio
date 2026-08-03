import { motion } from "framer-motion";

export default function Phone({ children }) {
  return (
    <motion.div
      initial={{
        y: 250,
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.8,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto h-[720px] w-[360px] rounded-[48px] bg-[#111] border-[10px] border-zinc-800 shadow-[0_30px_80px_rgba(0,0,0,.6)] overflow-hidden"
    >
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full bg-black z-50" />

      {/* Status Bar */}
      <div className="absolute top-4 left-6 right-6 flex justify-between text-white text-xs z-40">
        <span>11:47</span>
        <span>📶 100%</span>
      </div>

      {/* Screen */}
      <div className="absolute inset-0 bg-white overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}