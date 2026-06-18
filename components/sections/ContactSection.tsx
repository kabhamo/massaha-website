"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-divider/60 bg-white/30">
      <div className="container-px py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              subtitle={t.contact.subtitle}
            />
            <Reveal delay={0.1} className="mt-10">
              <ContactInfo />
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
