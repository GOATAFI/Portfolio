import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function FadeText({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}