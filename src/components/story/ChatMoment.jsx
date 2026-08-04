import { motion } from "framer-motion";
import FullScreen from "../layout/FullScreen";

const messages = [
  {
    side: "right",
    text: "Bro...",
    delay: 0.4,
  },
  {
    side: "right",
    text: "I just found a film festival on Facebook.",
    delay: 1.2,
  },
  {
    side: "left",
    text: "😂😂😂",
    delay: 2.2,
  },
  {
    side: "left",
    text: "Are you serious?",
    delay: 3,
  },
  {
    side: "right",
    text: "Why not?",
    delay: 4,
  },
  {
    side: "left",
    text: "We don't even have a camera.",
    delay: 5,
  },
  {
    side: "right",
    text: "We'll figure it out.",
    delay: 6,
  },
  {
    side: "left",
    text: "........",
    delay: 7.1,
  },
  {
    side: "left",
    text: "Okay.",
    delay: 8,
  },
  {
    side: "left",
    text: "Let's do it.",
    delay: 8.7,
  },
];

export default function ChatMoment() {
  return (
    <FullScreen className="bg-black overflow-hidden">

      <div className="w-full max-w-2xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center uppercase tracking-[0.3em] text-zinc-600 mb-14"
        >
          One message changed everything.
        </motion.p>

        <div className="space-y-4">

          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
                scale: .95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: msg.delay,
                duration: .45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex ${
                msg.side === "right"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-5 py-3 rounded-3xl text-lg md:text-xl ${
                  msg.side === "right"
                    ? "bg-blue-600 text-white rounded-br-lg"
                    : "bg-zinc-800 text-white rounded-bl-lg"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </FullScreen>
  );
}