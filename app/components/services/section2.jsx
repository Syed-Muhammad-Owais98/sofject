export default function Section2() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-24 max-sm:py-6 grid grid-cols-3 text-center *:p-8 *:border-2 *:border-primary max-sm:*:p-6 max-sm:*:border">
      <h2 className="text-4xl font-serif max-md:text-3xl max-sm:text-2xl font-medium col-span-3 !border-b-0 rounded-t-xl">
        <span className="text-primary">What do we </span>
        <span>have to </span>
        <span className="text-primary">show for it?</span>
      </h2>

      <div className="flex flex-col gap-2 rounded-bl-xl">
        <p className="text-6xl max-md:text-5xl max-sm:text-3xl text-primary font-bold">0.1k</p>
        <p className="font-medium text-sm max-sm:text-xs">Success rate</p>
      </div>
      <div className="flex flex-col gap-2 !border-x-0 !rounded-t-none">
        <p className="text-6xl max-md:text-5xl max-sm:text-3xl text-primary font-bold">3.5k</p>
        <p className="font-medium text-sm max-sm:text-xs">Softwares designed</p>
      </div>
      <div className="flex flex-col gap-2 rounded-br-xl">
        <p className="text-6xl max-md:text-5xl max-sm:text-3xl text-primary font-bold">300+</p>
        <p className="font-medium text-sm max-sm:text-xs">Global clients</p>
      </div>
    </section>
  );
}
