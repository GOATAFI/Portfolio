import FullScreen from "../layout/FullScreen";
import { motion } from "framer-motion";

import fun1 from "../../assets/memories/fun/1.jpg";
import fun2 from "../../assets/memories/fun/2.jpg";
import fun3 from "../../assets/memories/fun/3.jpg";
import fun4 from "../../assets/memories/fun/4.jpg";

export default function BeforeFilm() {
  return (
    <FullScreen className="overflow-hidden bg-black">

      <div className="max-w-6xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center text-4xl md:text-7xl font-light leading-tight"
        >
          Before all of this...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: .5,
            duration: .6,
          }}
          className="mt-8 text-center text-zinc-400 text-lg"
        >
          we were just kids.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24">

          {[fun1, fun2, fun3, fun4].map((img, i) => (

            <motion.img
              key={i}
              src={img}
              initial={{
                opacity:0,
                y:60,
                rotate:(i%2===0?-6:6),
                scale:.92
              }}
              whileInView={{
                opacity:1,
                y:0,
                rotate:(i%2===0?-3:3),
                scale:1
              }}
              viewport={{ once:true }}
              transition={{
                delay:.35*i+.8,
                duration:.7,
                ease:[0.22,1,0.36,1]
              }}
              className="rounded-xl shadow-2xl"
            />

          ))}

        </div>

        <motion.h3
          initial={{
            opacity:0,
            y:25
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{ once:true }}
          transition={{
            delay:2.6,
            duration:.6
          }}
          className="mt-24 text-center text-3xl md:text-5xl font-light"
        >
          We made videos...
        </motion.h3>

        <motion.p
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          viewport={{ once:true }}
          transition={{
            delay:2.9
          }}
          className="mt-5 text-center text-zinc-500"
        >
          just for fun.
        </motion.p>

      </div>

    </FullScreen>
  );
}