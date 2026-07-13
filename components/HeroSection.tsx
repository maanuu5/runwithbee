/** Hero section with the brand title and track dome illustration. */
export function HeroSection() {
  return (
    <section className="relative pt-4 pb-0 flex flex-col items-center justify-center text-center z-10">
      <div className="px-6 w-full">
        <h1 className="text-[11vw] leading-[0.8] font-black tracking-tighter uppercase text-brandPink hero-text invisible-on-load">
          RUN
        </h1>
        <h1 className="text-[11vw] leading-[0.8] font-black tracking-tighter uppercase text-ink hero-text invisible-on-load">
          WITH BEE
        </h1>

        <p className="mt-4 text-base font-bold text-body max-w-xl mx-auto hero-text invisible-on-load">
          A community where every pace belongs
        </p>
      </div>

      {/* Track Dome */}
      <div className="mt-8 w-full max-w-4xl mx-auto h-24 sm:h-32 md:h-48 bg-brandPink rounded-t-[100px] sm:rounded-t-[150px] md:rounded-t-[300px] border-b-0 relative flex justify-center items-end border-t-4 border-l-4 border-r-4 border-brandPink overflow-hidden hero-text invisible-on-load z-10">
        <div className="absolute left-[8%] right-[8%] md:left-[90px] md:right-[90px] h-[80%] rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[250px] border-t-4 border-l-4 border-r-4 border-white/60 bottom-0" />
        <div className="absolute left-[16%] right-[16%] md:left-[180px] md:right-[180px] h-[60%] rounded-t-[60px] sm:rounded-t-[100px] md:rounded-t-[200px] border-t-4 border-l-4 border-r-4 border-white/60 bottom-0" />
        <div className="absolute left-[24%] right-[24%] md:left-[270px] md:right-[270px] h-[40%] bg-canvas rounded-t-[40px] sm:rounded-t-[80px] md:rounded-t-[150px] bottom-0 border-t-4 border-l-4 border-r-4 border-white/60" />
      </div>
    </section>
  );
}
