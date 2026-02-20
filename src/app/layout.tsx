import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw Consulting — AI-automatisering som jobber mens du sover",
  description: "Vi bygger AI-agenter og automatiserte arbeidsflyter for bedrifter. Fra første samtale til fullt operativt system.",
  openGraph: {
    title: "OpenClaw Consulting — AI-automatisering som jobber mens du sover",
    description: "Vi bygger AI-agenter og automatiserte arbeidsflyter for bedrifter. Fra første samtale til fullt operativt system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
