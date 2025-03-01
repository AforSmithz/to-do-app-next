import { motion } from "framer-motion";

export default function NoneCard() {
  return (
    <motion.section
      layout
      className="w-full flex flex-col items-center justify-center"
    >
      <div className=" bg-white drop-shadow text-to-do-black font-medium text-sm w-full flex items-center justify-center rounded-lg p-11">
        Nothing to-do yet.
      </div>
    </motion.section>
  );
}
