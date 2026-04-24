import { NAV_ITEMS } from '@/lib/navigation';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-glass-border/70 bg-cloud-white/65 backdrop-blur-md">
      <div className="container-max">
        <nav aria-label="Primary" className="flex min-h-16 items-center justify-between gap-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-navy-deep">
            bryan.dev
          </a>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="text-sm text-navy-deep/75 transition hover:text-aero-blue" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
