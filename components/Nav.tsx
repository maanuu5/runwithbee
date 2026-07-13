import Image from "next/image";
import Link from "next/link";

/** Top navigation bar. */
export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-canvas border-b-4 border-ink transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo and Brand Name */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-ink bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/logo.jpg"
              alt="Run With Bee logo"
              fill
              sizes="48px"
              priority
              className="object-cover"
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="text-xl font-black tracking-tighter text-ink uppercase">
              Run With Bee
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 md:gap-10">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-12 font-bold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">
            <Link
              href="/#schedule"
              className="hover:text-brandPink transition-colors relative"
            >
              Schedule
            </Link>
            <Link
              href="/gallery"
              className="hover:text-brandPink transition-colors relative"
            >
              Gallery
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="#join"
            className="flex h-8 sm:h-10 md:h-12 items-center justify-center rounded-full bg-ink px-4 sm:px-6 md:px-8 text-[10px] sm:text-xs md:text-sm font-bold text-white shadow-sm hover:bg-brandPink transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider whitespace-nowrap"
          >
            <span className="hidden sm:inline">Join The Crew</span>
            <span className="sm:hidden">Join</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
