export type Language = "en" | "ar";

const dictionaries = {
  en: {
    // --- Navigation ---
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },

    // --- Brand ---
    brand: {
      name: "Massaha",
      tagline: "Architectural Consulting, Planning & Guidance Studio",
    },

    // --- Hero ---
    hero: {
      eyebrow: "Architecture Studio",
      headline: "Space Reimagined.",
      subtitle: "We design spaces, we build dreams.",
      cta: "View Our Work",
      scroll: "Scroll",
    },

    // --- About ---
    about: {
      eyebrow: "Who We Are",
      title: "Three architects, one vision.",
      lead: "To make thoughtful design accessible.",
      body: "Massaha is an architectural consulting, planning and guidance studio founded by three young women architects who graduated with a B.Arch from Tel Aviv University. We believe great architecture is not a luxury — it is a way of living, and a service everyone deserves.",
      credential: "B.Arch — Tel Aviv University",
      valuesTitle: "Our Values",
      values: ["Precision", "Warmth", "Purpose"],
      readMore: "More about us",
    },

    // --- Services ---
    services: {
      eyebrow: "What We Do",
      title: "Services",
      subtitle: "Guidance through every phase of your space.",
      viewAll: "Explore services",
      whatsIncluded: "What's included",
      requestService: "Request this service",
    },

    // --- Projects ---
    projects: {
      eyebrow: "Selected Work",
      title: "Projects",
      subtitle: "A selection of spaces we have shaped.",
      viewAll: "View all projects",
      viewProject: "View project",
      backToProjects: "Back to projects",
      filters: {
        all: "All",
        residential: "Residential",
        commercial: "Commercial",
        interior: "Interior",
        concept: "Concept",
      },
      meta: {
        scope: "Scope",
        year: "Year",
        location: "Location",
        category: "Category",
        gallery: "Gallery",
      },
    },

    // --- Process ---
    process: {
      eyebrow: "How We Work",
      title: "Our Process",
      subtitle: "A clear path from first idea to finished space.",
      steps: [
        { label: "Discover", text: "We listen, study the site, and understand how you live and work." },
        { label: "Design", text: "We translate needs into concepts, drawings, and a clear spatial story." },
        { label: "Develop", text: "We refine details, materials, and documentation down to the millimetre." },
        { label: "Deliver", text: "We guide execution and hand over a space that feels effortless." },
      ],
    },

    // --- Testimonials ---
    testimonials: {
      eyebrow: "Kind Words",
      title: "What Clients Say",
      items: [
        {
          quote: "Massaha turned a confusing renovation into a calm, beautiful process. Every decision felt considered.",
          name: "Lina H.",
          role: "Residential Client",
        },
        {
          quote: "They understood our café before we did. The space works as hard as we do — and it's stunning.",
          name: "Omar K.",
          role: "Café Owner",
        },
        {
          quote: "Professional, warm, and precise. The 3D visualisations made the whole project feel real early on.",
          name: "Dana R.",
          role: "Commercial Client",
        },
      ],
    },

    // --- Contact ---
    contact: {
      eyebrow: "Get In Touch",
      title: "Let's shape your space.",
      subtitle: "Tell us about your project and we'll get back to you within two working days.",
      info: {
        emailLabel: "Email",
        instagramLabel: "Instagram",
        whatsappLabel: "WhatsApp",
        whatsappCta: "Chat with us on WhatsApp",
        locationLabel: "Studio",
        location: "Dr George Wise 22, Tel Aviv",
      },
      form: {
        name: "Name",
        email: "Email",
        projectType: "Project Type",
        message: "Message",
        projectTypes: ["Residential", "Commercial", "Interior", "Renovation", "Concept", "Other"],
        selectPlaceholder: "Select a project type",
        messagePlaceholder: "Tell us a little about your space…",
        submit: "Send Message",
        sending: "Sending…",
        successTitle: "Thank You",
        successBody: "Your message is on its way. We'll be in touch shortly.",
        sendAnother: "Send another message",
        required: "This field is required",
        invalidEmail: "Please enter a valid email",
      },
    },

    // --- Founders ---
    founders: {
      eyebrow: "The Team",
      title: "The Architects",
    },

    // --- Footer ---
    footer: {
      tagline: "Architectural Consulting, Planning & Guidance Studio",
      explore: "Explore",
      connect: "Connect",
      rights: "All rights reserved.",
      builtWith: "Designed & built with care.",
    },

    // --- Common ---
    common: {
      language: "Language",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "أعمالنا",
      contact: "تواصل معنا",
      menu: "القائمة",
      close: "إغلاق",
    },

    brand: {
      name: "مساحة",
      tagline: "ستوديو للاستشارات، التخطيط والتوجيه المعماري",
    },

    hero: {
      eyebrow: "ستوديو معماري",
      headline: "إعادة تصوّر المساحة.",
      subtitle: "نصمم المساحات، نبني الأحلام",
      cta: "شاهد أعمالنا",
      scroll: "اسحب للأسفل",
    },

    about: {
      eyebrow: "من نحن",
      title: "ثلاث معماريات، رؤية واحدة.",
      lead: "لنجعل التصميم المدروس في متناول الجميع.",
      body: "مساحة هو ستوديو للاستشارات والتخطيط والتوجيه المعماري، أسّسته ثلاث معماريات شابات حاصلات على بكالوريوس العمارة من جامعة تل أبيب. نؤمن بأن العمارة الجيدة ليست رفاهية، بل أسلوب حياة وخدمة يستحقها الجميع.",
      credential: "بكالوريوس العمارة — جامعة تل أبيب",
      valuesTitle: "قيمنا",
      values: ["الدقة", "الدفء", "الهدف"],
      readMore: "اعرف المزيد عنا",
    },

    services: {
      eyebrow: "ماذا نقدّم",
      title: "خدماتنا",
      subtitle: "توجيه في كل مرحلة من مراحل مساحتك.",
      viewAll: "استكشف الخدمات",
      whatsIncluded: "ما الذي يشمله",
      requestService: "اطلب هذه الخدمة",
    },

    projects: {
      eyebrow: "أعمال مختارة",
      title: "أعمالنا",
      subtitle: "مجموعة من المساحات التي صمّمناها.",
      viewAll: "عرض كل الأعمال",
      viewProject: "عرض المشروع",
      backToProjects: "العودة إلى الأعمال",
      filters: {
        all: "الكل",
        residential: "سكني",
        commercial: "تجاري",
        interior: "داخلي",
        concept: "مفاهيمي",
      },
      meta: {
        scope: "النطاق",
        year: "السنة",
        location: "الموقع",
        category: "التصنيف",
        gallery: "معرض الصور",
      },
    },

    process: {
      eyebrow: "كيف نعمل",
      title: "منهجيتنا",
      subtitle: "مسار واضح من الفكرة الأولى إلى المساحة المكتملة.",
      steps: [
        { label: "الاكتشاف", text: "نُصغي، ندرس الموقع، ونفهم طريقة عيشك وعملك." },
        { label: "التصميم", text: "نحوّل الاحتياجات إلى مفاهيم ورسومات وحكاية مكانية واضحة." },
        { label: "التطوير", text: "نُنقّح التفاصيل والمواد والتوثيق حتى أدق الأبعاد." },
        { label: "التسليم", text: "نرافق التنفيذ ونسلّم مساحة تبدو سلسة وبلا عناء." },
      ],
    },

    testimonials: {
      eyebrow: "كلمات طيبة",
      title: "ماذا يقول عملاؤنا",
      items: [
        {
          quote: "حوّلت مساحة عملية تجديد مربكة إلى تجربة هادئة وجميلة. كل قرار كان مدروسًا.",
          name: "لينا ح.",
          role: "عميلة سكنية",
        },
        {
          quote: "فهموا مقهانا قبل أن نفهمه نحن. المساحة تعمل بقدر اجتهادنا — وهي رائعة الجمال.",
          name: "عمر ك.",
          role: "صاحب مقهى",
        },
        {
          quote: "احترافية ودفء ودقة. جعلت المجسمات ثلاثية الأبعاد المشروع حقيقيًا منذ البداية.",
          name: "دانا ر.",
          role: "عميلة تجارية",
        },
      ],
    },

    contact: {
      eyebrow: "ابقَ على تواصل",
      title: "لنُشكّل مساحتك معًا.",
      subtitle: "أخبرنا عن مشروعك وسنعاود التواصل معك خلال يومي عمل.",
      info: {
        emailLabel: "البريد الإلكتروني",
        instagramLabel: "إنستغرام",
        whatsappLabel: "واتساب",
        whatsappCta: "تحدّث معنا عبر واتساب",
        locationLabel: "الستوديو",
        location: "شارع د. جورج وايز 22، تل أبيب",
      },
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        projectType: "نوع المشروع",
        message: "الرسالة",
        projectTypes: ["سكني", "تجاري", "داخلي", "تجديد", "مفاهيمي", "أخرى"],
        selectPlaceholder: "اختر نوع المشروع",
        messagePlaceholder: "أخبرنا قليلًا عن مساحتك…",
        submit: "إرسال الرسالة",
        sending: "جارٍ الإرسال…",
        successTitle: "شكراً",
        successBody: "رسالتك في طريقها إلينا. سنتواصل معك قريبًا.",
        sendAnother: "إرسال رسالة أخرى",
        required: "هذا الحقل مطلوب",
        invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
      },
    },

    founders: {
      eyebrow: "الفريق",
      title: "المعماريون",
    },

    footer: {
      tagline: "ستوديو للاستشارات، التخطيط والتوجيه المعماري",
      explore: "استكشف",
      connect: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      builtWith: "صُمّم وبُني بعناية.",
    },

    common: {
      language: "اللغة",
    },
  },
};

export type TranslationShape = (typeof dictionaries)["en"];

export const translations: Record<Language, TranslationShape> = dictionaries;
