import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import FullScreen from "../layout/FullScreen";
import useTimeline from "../../hooks/useTimeline";

export default function LifeHappened() {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.95,
  });

  const step = useTimeline(isInView, [
    2200,
    2000,
    2200,
    2200,
  ]);

  function renderScene() {

    if (step === 0) {
      return (
        <motion.div
          key="decision"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .7 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">

            <p className="uppercase tracking-[0.4em] text-zinc-600">
              By then...
            </p>

            <h1 className="mt-8 text-6xl md:text-8xl font-light leading-tight">
              I knew exactly
              <br />
              what I wanted.
            </h1>

          </div>
        </motion.div>
      );
    }

    if (step === 1) {
      return (
        <motion.div
          key="parents"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .7 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-5xl md:text-8xl font-light leading-tight text-center">
            Unfortunately...
            <br /><br />
            I wasn't the only one
            <br />
            making that decision.
          </h1>
        </motion.div>
      );
    }

    if (step === 2) {
      return (
        <motion.div
          key="brown"
          initial={{ opacity: 0, scale: .92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: .8,
            ease: [0.22,1,0.36,1]
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-center leading-none font-light text-7xl md:text-[8rem]">
            Typical
            <br />
            Brown
            <br />
            Parents.
          </h1>
        </motion.div>
      );
    }

    return (
      <motion.div
        key="engineering"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-center font-light text-7xl md:text-[9rem]">
          Engineering.
        </h1>
      </motion.div>
    );
  }

  return (
    <FullScreen className="bg-black overflow-hidden">

      <div
        ref={ref}
        className="relative w-full h-[60vh]"
      >

        <AnimatePresence mode="wait">
          {renderScene()}
        </AnimatePresence>

      </div>

    </FullScreen>
  );
}