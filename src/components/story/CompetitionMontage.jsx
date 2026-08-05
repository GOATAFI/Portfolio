import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import FullScreen from "../layout/FullScreen";
import useTimeline from "../../hooks/useTimeline";

import c1 from "../../assets/competition/1.jpg";
import c2 from "../../assets/competition/2.jpg";
import c3 from "../../assets/competition/3.jpg";
import c4 from "../../assets/competition/4.jpg";
import c5 from "../../assets/competition/5.jpg";
import c6 from "../../assets/competition/6.jpg";

import w1 from "../../assets/winner/1.jpg";
import w2 from "../../assets/winner/2.jpg";
import w3 from "../../assets/winner/3.jpg";
import w4 from "../../assets/winner/4.jpg";

const competition = [c1, c2, c3, c4, c5, c6];
const winners = [w1, w2, w3, w4];

function Photo({ src }) {
  return (
    <motion.img
      src={src}
      alt=""
      initial={{
        opacity: 0,
        scale: 1.08,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.04,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-0 w-full h-full object-contain bg-black"
    />
  );
}

export default function CompetitionMontage() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.9,
  });

  const step = useTimeline(isInView, [
    1500,
    1500,
    1500,
    1500,
    1500,
    1700,
    1800,
    1500,
    1500,
    1500,
    1800,
  ]);

  function renderScene() {

    if (step <= 5) {
      return (
        <Photo
          key={step}
          src={competition[step]}
        />
      );
    }

    if (step === 6) {
      return (
        <motion.div
          key="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .6 }}
          className="absolute inset-0 flex items-center justify-center bg-black"
        >
          <div className="text-center">

            <p className="uppercase tracking-[0.4em] text-zinc-500">
              After
            </p>

            <h1 className="mt-8 text-6xl md:text-8xl font-light">
              seven unforgettable
              <br />
              days...
            </h1>

          </div>
        </motion.div>
      );
    }
        if (step >= 7 && step <= 10) {
      return (
        <Photo
          key={`winner-${step}`}
          src={winners[step - 7]}
        />
      );
    }

    return (
      <motion.div
        key="champion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center bg-black"
      >
        <div className="text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .15 }}
            className="uppercase tracking-[0.4em] text-zinc-600"
          >
            The journey was worth it.
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .35,
              duration: .8,
            }}
            className="mt-8 text-6xl md:text-9xl font-light"
          >
            We became
            <br />
            Champions.
          </motion.h1>

        </div>
      </motion.div>
    );
  }

  return (
    <FullScreen className="bg-black overflow-hidden">

      <div
        ref={ref}
        className="w-[88%] md:w-[82%] max-w-5xl mx-auto"
      >

        <div className="relative aspect-video rounded-3xl overflow-hidden bg-black">

          <AnimatePresence mode="wait">
            {renderScene()}
          </AnimatePresence>

        </div>

      </div>

    </FullScreen>
  );
}