import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Paolo Araneta - Software Engineer",
    template: "%s | Paolo Araneta"
  },
  description: "A full-stack software enginner based in Cebu, Philippines. I build accessible, pixel-perfect digital experiences for the web.",
  metadataBase: new URL("https://paoloaraneta.dev"),
  alternates: { canonical: "https://paoloaraneta.dev" },
  icons: {},
  openGraph: {
    type: "website",
    url: "https://paoloaraneta.dev",
    title: "Paolo Araneta - Software Engineer",
    description: "A full-stack software enginner based in Cebu, Philippines. I build accessible, pixel-perfect digital experiences for the web.",
    siteName: "Paolo Araneta",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paolo Araneta - Software Engineer",
    description: "See my recent projects.",
    images: []
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD for Website */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Paolo Araneta',
              url: 'https://paoloaraneta.dev',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://paoloaraneta.dev/?q={search_term_string}',
                'query_input': 'required name=search_term_string'
              }
            })
          }}
        />
        {/* JSON-LD for Person */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Paolo Araneta',
              url: 'https://paoloaraneta.dev',
              sameAs: [
                'https://github.com/Aytsuu',
                'https://www.instagram.com/aytsuu_/',
                'https://www.linkedin.com/in/paolo-araneta-65b332336/',
                'https://www.facebook.com/Mrshak8/'
              ],
              jobTitle: 'Full-Stack Software Engineer'
            })
          }}
        />
        {/* JSON-LD for SiteNavigationElement */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: []
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body> 
    </html>
  );
}
