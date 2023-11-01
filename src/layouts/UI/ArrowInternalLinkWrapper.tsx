import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import ArrowDownIcon from "../../components/icons/ArrowDownIcon";

type Props = {};

function ArrrowInternalLink({ children }: PropsWithChildren<Props>) {
  return (
    <Link
      to=""
      className="text-secondary flex items-center gap-1 group text-sm sm:text-base"
    >
      {children}{" "}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowDownIcon className="transform -rotate-90 hidden group-hover:block" />
        </motion.div>
      </AnimatePresence>
    </Link>
  );
}

export default ArrrowInternalLink;
