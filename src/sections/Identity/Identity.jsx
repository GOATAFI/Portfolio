import { motion } from "framer-motion";
import FullScreen from "../../components/layout/FullScreen";

const ease = [0.22, 1, 0.36, 1];

export default function Identity() {
  return (
    <FullScreen className="overflow-hidden bg-black">
      <div className="relative flex items-center justify-center w-full h-full">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="relative text-[15vw] md:text-[7vw] font-extralight tracking-[-0.06em] text-white"
        >
          Nahid Parvez Mafi

          {/* Spotlight */}
          <motion.div
            initial={{ x: "-160%" }}
            whileInView={{ x: "260%" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 2.3,
              ease,
            }}
            className="
              absolute
              inset-y-[-40%]
              -left-1/3
              w-1/3
              rotate-12
              pointer-events-none
            "
          >
            <div
              className="
                h-[180%]
                w-full
                rounded-full
                bg-white/30
                blur-3xl
              "
            />
          </motion.div>

          {/* Soft Shadow Following the Light */}
          <motion.div
            initial={{ x: "-170%" }}
            whileInView={{ x: "260%" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 2.3,
              ease,
            }}
            className="
              absolute
              inset-y-[-20%]
              -left-1/2
              w-1/2
              rotate-12
              pointer-events-none
            "
          >
            <div
              className="
                h-[160%]
                w-full
                rounded-full
                bg-black/70
                blur-2xl
              "
            />
          </motion.div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.45, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 2.4,
            duration: 0.8,
          }}
          className="
            absolute
            mt-40
            md:mt-52
            uppercase
            tracking-[0.5em]
            text-xs
            text-white
          "
        >
          SOFTWARE ENGINEER • STORYTELLER
        </motion.p>
      </div>
    </FullScreen>
  );
}