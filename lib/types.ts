/** Shared type definitions for Run With Bee */

/** A scheduled community run event. */
export interface Run {
  /** Color tone key for card styling */
  tone: "peach" | "ochre" | "cream";
  /** Human-readable day and time, e.g. "Wed 6:15 PM" */
  when: string;
  /** Location or route name */
  where: string;
}
