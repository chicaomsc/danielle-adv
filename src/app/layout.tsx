import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Danielle Fernanda",
  description:
    "Advogada especializada em Direito de Família e Sucessões com atendimento humanizado e ético.",
  metadataBase: new URL("https://www.daniellefernanda..br"),

  openGraph: {
    title: "Dra. Danielle Fernanda",
    description: "Atendimento jurídico especializado com empatia e ética.",
    url: "https://www.daniellefernanda..br",
    siteName: "Dra. Danielle Fernanda",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foto da Dra. Danielle Fernanda",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  other: {
    "ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Dra. Danielle Fernanda",
      image: "https://www.daniellefernanda..br/dani.png",
      url: "https://www.daniellefernanda..br",
      telephone: "+55 99 98224-9471",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coroatá",
        addressRegion: "MA",
        addressCountry: "BR",
      },
      description:
        "Advogada especializada em Direito de Família e Sucessões com atendimento humanizado e ético.",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
