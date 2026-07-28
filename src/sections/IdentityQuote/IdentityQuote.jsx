import FullScreen from "../../components/layout/FullScreen";
import { motion } from "framer-motion";

export default function IdentityQuote() {
  return (
    <FullScreen>

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="text-center text-4xl md:text-7xl font-light leading-tight max-w-5xl"
      >
        Stories made me curious.
      </motion.h2>

    </FullScreen>
  );
}