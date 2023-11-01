import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <AnimatePresence>
      <motion.button whileHover={{ scale: 1.1 }} className="button">
        {text}
      </motion.button>
    </AnimatePresence>
  );
}

export default Button;
