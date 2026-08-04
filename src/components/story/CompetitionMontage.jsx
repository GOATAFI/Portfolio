import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

import img1 from "../../assets/competition/1.jpg";
import img2 from "../../assets/competition/2.jpg";
import img3 from "../../assets/competition/3.jpg";
import img4 from "../../assets/competition/4.jpg";
import img5 from "../../assets/competition/5.jpg";
import img6 from "../../assets/competition/6.jpg";

const photos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

export default function CompetitionMontage() {
  return (
    <FullScreen className="bg-black overflow-hidden">

      <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden">

        {photos.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt=""
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            whileInView={{
              opacity: [0, 1, 1, 0],
              scale: [1.08, 1, 1.04],
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 1.2,
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}

        {/* Final Overlay */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: photos.length * 1.2,
            duration: .8,
          }}
          className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center"
        >
          <p className="uppercase tracking-[0.35em] text-zinc-300">
            After 7 unforgettable days...
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-light text-white text-center">
            We became
            <br />
            Champions.
          </h1>
        </motion.div>

      </div>

    </FullScreen>
  );
}