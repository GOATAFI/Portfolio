import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";
import Quote from "../ui/Quote";

import muller from "../../assets/thomas/muller.jpg";

export default function StoryScene({ text }) {
  const isMuller = text === "Thomas Müller.";

  return (
    <FullScreen>
      {isMuller ? (
        <div className="flex flex-col items-center">

          <motion.img
            src={muller}
            alt="Thomas Müller"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-60 md:w-72 aspect-[4/5] object-cover rounded-[32px] grayscale mb-10 shadow-[0_20px_80px_rgba(0,0,0,.45)]"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
          >
            <Quote>{text}</Quote>
          </motion.div>

        </div>
      ) : (
        <Quote>{text}</Quote>
      )}
    </FullScreen>
  );
}