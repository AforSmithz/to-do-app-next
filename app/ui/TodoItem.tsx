import { FaCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

interface TodoItemProps {
  item: {
    id: number;
    task: string;
    isComplete: boolean;
  };
  handleMark: (id: number) => void;
  handleDelete: (id: number) => void;
}

export default function TodoItem({
  item,
  handleMark,
  handleDelete,
}: TodoItemProps) {
  return (
    <motion.section
      layout
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: item.isComplete ? 0.5 : 1 }}
      exit={{ y: 100, opacity: 0 }}
      className={`w-full flex flex-wrap flex-col items-center justify-center origin-bottom ${
        item.isComplete && "opacity-50"
      }`}
    >
      <div
        className={`bg-white drop-shadow text-to-do-black font-medium w-full flex items-center justify-between gap-3 rounded-lg p-3`}
      >
        <div
          onClick={() => handleMark(item.id)}
          className={`${
            item.isComplete ? "text-emerald-600" : "text-stone-100"
          } text-lg cursor-pointer`}
        >
          <FaCheckCircle />
        </div>
        <div className="flex justify-start grow">{item.task}</div>
        <div
          onClick={() => handleDelete(item.id)}
          className="text-to-do-error text-2xl cursor-pointer"
        >
          <IoIosRemoveCircleOutline />
        </div>
      </div>
    </motion.section>
  );
}
