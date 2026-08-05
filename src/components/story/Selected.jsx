import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import FullScreen from "../layout/FullScreen";

import useTimeline from "../../hooks/useTimeline";
export default function Selected() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });


const step = useTimeline(
  isInView,
  [
    1600,
    1200,
    1200,
  ]
);

  return (
    <FullScreen className="bg-black overflow-hidden">

      <div
        ref={ref}
        className="max-w-5xl mx-auto text-center"
      >

        <AnimatePresence mode="wait">

          {step === 0 && (
            <motion.div
              key="film"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: .8,
                ease: [0.22,1,0.36,1],
              }}
            >
              <p className="uppercase tracking-[0.35em] text-zinc-600">
                We made the film.
              </p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="deadline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: .8,
              }}
            >
              <h1 className="text-6xl md:text-8xl font-light leading-tight">
                Before the
                <br />
                deadline.
              </h1>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="then"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-3xl text-zinc-400">
                Then...
              </p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="selected"
              initial={{
                opacity: 0,
                scale: .96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: .8,
              }}
            >
              <h1 className="text-6xl md:text-9xl font-light">
                We got
                <br />
                selected.
              </h1>
            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </FullScreen>
  );
}