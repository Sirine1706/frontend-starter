import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  text: string;
  path: string;
};

function ButtonLink({ text, path }: Props) {
  return (
    <AnimatePresence>
      <motion.div whileHover={{ scale: 1.1 }} className="button">
        <Link to={path}>{text}</Link>
      </motion.div>
    </AnimatePresence>
  );
}

export default ButtonLink;
