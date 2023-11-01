import { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

function ButtonWrapper({ children }: PropsWithChildren<Props>) {
  return (
    <AnimatePresence>
      <motion.button whileHover={{ scale: 1.1 }} className="button">
        {children}
      </motion.button>
    </AnimatePresence>
  );
}

export default ButtonWrapper;
