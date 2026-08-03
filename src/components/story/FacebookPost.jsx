import { motion } from "framer-motion";

export default function FacebookPost({
  name,
  avatar,
  image,
  caption,
  isFestival = false,
}) {
  return (
    <motion.div
      className="bg-white border-b border-zinc-200"
    >
      {/* Header */}

      <div className="flex items-center gap-3 px-4 py-3">

        <img
          src={avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />

        <div>

          <h3 className="font-semibold text-[15px] text-black">
            {name}
          </h3>

          <p className="text-xs text-zinc-500">
            2 hrs · 🌎
          </p>

        </div>

      </div>

      {/* Caption */}

      {caption && (

        <p className="px-4 pb-3 text-[15px] leading-relaxed text-black">
          {caption}
        </p>

      )}

      {/* Image */}

      {image && (

        <img
          src={image}
          alt=""
          className="w-full object-cover"
        />

      )}

      {/* Footer */}

      <div className="flex justify-around py-3 text-sm text-zinc-500 border-t">

        <span>👍 Like</span>

        <span>💬 Comment</span>

        <span>↗ Share</span>

      </div>

    </motion.div>
  );
}