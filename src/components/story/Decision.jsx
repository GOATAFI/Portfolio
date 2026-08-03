import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

export default function Decision() {
  return (
    <FullScreen className="bg-black overflow-hidden">

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">

        {/* Obstacles */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="text-5xl md:text-8xl font-light"
          >
            We had nothing.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: .8,
              duration: .5,
            }}
            className="mt-10 text-3xl md:text-5xl text-zinc-500"
          >
            No budget.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.5,
              duration: .5,
            }}
            className="mt-5 text-3xl md:text-5xl text-zinc-500"
          >
            No experience.
          </motion.p>

        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 120,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 2.2,
            duration: .6,
          }}
          className="h-px bg-zinc-700 my-14"
        />

        {/* Idea */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: .9,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 2.6,
            duration: .8,
            ease: [0.22,1,0.36,1],
          }}
          className="text-6xl md:text-9xl font-light"
        >
          Just an idea.
        </motion.h1>

        {/* Bottom Line */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 3.6,
            duration: .6,
          }}
          className="mt-14 text-xl md:text-2xl text-zinc-500"
        >
          Sometimes...
          that's all you need.
        </motion.p>

      </div>

    </FullScreen>
  );
}