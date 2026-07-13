export function Footer() {
    return (
        <footer className="relative bg-ink text-white/80">
            <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="text-lg font-bold tracking-tight text-white">
                            Run With Bee
                        </div>
                        <p className="text-sm leading-relaxed text-white/50 max-w-xs">
                            A community run club welcoming every pace, every person. Join us on the road.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                            Navigate
                        </div>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                { label: 'Schedule', href: '#schedule' },
                                { label: 'Join', href: '#join' },
                                { label: 'About', href: '#about' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        className="text-white/60 hover:text-brandPink transition-colors duration-200"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                            Connect
                        </div>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a
                                    className="text-white/60 hover:text-brandPink transition-colors duration-200"
                                    href="https://www.instagram.com/_runwithbee/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white/60 hover:text-brandPink transition-colors duration-200"
                                    href="mailto:hello@runwithbee.com"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider + Bottom */}
                <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="text-xs text-white/30">
                        {new Date().getFullYear()} Run With Bee. All rights reserved.
                    </div>
                    <div className="text-xs text-white/30">
                        Bengaluru, India
                    </div>
                </div>
            </div>
        </footer>
    );
}
