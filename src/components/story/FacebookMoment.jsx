import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

import Phone from "./Phone";
import FacebookFeed from "./FacebookFeed";

export default function FacebookMoment() {
  return (
    <FullScreen className="bg-black overflow-hidden px-6">

      <div className="max-w-7xl mx-auto w-full">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center uppercase tracking-[0.35em] text-zinc-500"
        >
          One ordinary day...
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 text-center text-5xl md:text-8xl font-light leading-tight"
        >
          I was just
          <br />
          scrolling Facebook.
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 flex justify-center"
        >
          <Phone>

            <FacebookFeed />

          </Phone>
        </motion.div>

      </div>

    </FullScreen>
  );
}