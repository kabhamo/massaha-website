# Massaha — مساحة

Bilingual (Arabic + English) website for **Massaha**, an architectural consulting, planning & guidance studio.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Full RTL/LTR support with a live language toggle.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint |

## Project structure

```
app/
  layout.tsx              Root layout: fonts, language provider, nav, footer, page transitions
  page.tsx                Home (Hero, About, Services, Projects, Process, Testimonials, Contact)
  about/                  About page (server page + AboutView client)
  services/               Services page
  projects/               Projects gallery + [slug] detail pages
  contact/                Contact page
components/
  Navbar / Footer / LanguageToggle / LogoMark / icons
  ProjectCard / ServiceCard / FounderCard / ContactForm / ContactInfo
  Reveal / PageTransition / PageHeader / SectionHeader
  sections/               Home page sections
contexts/
  LanguageContext.tsx     AR/EN state + RTL switching, persisted to localStorage
lib/
  translations.ts         All UI strings (EN + AR)
  data.ts                 Projects, services, founders (bilingual)
```

## Customising content

- **Text**: all UI strings live in [`lib/translations.ts`](lib/translations.ts).
- **Projects / services / founders**: edit [`lib/data.ts`](lib/data.ts).
- **Founder names**: replace `Besan`, `[Friend 1]`, `[Friend 2]` in `lib/data.ts`.
- **Logo**: the brand mark is rendered as inline SVG in [`components/LogoMark.tsx`](components/LogoMark.tsx). To use the supplied raster logo instead, drop it at `public/logo.png` and swap the `<LogoMark />` usages for `next/image`.
- **Colors / fonts**: [`tailwind.config.ts`](tailwind.config.ts).

## Contact form

By default the form opens the visitor's email client (`mailto:`). To deliver messages
directly, create a [Formspree](https://formspree.io) form and set:

```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

(see `.env.example`).

## Images

Project and founder imagery is served from Unsplash via `next/image`
(configured in `next.config.mjs`). Replace the URLs in `lib/data.ts` with your own
photography for production.

## Notes

- WhatsApp number is set in `components/ContactInfo.tsx` (`WHATSAPP_NUMBER` / `WHATSAPP_DISPLAY`).
- The contact page embeds a live Google Maps view of the studio (Dr George Wise 22, Tel Aviv).
```
