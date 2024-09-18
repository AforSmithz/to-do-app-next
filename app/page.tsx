export default function Home() {
  return (
    <main className="h-screen w-full flex items-start justify-center pt-20">
      <section className="flex justify-between mx-80">
        <div className=" flex justify-start items-end mr-40 font-bold text-2xl">
          Things you should be doing today...
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="bg-to-do-blue rounded-lg px-4 py-2 flex items-center justify-center font-semibold text-to-do-white">
            Add New
          </div>
          <div className="text-to-do-red flex items-center justify-center font-semibold">
            Clear
          </div>
        </div>
      </section>
    </main>
  );
}
