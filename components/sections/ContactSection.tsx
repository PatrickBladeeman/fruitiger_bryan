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
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-slate-700">Available for full-time roles, consulting, and collaboration.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <AeroButton href="mailto:hello@example.com">Email Me</AeroButton>
            <AeroButton href="#" className="bg-slate-900 text-white hover:bg-slate-800">
              LinkedIn
            </AeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}
