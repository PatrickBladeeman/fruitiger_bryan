import { NAV_ITEMS } from '@/lib/navigation';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-slate-50/90 backdrop-blur">
      <div className="container-max">
        <nav aria-label="Primary" className="flex min-h-16 items-center justify-between gap-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-slate-900">
            bryan.dev
          </a>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="text-sm text-slate-700 transition hover:text-slate-900" href={item.href}>
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
