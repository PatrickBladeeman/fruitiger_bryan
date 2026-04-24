import { AeroButton } from '@/components/ui/AeroButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TagPill } from '@/components/ui/TagPill';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-base" aria-labelledby="projects-heading">
      <div className="container-max">
        <SectionHeader
          eyebrow="Projects"
          title="Featured work"
          description="A reusable project card pattern with tags and actions."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {[1, 2].map((project) => (
            <GlassCard key={project} className="flex h-full flex-col">
              <h3 className="text-lg font-semibold text-navy-deep">Project Name {project}</h3>
              <p className="mt-3 flex-1 text-navy-deep/80">Add project summary, constraints, and measurable outcomes.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <TagPill label="Next.js" />
                <TagPill label="TypeScript" />
                <TagPill label="Tailwind" />
              </div>
              <div className="mt-5">
                <AeroButton href="#">Case Study</AeroButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
