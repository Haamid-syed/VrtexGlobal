import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VRTEXGLOBAL | Get Your Project Quote",
  description:
    "Contact VRTEXGLOBAL for mechanical design services. Request a quote, send a message, or reach out for your product design needs.",
  openGraph: {
    title: "Contact VRTEXGLOBAL | Get Your Project Quote",
    description:
      "Contact VRTEXGLOBAL for mechanical design services. Request a quote, send a message, or reach out for your product design needs.",
    url: "https://vrtexglobal.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
