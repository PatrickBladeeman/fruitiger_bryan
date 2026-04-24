import { AeroButton } from '@/components/ui/AeroButton';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ContactSection() {
  return (
    <section id="contact" className="section-base" aria-labelledby="contact-heading">
      <div className="container-max">
        <SectionHeader
          eyebrow="Contact"
          title="Let&apos;s build something useful"
          description="Keep this area simple: one clear call to action and essential contact links."
        />
        <div className="rounded-panel-chrome p-6">
          <p className="text-navy-deep/80">Available for full-time roles, consulting, and collaboration.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <AeroButton href="mailto:hello@example.com">Email Me</AeroButton>
            <AeroButton href="#" className="aero-button--primary">
              LinkedIn
            </AeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}
