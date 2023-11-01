import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import ArrowDownIcon from "../icons/ArrowDownIcon";

type Props = {
  text: string;
  path: string;
};

function ArrrowInternalLink({ text, path }: Props) {
  return (
    <Link
      to={path}
      className="text-secondary flex items-center gap-1 group text-sm sm:text-base"
    >
      {text}{" "}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowDownIcon className="transform w-6 h-6 sm:w-8 sm:h-8 -rotate-90 hidden group-hover:block" />
        </motion.div>
      </AnimatePresence>
    </Link>
  );
}

export default ArrrowInternalLink;
