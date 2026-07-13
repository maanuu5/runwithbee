/** Community photo collage section. */
export function CommunityMoments() {
  const cards = [
    { rot: "-rotate-6", y: "translate-y-8", color: "bg-white" },
    { rot: "rotate-3", y: "-translate-y-4", color: "bg-brandPink" },
    { rot: "-rotate-2", y: "translate-y-12", color: "bg-white" },
    { rot: "rotate-6", y: "translate-y-2", color: "bg-brandPink" },
  ] as const;

  return (
    <section className="w-full bg-surfaceSoft border-t border-ink/10 pb-24 pt-16 px-6 relative z-0">
      <div className="max-w-7xl mx-auto animate-section invisible-on-load">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-ink mb-4">
            Community Moments
          </h2>
          <div className="w-24 h-2 bg-brandPink rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
          {cards.map((style, i) => (
            <div
              key={i}
              className={`aspect-[4/5] ${style.color} border-4 border-ink p-3 rounded-xl flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 ${style.rot} ${style.y} transition-all duration-300 group cursor-pointer`}
            >
              <div className="w-full h-full border-2 border-dashed border-ink/20 rounded-lg flex items-center justify-center bg-surfaceSoft group-hover:border-ink/50 transition-colors relative overflow-hidden">
                <div className="text-center p-4">
                  {/* Camera icon */}
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-ink/40 group-hover:scale-125 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                    />
                  </svg>
                  <p className="text-xs font-bold text-ink/70 uppercase">
                    IG Drop {i + 1}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center px-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-ink">
                  @_runwithbee
                </span>
                <span className="text-[10px] font-black text-ink">1.2k</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
