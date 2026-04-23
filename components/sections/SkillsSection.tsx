import { SectionHeader } from '@/components/ui/SectionHeader';
import { TagPill } from '@/components/ui/TagPill';

const SKILLS = ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Design Systems', 'Accessibility'];

export function SkillsSection() {
  return (
    <section id="skills" className="section-base" aria-labelledby="skills-heading">
      <div className="container-max">
        <SectionHeader
          eyebrow="Skills"
          title="Core capabilities"
          description="A simple, reusable tag system you can expand by category later."
        />
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <TagPill key={skill} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
