import { SectionHeader } from '@/components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="section-base" aria-labelledby="about-heading">
      <div className="container-max">
        <SectionHeader
          eyebrow="About"
          title="Building products with clarity"
          description="Use this section for your background, approach, and the kind of work you enjoy most."
        />
        <div className="max-w-3xl space-y-4 text-slate-700">
          <p>
            This structure is intentionally lightweight so you can iterate on voice, storytelling, and visuals without
            changing the component architecture.
          </p>
          <p>
            Keep this content focused on your strengths, values, and outcomes you create for users and teams.
          </p>
        </div>
      </div>
    </section>
  );
}
