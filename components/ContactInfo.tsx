"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

const WHATSAPP_NUMBER = "972543432517"; // +972 54 343 2517
const WHATSAPP_DISPLAY = "+972 54 343 2517";

export function ContactInfo({ withWhatsAppButton = true }: { withWhatsAppButton?: boolean }) {
  const { t } = useLanguage();
  const info = t.contact.info;

  return (
    <div className="space-y-8">
      <dl className="space-y-6">
        <div>
          <dt className="eyebrow">{info.emailLabel}</dt>
          <dd className="mt-1">
            <a href="mailto:hello@massaha.arch" className="link-underline text-lg text-ink">
              hello@massaha.arch
            </a>
          </dd>
        </div>

        <div>
          <dt className="eyebrow">{info.instagramLabel}</dt>
          <dd className="mt-1">
            <a
              href="https://www.instagram.com/massaha.arch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-ink hover:text-earth"
            >
              <InstagramIcon className="h-5 w-5" />
              @massaha.arch
            </a>
          </dd>
        </div>

        <div>
          <dt className="eyebrow">{info.whatsappLabel}</dt>
          <dd className="mt-1">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-lg text-ink"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </dd>
        </div>

        <div>
          <dt className="eyebrow">{info.locationLabel}</dt>
          <dd className="mt-1 text-lg text-ink">{info.location}</dd>
        </div>
      </dl>

      {withWhatsAppButton && (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {info.whatsappCta}
        </a>
      )}
    </div>
  );
}
