import type { Run } from "../lib/types";

interface WeeklyScheduleProps {
  runs: Run[];
}

/** Weekly schedule cards section. */
export function WeeklySchedule({ runs }: WeeklyScheduleProps) {
  return (
    <section
      id="schedule"
      className="py-24 px-6 max-w-7xl mx-auto border-t-4 border-ink animate-section invisible-on-load"
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-lg leading-none">
          <span className="inline-flex items-center justify-center bg-brandPink text-white rounded-full w-14 h-14 text-2xl mr-4 align-middle mb-2">
            {/* Calendar icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </span>
          Weekly
          <br />
          Schedule
        </h2>
        <div className="max-w-sm">
          <p className="text-body font-bold mb-6 text-lg">
            Join us every week for guided runs, community support, and good
            vibes. All paces welcome.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {runs.map((run, idx) => (
          <div
            key={idx}
            className="bg-ink text-white p-10 rounded-[2rem] flex flex-col justify-between group hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_rgba(255,20,147,1)] border-2 border-ink hover:shadow-[8px_8px_0px_0px_rgba(255,20,147,1)] cursor-pointer"
          >
            <div>
              <h3 className="text-3xl font-black mb-2 text-brandPink uppercase tracking-tight">
                {run.where}
              </h3>
              <p className="text-xl font-bold mb-8">{run.when}</p>
            </div>
            <button
              type="button"
              className="self-start bg-white text-ink px-6 py-2 rounded-full font-black uppercase text-sm shadow-[2px_2px_0px_0px_rgba(255,20,147,1)] hover:bg-brandPink hover:text-white transition-colors"
            >
              RSVP
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
