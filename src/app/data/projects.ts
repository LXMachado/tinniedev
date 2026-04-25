export type ProjectVisual = {
  title: string;
  image: string;
  alt: string;
  description?: string;
  imageClassName?: string;
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  cardDescription: string;
  badge: string;
  thumbnail: string;
  pageTitle: string;
  metaDescription: string;
  subtitle: string;
  liveUrl?: string;
  overview: {
    projectType: string;
    industry: string;
    market: string;
    focusAreas: string;
  };
  challenge: string;
  solution: string[];
  outcome: string;
  visuals: ProjectVisual[];
};

export const projects: Project[] = [
  {
    slug: "plumber-website",
    category: "LOCAL SERVICE BUSINESS",
    title: "Mermaid Plumbing Website",
    cardDescription: "A fast, mobile-first plumbing website built for local search, trust, and quote enquiries.",
    badge: "Featured Project",
    thumbnail: "/images/projects/mermaid-plumbing-thumbnail.webp",
    pageTitle: "Mermaid Plumbing Website Case Study | TinnieDev",
    metaDescription:
      "A local plumbing website case study by TinnieDev, focused on branding, mobile-first design, local trust, and quote enquiries for a Gold Coast service business.",
    subtitle:
      "A branded local plumbing website concept built for a Gold Coast service business, focused on fast loading, clear trust signals, and strong quote enquiry flow.",
    liveUrl: "https://mermaidplumbing.com.au",
    overview: {
      projectType: "Local service business website",
      industry: "Plumbing / Trades",
      market: "Mermaid Beach, Gold Coast",
      focusAreas: "Branding, responsive website design, local trust, quote enquiries, mobile-first UX",
    },
    challenge:
      "Local trade businesses often rely on referrals, Google searches, and quick mobile enquiries. The website needed to feel trustworthy, local, and easy to use, while avoiding a generic trade-template look.",
    solution: [
      "Created a branded visual direction inspired by Mermaid Beach and the Gold Coast.",
      "Designed a clear hero section with immediate service relevance.",
      "Added strong calls-to-action for quote enquiries.",
      "Structured the page for mobile users first.",
      "Kept the design simple, fast, and easy to navigate.",
    ],
    outcome:
      "The result is a clean, local-focused website that presents Mermaid Plumbing as professional, approachable, and easy to contact across desktop and mobile.",
    visuals: [
      {
        title: "Homepage website concept",
        image: "/images/projects/mermaid-plumbing-hero.webp",
        alt: "Mermaid Plumbing homepage website concept",
        description: "A branded homepage direction focused on local trust and quote enquiries.",
      },
      {
        title: "Mobile screenshot",
        image: "/images/projects/mermaid-plumbing-mobile.webp",
        alt: "Mermaid Plumbing mobile website screen",
        description: "Mobile-first hero, trust card, and enquiry actions.",
        imageClassName: "object-contain p-6 md:p-8",
      },
      {
        title: "Portfolio thumbnail",
        image: "/images/projects/mermaid-plumbing-thumbnail.webp",
        alt: "Mermaid Plumbing portfolio thumbnail",
        description: "A compact preview of the trade website direction.",
      },
    ],
  },
  {
    slug: "physio-clinic-website",
    category: "ALLIED HEALTH",
    title: "Surfers Physio Clinic Website",
    cardDescription:
      "A clean allied health website concept focused on patient trust, online bookings, and local visibility.",
    badge: "Concept Build",
    thumbnail: "/images/projects/physio-clinic-thumbnail.webp",
    pageTitle: "Physio Clinic Website Concept | TinnieDev",
    metaDescription:
      "An allied health website concept by TinnieDev, focused on patient trust, online bookings, local visibility, and clean responsive design.",
    subtitle:
      "A placeholder allied health website concept for a Surfers Paradise physio clinic, focused on patient confidence, clear services, and easy booking paths.",
    liveUrl: "https://surfersphysio.com.au/",
    overview: {
      projectType: "Concept allied health website",
      industry: "Physiotherapy / Allied Health",
      market: "Surfers Paradise, Gold Coast",
      focusAreas: "Patient trust, online bookings, service clarity, local visibility, responsive design",
    },
    challenge:
      "A physio clinic website needs to feel calm and credible while helping visitors quickly understand services, practitioner fit, and how to book an appointment.",
    solution: [
      "Created a clean structure around services, conditions, and booking actions.",
      "Focused the page flow on patient trust and local relevance.",
      "Designed the concept to support simple online booking prompts.",
      "Kept the visual direction professional, warm, and easy to scan.",
    ],
    outcome:
      "The concept presents a clear direction for an allied health website that feels approachable, organised, and ready for patient enquiries without presenting it as a completed client result.",
    visuals: [
      {
        title: "Homepage concept",
        image: "/images/projects/physio-clinic-hero.webp",
        alt: "Surfers Physio Clinic website concept hero",
        description: "A clean, appointment-focused homepage direction.",
      },
      {
        title: "Mobile concept",
        image: "/images/projects/physio-clinic-mobile.webp",
        alt: "Surfers Physio Clinic mobile website concept",
        description: "A mobile-first layout for service browsing and bookings.",
        imageClassName: "object-contain p-6 md:p-8",
      },
      {
        title: "Portfolio thumbnail",
        image: "/images/projects/physio-clinic-thumbnail.webp",
        alt: "Surfers Physio Clinic portfolio thumbnail",
        description: "A simple visual summary of the concept build.",
      },
    ],
  },
  {
    slug: "shopify-product-store",
    category: "SHOPIFY / E-COMMERCE",
    title: "Nazka.tech",
    cardDescription:
      "A focused product storefront designed to present a tech product clearly and support online sales.",
    badge: "E-Commerce",
    thumbnail: "/images/projects/nazkatech-thumbnail.webp",
    pageTitle: "Nazka.tech Case Study | TinnieDev",
    metaDescription:
      "A product store case study by TinnieDev, focused on clear product presentation, responsive design, and e-commerce-ready structure.",
    subtitle:
      "A focused product storefront built around clear product presentation, responsive shopping flows, and an e-commerce-ready structure.",
    liveUrl: "https://nazka.tech",
    overview: {
      projectType: "Product storefront",
      industry: "Technology / E-Commerce",
      market: "Online product market",
      focusAreas: "Product messaging, storefront structure, responsive design, purchase flow clarity",
    },
    challenge:
      "Product stores need to explain what is being sold quickly, reduce friction around product understanding, and give shoppers a clear path toward purchase.",
    solution: [
      "Structured the store around focused product presentation.",
      "Designed clear sections for product value, details, and purchase intent.",
      "Kept the interface responsive and easy to scan across devices.",
      "Used a restrained visual system suited to a tech product brand.",
    ],
    outcome:
      "The project gives Nazka.tech a focused online storefront that presents the product clearly and supports a straightforward shopping experience.",
    visuals: [
      {
        title: "Storefront hero",
        image: "/images/projects/nazkatech-hero.webp",
        alt: "Nazka.tech product store homepage",
        description: "Product-first homepage presentation.",
      },
      {
        title: "Mobile storefront",
        image: "/images/projects/nazkatech-mobile.webp",
        alt: "Nazka.tech mobile product store",
        description: "Responsive product browsing for mobile shoppers.",
        imageClassName: "object-contain p-6 md:p-8",
      },
      {
        title: "Portfolio thumbnail",
        image: "/images/projects/nazkatech-thumbnail.webp",
        alt: "Nazka.tech product store thumbnail",
        description: "A compact preview of the e-commerce direction.",
      },
    ],
  },
  {
    slug: "beyond-body-holistic-health",
    category: "WELLNESS BRAND",
    title: "Beyond Body Holistic Health",
    cardDescription:
      "A calm, professional wellness website with strong branding, clear services, and a trustworthy visual identity.",
    badge: "Client Project",
    thumbnail: "/images/projects/beyond-body-thumbnail.webp",
    pageTitle: "Beyond Body Holistic Health Website Case Study | TinnieDev",
    metaDescription:
      "A wellness brand website case study by TinnieDev, focused on calm branding, service clarity, responsive design, and trust-building presentation.",
    subtitle:
      "A calm wellness brand website focused on clear services, grounded visual identity, and a trustworthy responsive experience.",
    liveUrl: "https://beyondbodyholistichealth.com.au",
    overview: {
      projectType: "Wellness brand website",
      industry: "Health / Wellness",
      market: "Australian wellness market",
      focusAreas: "Brand presentation, service clarity, responsive layout, trust-building content",
    },
    challenge:
      "Wellness websites need to feel calm and personal without becoming vague. The site needed a clear service structure and a visual identity that felt professional and approachable.",
    solution: [
      "Created a calm, brand-led website structure.",
      "Organised services and supporting content for easier scanning.",
      "Designed a responsive experience that feels consistent across screen sizes.",
      "Used restrained visuals and copy to support trust without overstating outcomes.",
    ],
    outcome:
      "The website presents Beyond Body Holistic Health with a professional and grounded online presence that makes services easier to understand and explore.",
    visuals: [
      {
        title: "Wellness homepage",
        image: "/images/projects/beyond-body-hero.webp",
        alt: "Beyond Body Holistic Health website homepage",
        description: "A calm homepage direction built around brand trust.",
      },
      {
        title: "Mobile layout",
        image: "/images/projects/beyond-body-mobile.webp",
        alt: "Beyond Body Holistic Health mobile website",
        description: "Responsive service browsing and contact flow.",
        imageClassName: "object-contain p-6 md:p-8",
      },
      {
        title: "Portfolio thumbnail",
        image: "/images/projects/beyond-body-thumbnail.webp",
        alt: "Beyond Body Holistic Health portfolio thumbnail",
        description: "A compact preview of the wellness brand website.",
      },
    ],
  },
  {
    slug: "tinnie-house-records",
    category: "MUSIC / CREATIVE BRAND",
    title: "Tinnie House Records",
    cardDescription:
      "A music label website built around releases, artist identity, and a dark visual brand system.",
    badge: "Creative Brand",
    thumbnail: "/images/projects/tinnie-house-thumbnail.webp",
    pageTitle: "Tinnie House Records Website Case Study | TinnieDev",
    metaDescription:
      "A creative brand website case study by TinnieDev, focused on music releases, label identity, responsive design, and dark visual branding.",
    subtitle:
      "A dark creative brand website built around releases, label identity, artist presentation, and responsive content discovery.",
    liveUrl: "https://tinniehouserecords.com.au",
    overview: {
      projectType: "Creative brand website",
      industry: "Music / Entertainment",
      market: "Australian creative market",
      focusAreas: "Release presentation, artist identity, dark visual branding, responsive design",
    },
    challenge:
      "A music label website needs to communicate mood and identity while still making releases, artists, and contact paths easy to find.",
    solution: [
      "Built a dark visual direction suited to a music label brand.",
      "Structured the site around releases and creative identity.",
      "Kept navigation simple so content remains easy to discover.",
      "Designed responsive layouts for browsing across desktop and mobile.",
    ],
    outcome:
      "The result is a focused creative website that gives Tinnie House Records a clear digital home for releases, brand identity, and future label content.",
    visuals: [
      {
        title: "Label homepage",
        image: "/images/projects/tinnie-house-hero.webp",
        alt: "Tinnie House Records website homepage",
        description: "A dark, release-focused homepage direction.",
      },
      {
        title: "Mobile layout",
        image: "/images/projects/tinnie-house-mobile.webp",
        alt: "Tinnie House Records mobile website",
        description: "Responsive browsing for label content and releases.",
        imageClassName: "object-contain p-6 md:p-8",
      },
      {
        title: "Portfolio thumbnail",
        image: "/images/projects/tinnie-house-thumbnail.webp",
        alt: "Tinnie House Records portfolio thumbnail",
        description: "A compact preview of the creative brand website.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
