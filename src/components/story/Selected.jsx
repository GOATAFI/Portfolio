import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

export default function Selected() {
  return (
    <FullScreen className="bg-black overflow-hidden">

      <div className="max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="uppercase tracking-[0.35em] text-zinc-600"
        >
          We made the film.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .5,
            duration: .7,
            ease: [0.22,1,0.36,1],
          }}
          className="mt-8 text-5xl md:text-8xl font-light leading-tight"
        >
          Before the
          <br />
          deadline.
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 1.8,
            duration: .5,
          }}
          className="mx-auto my-16 h-px w-40 bg-zinc-700 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 2.3,
            duration: .5,
          }}
          className="text-2xl md:text-4xl text-zinc-400"
        >
          Then...
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 3,
            duration: .7,
            ease:[0.22,1,0.36,1]
          }}
          className="mt-10 text-6xl md:text-9xl font-light"
        >
          We got selected.
        </motion.h2>

      </div>

    </FullScreen>
  );
}