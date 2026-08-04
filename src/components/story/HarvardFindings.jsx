import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

const findings = [
  "Unorthodox Skill Set",
  "Resilient Mindset",
  "Personality & Humor",
];

export default function HarvardFindings() {
  return (
    <FullScreen className="bg-black">

      <div className="max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="uppercase tracking-[0.45em] text-zinc-600"
        >
          Harvard Business School
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .3,
            duration: .8,
            ease:[0.22,1,0.36,1]
          }}
          className="mt-8 text-5xl md:text-8xl font-light leading-tight"
        >
          They found
          <br />
          three things.
        </motion.h1>

        <div className="mt-24 space-y-12">

          {findings.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 1 + index * .45,
                duration: .6,
              }}
              className="flex items-center justify-center gap-8"
            >
              <div className="text-5xl md:text-6xl font-extralight text-zinc-700 w-20">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="h-px w-16 bg-zinc-800" />

              <h2 className="text-2xl md:text-4xl font-light text-left w-[420px]">
                {item}
              </h2>
            </motion.div>
          ))}

        </div>

      </div>

    </FullScreen>
  );
}