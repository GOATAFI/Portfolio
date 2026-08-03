import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

import fun1 from "../../assets/memories/fun/1.jpg";
import fun2 from "../../assets/memories/fun/2.jpg";
import fun3 from "../../assets/memories/fun/3.jpg";
import fun4 from "../../assets/memories/fun/4.jpg";

const photos = [
  {
    img: fun1,
    className:
      "top-6 left-8 w-52 md:w-72 rotate-[-8deg] z-20",
  },
  {
    img: fun2,
    className:
      "top-24 right-10 w-48 md:w-64 rotate-[7deg] z-10",
  },
  {
    img: fun3,
    className:
      "bottom-12 left-24 w-56 md:w-72 rotate-[5deg] z-30",
  },
  {
    img: fun4,
    className:
      "bottom-6 right-24 w-52 md:w-64 rotate-[-6deg] z-20",
  },
];

export default function BeforeFilm() {
  return (
    <FullScreen className="bg-black overflow-hidden">

      <div className="relative w-full h-screen max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-50"
        >
          <h2 className="text-4xl md:text-7xl font-light">
            Before all of this...
          </h2>

          <p className="mt-5 text-zinc-400 text-lg md:text-xl">
            we were just kids.
          </p>
        </motion.div>

        {/* Photos */}

        {photos.map((photo, i) => (
          <motion.img
            key={i}
            src={photo.img}
            alt=""
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5 + i * 0.35,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`absolute rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,.45)] ${photo.className}`}
          />
        ))}

        {/* Bottom Text */}

        <motion.div
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
            delay: 2.1,
            duration: 0.6,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-light">
            We made videos...
          </h3>

          <p className="mt-4 text-zinc-500 text-lg">
            just for fun.
          </p>
        </motion.div>

      </div>

    </FullScreen>
  );
}