const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TinnieDev",
  url: "https://tinniedev.com",
  logo: "https://tinniedev.com/brand-monogram.png",
  image: "https://tinniedev.com/brand-monogram.png",
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
  sameAs: ["https://tinniedev.com"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
