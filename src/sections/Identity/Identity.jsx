import { motion } from "framer-motion";
import FullScreen from "../../components/layout/FullScreen";

const ease = [0.22, 1, 0.36, 1];

export default function Identity() {
  return (
    <FullScreen className="overflow-hidden bg-black">
      <div className="flex flex-col items-center justify-center text-center">

        {/* Hi I'm */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mb-5 uppercase tracking-[0.7em] text-xs md:text-sm text-white/50"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
  initial={{
    opacity: 0,
    scale: 0.94,
    filter: "blur(12px)",
    letterSpacing: "0.08em",
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    letterSpacing: "-0.06em",
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative whitespace-nowrap text-[14vw] md:text-[6.8vw] font-extralight tracking-[-0.06em] text-white"
>
  Nahid Parvez Mafi

  {/* Spotlight */}
  <motion.div
    initial={{ x: "-180%" }}
    whileInView={{ x: "280%" }}
    viewport={{ once: true }}
    transition={{
      delay: 0.35,
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute inset-y-[-45%] -left-1/2 w-[28%] rotate-12 pointer-events-none"
  >
    <div className="h-[200%] w-full rounded-full bg-white/30 blur-3xl" />
  </motion.div>

  {/* Shadow */}
  <motion.div
    initial={{ x: "-180%" }}
    whileInView={{ x: "280%" }}
    viewport={{ once: true }}
    transition={{
      delay: 0.35,
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute inset-y-[-35%] -left-1/2 w-[45%] rotate-12 pointer-events-none"
  >
    <div className="h-[180%] w-full rounded-full bg-black/70 blur-3xl" />
  </motion.div>
</motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.45, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 2.2,
            duration: 0.8,
          }}
          className="mt-10 uppercase tracking-[0.45em] text-xs md:text-sm text-white/45"
        >
          SCRIPT WRITER • DIRECTOR • CREATIVE DEVELOPER
        </motion.p>

      </div>
    </FullScreen>
  );
}