export default function Home() {
  return (
    <main className="bg-[#fafaf9] h-screen w-full flex flex-col items-center justify-start gap-5 pt-20 px-80">
      <section className="w-full flex justify-between">
        <div className=" flex justify-start items-end font-bold text-2xl">
          Things you should be doing today...
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="bg-to-do-blue text-to-do-white rounded-lg px-4 py-2 flex items-center justify-center font-semibold">
            Add New
          </div>
          <div className="text-to-do-red flex items-center justify-center font-semibold">
            Clear
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center">
        <div className=" bg-white drop-shadow text-to-do-black font-medium w-full flex items-center justify-center rounded-lg p-9">
          Nothing to-do yet.
        </div>
      </section>
    </main>
  );
}
