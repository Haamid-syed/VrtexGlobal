// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "VrtexGlobal – Mechanical Design Engineering Services in Pune, Undri",
  description: "Precision mechanical engineering services in Pune, Undri. Design, fabrication, and consulting for industrial projects.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "VrtexGlobal – Mechanical Design Engineering Services in Pune, Undri",
    description: "Precision mechanical engineering services in Pune, Undri. Design, fabrication, and consulting for industrial projects.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
