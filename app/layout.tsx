import "./globals.css";

export const metadata = {
  title: "Vertex Labs – Mechanical Engineering Services in Pune",
  description:
    "Precision CNC machining, fabrication, and mechanical engineering services in Undri, Pune.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
