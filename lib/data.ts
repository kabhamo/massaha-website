import type { Language } from "@/lib/translations";

type Bilingual = Record<Language, string>;

export type ProjectCategory = "residential" | "commercial" | "interior" | "concept";

export interface Project {
  slug: string;
  name: Bilingual;
  category: ProjectCategory;
  year: string;
  location: Bilingual;
  scope: Bilingual;
  description: Bilingual;
  image: string;
  gallery: string[];
}

// Stable Unsplash architecture photographs (served via next/image).
const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "villa-al-nour",
    name: { en: "Villa Al-Nour", ar: "فيلا النور" },
    category: "residential",
    year: "2024",
    location: { en: "Haifa", ar: "حيفا" },
    scope: { en: "Full architectural design & interior", ar: "تصميم معماري كامل وتصميم داخلي" },
    description: {
      en: "A family villa organised around a central light well, where every room borrows daylight from a quiet inner courtyard. Warm stone, oak and lime plaster keep the palette calm and tactile.",
      ar: "فيلا عائلية منظّمة حول فناء ضوئي مركزي، حيث تستعير كل غرفة ضوء النهار من فناء داخلي هادئ. يحافظ الحجر الدافئ والبلوط والجص الجيري على لوحة ألوان هادئة وملموسة.",
    },
    image: U("1600585154340-be6161a56a0c"),
    gallery: [U("1600566753086-00f18fb6b3ea"), U("1600210492486-724fe5c67fb0"), U("1600607687939-ce8a6c25118c")],
  },
  {
    slug: "cafe-hawa-interior",
    name: { en: "Café Hawa Interior", ar: "تصميم مقهى هوا" },
    category: "interior",
    year: "2024",
    location: { en: "Tel Aviv – Jaffa", ar: "تل أبيب – يافا" },
    scope: { en: "Interior space planning & furniture", ar: "تخطيط المساحة الداخلية والأثاث" },
    description: {
      en: "A neighbourhood café where a long communal table anchors the room. Curved plaster nooks and soft uplighting turn a narrow footprint into a generous, social space.",
      ar: "مقهى الحي حيث تتوسّط طاولة جماعية طويلة المكان. تحوّل الزوايا الجصّية المنحنية والإضاءة الناعمة المساحة الضيقة إلى فضاء اجتماعي رحب.",
    },
    image: U("1554118811-1e0d58224f24"),
    gallery: [U("1559925393-8be0ec4767c8"), U("1521017432531-fbd92d768814"), U("1517248135467-4c7edcad34c4")],
  },
  {
    slug: "residence-12b",
    name: { en: "Residence 12B", ar: "مسكن 12B" },
    category: "residential",
    year: "2023",
    location: { en: "Nazareth", ar: "الناصرة" },
    scope: { en: "Apartment renovation", ar: "تجديد شقة" },
    description: {
      en: "A compact apartment opened up by removing every non-structural wall. Built-in oak joinery hides storage and lets light travel from façade to façade.",
      ar: "شقة صغيرة تم فتحها بإزالة كل جدار غير إنشائي. تُخفي النجارة المدمجة من البلوط التخزين وتسمح للضوء بالعبور من واجهة إلى أخرى.",
    },
    image: U("1493809842364-78817add7ffb"),
    gallery: [U("1505691938895-1758d7feb511"), U("1502672260266-1c1ef2d93688"), U("1484154218962-a197022b5858")],
  },
  {
    slug: "office-concept-a",
    name: { en: "Office Concept A", ar: "مفهوم مكتب A" },
    category: "commercial",
    year: "2023",
    location: { en: "Tel Aviv", ar: "تل أبيب" },
    scope: { en: "Workspace concept & visualisation", ar: "مفهوم مساحة عمل وتصوّر بصري" },
    description: {
      en: "A workspace designed around focus and retreat — acoustic timber pods, a daylit atrium, and a material language that feels closer to a home than an office.",
      ar: "مساحة عمل مصمّمة حول التركيز والانعزال — كبائن خشبية عازلة للصوت، وبهو مضاء بالنهار، ولغة مواد أقرب إلى المنزل منها إلى المكتب.",
    },
    image: U("1497366216548-37526070297c"),
    gallery: [U("1497366811353-6870744d04b2"), U("1524758631624-e2822e304c36"), U("1531973576160-7125cd663d86")],
  },
  {
    slug: "garden-studio",
    name: { en: "Garden Studio", ar: "ستوديو الحديقة" },
    category: "concept",
    year: "2025",
    location: { en: "Concept", ar: "مفاهيمي" },
    scope: { en: "Garden pavilion concept", ar: "مفهوم جناح حديقة" },
    description: {
      en: "A small garden studio conceived as a single timber gesture — a folded roof that lifts toward the trees and frames a precise view of the sky.",
      ar: "ستوديو حديقة صغير صُمّم كإيماءة خشبية واحدة — سقف مطوي يرتفع نحو الأشجار ويؤطّر منظرًا دقيقًا للسماء.",
    },
    image: U("1518780664697-55e3ad937233"),
    gallery: [U("1416331108676-a22ccb276e35"), U("1510798831971-661eb04b3739"), U("1523217582562-09d0def993a6")],
  },
  {
    slug: "urban-loft-renovation",
    name: { en: "Urban Loft Renovation", ar: "تجديد لوفت حضري" },
    category: "interior",
    year: "2022",
    location: { en: "Tel Aviv", ar: "تل أبيب" },
    scope: { en: "Loft renovation & interior", ar: "تجديد لوفت وتصميم داخلي" },
    description: {
      en: "An industrial shell softened into a warm home. Exposed concrete meets pale oak and linen, with a sculptural staircase as the quiet centrepiece.",
      ar: "هيكل صناعي تم تليينه ليصبح منزلًا دافئًا. تلتقي الخرسانة المكشوفة بالبلوط الفاتح والكتّان، مع درج نحتي يشكّل قلب المكان الهادئ.",
    },
    image: U("1502005229762-cf1b2da7c5d6"),
    gallery: [U("1493663284031-b7e3aaf4ba32"), U("1556912172-45b7abe8b7e1"), U("1583847268964-b28dc8f51f92")],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface Service {
  slug: string;
  title: Bilingual;
  description: Bilingual;
  includes: Bilingual[];
  icon: ServiceIcon;
}

export type ServiceIcon =
  | "consulting"
  | "interior"
  | "renovation"
  | "visualization"
  | "permit"
  | "concept";

export const services: Service[] = [
  {
    slug: "architectural-consulting",
    icon: "consulting",
    title: { en: "Architectural Consulting", ar: "استشارات معمارية" },
    description: {
      en: "Expert guidance to shape the right brief, budget and direction before a single line is drawn.",
      ar: "إرشاد متخصّص لصياغة البرنامج والميزانية والاتجاه الصحيح قبل رسم أي خط.",
    },
    includes: [
      { en: "Feasibility & site review", ar: "دراسة الجدوى ومراجعة الموقع" },
      { en: "Brief & budget definition", ar: "تحديد البرنامج والميزانية" },
      { en: "Design direction options", ar: "خيارات الاتجاه التصميمي" },
    ],
  },
  {
    slug: "interior-space-planning",
    icon: "interior",
    title: { en: "Interior Space Planning", ar: "تخطيط المساحات الداخلية" },
    description: {
      en: "Layouts that make every square metre work — for flow, light, storage and daily life.",
      ar: "مخططات تجعل كل متر مربّع فعّالًا — للحركة والضوء والتخزين والحياة اليومية.",
    },
    includes: [
      { en: "Space planning & zoning", ar: "تخطيط المساحات والتقسيم" },
      { en: "Furniture & lighting layout", ar: "توزيع الأثاث والإضاءة" },
      { en: "Material & finish palette", ar: "لوحة المواد والتشطيبات" },
    ],
  },
  {
    slug: "renovation-guidance",
    icon: "renovation",
    title: { en: "Renovation Guidance", ar: "توجيه التجديدات" },
    description: {
      en: "Calm, clear direction through renovation — decisions, sequencing and contractor coordination.",
      ar: "توجيه هادئ وواضح خلال التجديد — القرارات والتسلسل والتنسيق مع المقاولين.",
    },
    includes: [
      { en: "Condition assessment", ar: "تقييم الحالة" },
      { en: "Phasing & priorities", ar: "المراحل والأولويات" },
      { en: "On-site guidance", ar: "توجيه في الموقع" },
    ],
  },
  {
    slug: "3d-visualization",
    icon: "visualization",
    title: { en: "3D Visualization", ar: "تصور ثلاثي الأبعاد" },
    description: {
      en: "Photoreal renders that let you see and feel your space long before construction begins.",
      ar: "مجسمات واقعية تتيح لك رؤية مساحتك والإحساس بها قبل بدء البناء بوقت طويل.",
    },
    includes: [
      { en: "3D modelling", ar: "النمذجة ثلاثية الأبعاد" },
      { en: "Photoreal renders", ar: "مجسمات واقعية" },
      { en: "Walkthrough views", ar: "مشاهد جولة افتراضية" },
    ],
  },
  {
    slug: "permit-documentation",
    icon: "permit",
    title: { en: "Permit & Documentation", ar: "توثيق ورخص" },
    description: {
      en: "Complete technical drawings and permit packages, prepared and coordinated for approval.",
      ar: "رسومات فنية كاملة وحزم رخص، مُعدّة ومنسّقة للحصول على الموافقات.",
    },
    includes: [
      { en: "Permit drawings", ar: "رسومات الترخيص" },
      { en: "Technical documentation", ar: "التوثيق الفني" },
      { en: "Authority coordination", ar: "التنسيق مع الجهات" },
    ],
  },
  {
    slug: "concept-design",
    icon: "concept",
    title: { en: "Concept Design", ar: "التصميم المفاهيمي" },
    description: {
      en: "The big idea — a clear spatial concept and identity that guides every later decision.",
      ar: "الفكرة الكبرى — مفهوم مكاني وهوية واضحة توجّه كل قرار لاحق.",
    },
    includes: [
      { en: "Concept narrative", ar: "حكاية المفهوم" },
      { en: "Massing & form studies", ar: "دراسات الكتل والشكل" },
      { en: "Mood & material direction", ar: "اتجاه الأجواء والمواد" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export interface Founder {
  name: Bilingual;
  specialty: Bilingual;
  bio: Bilingual;
  image: string;
  linkedin?: string;
}

export const founders: Founder[] = [
  {
    name: { en: "Besan", ar: "بيسان" },
    specialty: { en: "Architecture & Concept", ar: "العمارة والمفهوم" },
    bio: {
      en: "Leads concept and architectural design, with a focus on how light and proportion shape everyday life.",
      ar: "تقود التصميم المفاهيمي والمعماري، مع تركيز على كيفية تشكيل الضوء والتناسب للحياة اليومية.",
    },
    image: U("1494790108377-be9c29b29330", 600),
  },
  {
    name: { en: "Alma", ar: "ألما" },
    specialty: { en: "Interior & Materials", ar: "التصميم الداخلي والمواد" },
    bio: {
      en: "Specialises in interiors and material detailing, translating concepts into warm, tactile spaces.",
      ar: "متخصّصة في التصميم الداخلي وتفاصيل المواد، تحوّل المفاهيم إلى مساحات دافئة وملموسة.",
    },
    image: U("1438761681033-6461ffad8d80", 600),
  },
  {
    name: { en: "Raghad", ar: "رغد" },
    specialty: { en: "Planning & Documentation", ar: "التخطيط والتوثيق" },
    bio: {
      en: "Handles planning, permits and technical documentation, keeping every project precise and on track.",
      ar: "تتولّى التخطيط والرخص والتوثيق الفني، وتحافظ على دقة كل مشروع وسيره وفق الخطة.",
    },
    image: U("1544005313-94ddf0286df2", 600),
  },
];
