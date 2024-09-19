import Button from "ui/Button";

interface ModalProps {
  setModal: (value: boolean) => void;
  handleClear: () => void;
}

export default function Modal({ setModal, handleClear }: ModalProps) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className=" bg-white outline-none border-0 rounded-xl shadow-lg relative flex flex-col w-full focus:outline-none">
            <div className="px-16 py-10 flex items-center justify-center">
              <p className="text-blueGray-500 font-medium text-sm">
                Confirm to clear all todos?
              </p>
            </div>
            <div className="bg-stone-50 border-t border-solid border-blueGray-200 px-8 py-3 flex items-center justify-center gap-3  rounded-b-xl">
              <Button text="Cancel" handler={() => setModal(false)} />
              <Button
                className="bg-button-red text-white"
                text="Confirm"
                handler={handleClear}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}
