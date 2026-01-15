import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | VRTEXGLOBAL",
  description:
    "Explore VRTEXGLOBAL's impressive portfolio of completed projects in product design, automotive design, enclosure design, CAD modeling, and more.",
  keywords: [
    "portfolio",
    "case studies",
    "project examples",
    "product design portfolio",
    "engineering projects",
  ],
  openGraph: {
    title: "Portfolio | VRTEXGLOBAL",
    description: "See our successful projects and case studies in mechanical design",
    url: "https://vrtexglobal.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
