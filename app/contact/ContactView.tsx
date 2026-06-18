"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Reveal } from "@/components/Reveal";

export function ContactView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="container-px py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ContactInfo />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="container-px pb-24 md:pb-32">
        <Reveal>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-divider bg-divider/30">
            <iframe
              title={t.contact.info.location}
              src="https://www.google.com/maps?q=Dr%20George%20Wise%20St%2022%2C%20Tel%20Aviv&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
