// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";

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
