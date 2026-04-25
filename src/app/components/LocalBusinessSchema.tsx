const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TinnieDev",
  url: "https://tinniedev.com",
  logo: "https://tinniedev.com/brand-monogram.png",
  image: "https://tinniedev.com/alexandre-machado-australian-web-developer.png",
  description:
    "Gold Coast-based web developer building fast websites, lead generation systems, and custom business systems for Australian service businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: [
    "Gold Coast",
    "Brisbane",
    "Sunshine Coast",
    "Tweed",
    "Logan",
    "Ipswich",
    "Australia",
  ],
  founder: {
    "@type": "Person",
    name: "Alexandre Machado",
  },
  sameAs: [
    "https://tinniedev.com",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  serviceType: [
    "Website Development",
    "Lead Generation Systems",
    "Custom Web Applications",
    "Web Performance Optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Starter Website",
        itemListElement: [{
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Core Service Pages Website",
            description: "Mobile responsive build with contact and quote forms"
          }
        }]
      },
      {
        "@type": "OfferCatalog",
        name: "Lead Generation Website",
        itemListElement: [{
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conversion-Focused Website",
            description: "Quote request funnel with service area structure and lead tracking"
          }
        }]
      }
    ]
  },
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
