import { motion } from "framer-motion";

const Backdrop = (props) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center w-full h-full"
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;
