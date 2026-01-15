"use client";

import Script from "next/script";

export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "VRTEXGLOBAL",
    image: "https://vrtexglobal.com/logo.jpeg",
    description: "Mechanical engineering design and product development services in Pune",
    url: "https://vrtexglobal.com",
    telephone: "+91-9975613695",
    email: "info@vrtexglobal.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Undri",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411060",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5204",
      longitude: "73.9567",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/vrtexglobal",
      "https://www.linkedin.com/company/vrtexglobal",
      "https://twitter.com/vrtexglobal",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "State",
        name: "Maharashtra",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "VRTEXGLOBAL - Mechanical Design Services",
    description: "Comprehensive mechanical engineering design and development services",
    url: "https://vrtexglobal.com/services",
    hasOfferingDescription: [
      {
        "@type": "Service",
        name: "CAD Modeling",
        description: "Precision 3D CAD modeling and 2D technical drawing",
      },
      {
        "@type": "Service",
        name: "Product Design",
        description: "End-to-end product design services",
      },
      {
        "@type": "Service",
        name: "FEA Analysis",
        description: "Finite Element Analysis and stress analysis",
      },
      {
        "@type": "Service",
        name: "Prototyping",
        description: "3D printing and rapid prototyping support",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
