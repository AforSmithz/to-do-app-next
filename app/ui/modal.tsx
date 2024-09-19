interface ModalProps {
  setModal: (value: boolean) => void;
  handleClear: () => void;
}

export default function Modal({ setModal, handleClear }: ModalProps) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="px-16 py-10 flex items-center justify-center">
              <p className="text-blueGray-500 font-medium text-sm">
                Confirm to clear all todos?
              </p>
            </div>
            <div className="bg-stone-50 px-8 py-3 flex items-center justify-center gap-3 border-t border-solid border-blueGray-200 rounded-b-xl">
              <button
                className="background-transparent font-semibold px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-lg"
                type="button"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-button-red text-white font-semibold text-sm px-8 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-lg"
                type="button"
                onClick={handleClear}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setModal(false)}
        className="opacity-25 fixed inset-0 z-40 bg-black"
      />
    </>
  );
}
