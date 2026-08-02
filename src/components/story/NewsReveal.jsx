import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import FullScreen from "../layout/FullScreen";

import FaceScanner from "./FaceScanner";

import prothom from "../../assets/news/prothomalo.jpeg";
import kaler from "../../assets/news/kalerkantho.jpeg";

export default function NewsReveal() {
    const leftPaper = useAnimation();
const rightPaper = useAnimation();

const centerText = useAnimation();
useEffect(() => {
  async function playScene() {

    await leftPaper.start({
      x: 0,
      rotate: -3,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    });

    await rightPaper.start({
      x: 0,
      rotate: 3,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    });

    await new Promise((r) => setTimeout(r, 3200));

    leftPaper.start({
      x: -180,
      opacity: .25,
      transition:{
        duration:1.1
      }
    });

    rightPaper.start({
      x:180,
      opacity:.25,
      transition:{
        duration:1.1
      }
    });

    centerText.start({
      opacity:1,
      y:0,
      transition:{
        delay:.4,
        duration:.8
      }
    });

  }

  playScene();
}, []);
  return (
    <FullScreen className="overflow-hidden bg-black px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.6,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* LEFT */}

          <motion.div
            variants={{
              hidden: {
                x: -600,
                rotate: -8,
                opacity: 0,
              },
              visible: {
                x: 0,
                rotate: -3,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="relative w-full max-w-[420px]"
          >
            <motion.img
              src={prothom}
              alt=""
              className="w-full rounded-xl shadow-2xl"
              initial={{ filter: "brightness(1)" }}
              whileInView={{
                filter: [
                  "brightness(1)",
                  "brightness(1)",
                  "brightness(.45)",
                ],
              }}
              viewport={{ once: true }}
              transition={{
                delay: 2.1,
                duration: 0.5,
              }}
            />

            <FaceScanner
  top="40%"
  left="61%"
              delay={1.1}
            />

            {/* FACE HIGHLIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 2.15,
              }}
              className="absolute w-20 h-20 rounded-full"
              style={{
                top: "32%",
                left: "51%",
                transform: "translate(-50%,-50%)",
                boxShadow: "0 0 40px rgba(255,255,255,.25)",
              }}
            />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={{
              hidden: {
                x: 600,
                rotate: 8,
                opacity: 0,
              },
              visible: {
                x: 0,
                rotate: 3,
                opacity: 1,
                transition: {
                  delay: .35,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="relative w-full max-w-[420px]"
          >
            <motion.img
              src={kaler}
              alt=""
              className="w-full rounded-xl shadow-2xl"
              initial={{ filter: "brightness(1)" }}
              whileInView={{
                filter: [
                  "brightness(1)",
                  "brightness(1)",
                  "brightness(.45)",
                ],
              }}
              viewport={{ once: true }}
              transition={{
                delay: 3.15,
                duration: 0.5,
              }}
            />

            <FaceScanner
              top="73%"
              left="46%"
              delay={2.25}
            />

            {/* FACE HIGHLIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: .6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 3.2,
              }}
              className="absolute w-20 h-20 rounded-full"
              style={{
                top: "60%",
                left: "36%",
                transform: "translate(-50%,-50%)",
                boxShadow: "0 0 40px rgba(255,255,255,.25)",
              }}
            />
          </motion.div>
        </div>

        {/* TEXT */}

<div className="mt-16 text-center">

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: 4.2,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="text-6xl md:text-8xl font-light"
  >
    Yep.
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: 5.25,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mt-5 text-xl md:text-2xl text-zinc-400"
  >
    That's me.
  </motion.p>

</div>
      </motion.div>
    </FullScreen>
  );
}