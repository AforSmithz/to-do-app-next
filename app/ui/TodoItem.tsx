import { FaCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";

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
    <section
      className={`w-full flex flex-col items-center justify-center ${
        item.isComplete && "opacity-50"
      }`}
    >
      <div
        className={`bg-white drop-shadow text-to-do-black font-medium w-full flex items-center justify-center gap-3 rounded-lg p-3`}
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
    </section>
  );
}
