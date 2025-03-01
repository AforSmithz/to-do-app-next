import Button from "ui/Button";

interface HeadingProps {
  isAdding: boolean;
  setIsAdding: (adding: boolean) => void;
  setModal: (isOpen: boolean) => void;
}

export default function Heading({
  isAdding,
  setIsAdding,
  setModal,
}: HeadingProps) {
  return (
    <section className="bg-[#fafaf9] w-full sm:h-20 z-40 flex flex-wrap gap-3 justify-between">
      <div className="text-to-do-title font-bold sm:text-xl md:text-2xl flex justify-start items-end ">
        Things you should be doing today...
      </div>
      <div className="flex items-end justify-center gap-5">
        {!isAdding && (
          <Button
            className=" bg-to-do-blue text-to-do-white"
            handler={() => setIsAdding(true)}
            text="Add New"
          />
        )}
        <Button
          className="text-to-do-red"
          handler={() => setModal(true)}
          text="Clear"
        />
      </div>
    </section>
  );
}
