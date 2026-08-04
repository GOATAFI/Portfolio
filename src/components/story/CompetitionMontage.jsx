import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

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

const competition = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
];

const winners = [
  w1,
  w2,
  w3,
  w4,
];

export default function CompetitionMontage() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => {
        if (prev >= 11) {
          clearInterval(timer);
          return prev;
        }

        return prev + 1;
      });
    }, 1600);

    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
        // Competition Photos (0-5)
    if (stage <= 5) {
      return (
        <motion.img
          key={`competition-${stage}`}
          src={competition[stage]}
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      );
    }

    // Mid Text
    if (stage === 6) {
      return (
        <motion.div
          key="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black"
        >
          <p className="uppercase tracking-[0.35em] text-zinc-500">
            After
          </p>

          <h1 className="mt-6 text-5xl md:text-8xl font-light text-center">
            7 unforgettable
            <br />
            days...
          </h1>
        </motion.div>
      );
    }

    // Winner Photos (7-10)
    if (stage >= 7 && stage <= 10) {
      return (
        <motion.img
          key={`winner-${stage}`}
          src={winners[stage - 7]}
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      );
    }

    // Final
    return (
      <motion.div
        key="champion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black flex flex-col items-center justify-center"
      >
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
            duration: 0.8,
          }}
          className="text-6xl md:text-9xl font-light text-center"
        >
          We became
          <br />
          Champions.
        </motion.h1>
      </motion.div>
    );
  };

  return (
    <FullScreen className="bg-black overflow-hidden">

      <div className="relative w-[88%] md:w-[82%] max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl">

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

      </div>

    </FullScreen>
  );
}