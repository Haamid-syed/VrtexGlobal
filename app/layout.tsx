import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "@/providers";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vrtexglobal.com"),
  title: {
    default: "VRTEXGLOBAL | Mechanical Design & CAD Modeling in Pune",
    template: "%s | VRTEXGLOBAL",
  },
  description:
    "VRTEXGLOBAL - Expert mechanical design, CAD modeling, FEA analysis, and product development services in Undri, Pune, Maharashtra. 15+ years experience in automotive and industrial product design.",
  keywords: [
    "mechanical design pune",
    "CAD modeling services",
    "product design pune",
    "engineering services undri",
    "FEA analysis",
    "automotive design",
    "enclosure design",
    "prototyping services",
    "mechanical engineering pune",
    "3D design services",
    "manufacturing drawings",
    "reverse engineering",
    "sheet metal design",
    "plastic product design",
    "design analysis",
  ],
  authors: [{ name: "VRTEXGLOBAL", url: "https://vrtexglobal.com" }],
  creator: "VRTEXGLOBAL",
  publisher: "VRTEXGLOBAL",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vrtexglobal.com",
    siteName: "VRTEXGLOBAL",
    title: "VRTEXGLOBAL | Mechanical Design & CAD Modeling in Pune",
    description:
      "Professional mechanical engineering design, CAD modeling, and product development services in Undri, Pune. Expert FEA analysis and prototyping support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VRTEXGLOBAL - Mechanical Design Services in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VRTEXGLOBAL | Mechanical Design & CAD Modeling in Pune",
    description: "Professional mechanical design and CAD services in Undri, Pune",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vrtexglobal.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="geo.placename" content="Undri, Pune, Maharashtra" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.position" content="18.5204;73.9567" />
        <meta name="ICBM" content="18.5204, 73.9567" />
        <meta name="y_key" content="your-yandex-site-verification" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" href="https://vrtexglobal.com" hrefLang="en" />
      </head>
      <body className="bg-background text-foreground">
        <Providers>
          <SchemaMarkup />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
