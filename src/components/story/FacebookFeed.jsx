import { motion } from "framer-motion";

import FacebookPost from "./FacebookPost";

import avatar from "../../assets/facebook/avatar.jpeg";

import post1 from "../../assets/facebook/post1.jpeg";
import post2 from "../../assets/facebook/post2.jpeg";
import post3 from "../../assets/facebook/post3.jpeg";
import festival from "../../assets/facebook/festival.jpeg";

const posts = [
  {
    name: "Nahid Parvez Mafi",
    avatar,
    image: post1,
    caption: "Another random day with the boys 😂",
  },

  {
    name: "Nahid Parvez Mafi",
    avatar,
    image: post2,
    caption: "Life was simple.",
  },

  {
    name: "Nahid Parvez Mafi",
    avatar,
    image: post3,
    caption: "Just making videos for fun.",
  },

  {
    name: "International Children's Film Festival",
    avatar,
    image: festival,
    caption:
      "10th International Children's Film Festival • Event • Open for Submission",
  },
];

export default function FacebookFeed() {
  return (
    <div className="relative h-full bg-[#f0f2f5] overflow-hidden">

      {/* Facebook Header */}

      <div className="sticky top-0 z-50 bg-white border-b border-zinc-200">

        <div className="flex items-center justify-between px-4 pt-5 pb-3">

          <h1 className="text-[#1877F2] text-3xl font-bold">
            facebook
          </h1>

          <div className="flex gap-2">

            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
              🔍
            </div>

            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
              💬
            </div>

          </div>

        </div>

      </div>

      {/* Feed */}

      <motion.div
        initial={{
          y: 0,
        }}
        whileInView={{
          y: [
  0,
  -360,
  -760,
  -980,
],
        }}
        viewport={{
          once: true,
        }}
        transition={{
  duration: 7.6,

  times: [
    0,
    0.18,
    0.42,
    0.78,
  ],

  ease: [
    "linear",
    "linear",
    [0.22, 1, 0.36, 1],
  ],
}}
      >
        {posts.map((post, index) => (
          <FacebookPost
    key={index}
    {...post}
    isFestival={index === posts.length - 1}
/>
        ))}
      </motion.div>

    </div>
  );
}