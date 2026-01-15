import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services | VRTEXGLOBAL",
  description:
    "Explore VRTEXGLOBAL's comprehensive engineering services including CAD modeling, product design, mechanical engineering, enclosure design, and prototyping.",
  keywords: [
    "mechanical engineering services",
    "product design services",
    "CAD modeling",
    "automotive design",
    "enclosure design",
    "engineering analysis",
  ],
  openGraph: {
    title: "Engineering Services | VRTEXGLOBAL",
    description: "Comprehensive mechanical design and engineering services",
    url: "https://vrtexglobal.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
