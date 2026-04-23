import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-base" aria-labelledby="experience-heading">
      <div className="container-max">
        <SectionHeader
          eyebrow="Experience"
          title="Selected roles"
          description="A maintainable card-based list for your role history."
        />
        <div className="grid gap-4">
          <GlassCard>
            <h3 className="text-lg font-semibold">Role Title · Company</h3>
            <p className="mt-1 text-sm text-slate-600">2023 — Present</p>
            <p className="mt-3 text-slate-700">Describe scope, impact, and notable outcomes here.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-semibold">Previous Role · Company</h3>
            <p className="mt-1 text-sm text-slate-600">2021 — 2023</p>
            <p className="mt-3 text-slate-700">Add concise bullets or a short summary of responsibilities.</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
