type Tone = "pink" | "teal" | "lavender" | "peach" | "ochre" | "cream";

const toneClass: Record<Tone, string> = {
  pink: "bg-brandPink text-white",
  teal: "bg-brandTeal text-white",
  lavender: "bg-brandLavender text-ink",
  peach: "bg-brandPeach text-ink",
  ochre: "bg-brandOchre text-ink",
  cream: "bg-surfaceCard text-ink",
};

/**
 * A reusable feature/info card with a tinted background.
 * Currently reserved for future use (e.g., pace calculator, blog highlights).
 */
export function FeatureCard({
  tone,
  title,
  description,
}: {
  tone: Tone;
  title: string;
  description: string;
}) {
  return (
    <div className={`rounded-[24px] p-8 ${toneClass[tone]}`}>
      <div className="text-sm font-semibold uppercase tracking-widest opacity-90">
        Run club
      </div>
      <div className="mt-3 text-2xl font-display tracking-[-0.03em]">
        {title}
      </div>
      <p className="mt-3 text-sm leading-6">{description}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="h-10 w-10 rounded-xl bg-black/10" />
        <div className="rounded-full bg-black/10 px-3 py-1 text-xs font-semibold">
          Go
        </div>
      </div>
    </div>
  );
}
