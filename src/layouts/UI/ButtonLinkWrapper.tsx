import { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  path: string;
};

function ButtonLinkWrapper({ children, path }: PropsWithChildren<Props>) {
  return (
    <AnimatePresence>
      <motion.div whileHover={{ scale: 1.1 }} className="button">
        <Link to={path}>{children}</Link>
      </motion.div>
    </AnimatePresence>
  );
}

export default ButtonLinkWrapper;
