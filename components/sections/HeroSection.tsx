import { AeroButton } from '@/components/ui/AeroButton';
import { MetricCard } from '@/components/ui/MetricCard';

export function HeroSection() {
  return (
    <section id="home" className="section-base pt-20 md:pt-24">
      <div className="container-max grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
        <header>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-600">Portfolio</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Hi, I&apos;m Bryan.</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg">
            I build dependable products with clear architecture, thoughtful UX, and maintainable front-end systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AeroButton href="#projects">View Projects</AeroButton>
            <AeroButton href="#contact" className="bg-slate-900 text-white hover:bg-slate-800">
              Contact Me
            </AeroButton>
          </div>
        </header>

        <dl className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <MetricCard label="Years building" value="5+" />
          <MetricCard label="Projects shipped" value="30+" />
          <MetricCard label="Teams supported" value="10+" />
        </dl>
      </div>
    </section>
  );
}
