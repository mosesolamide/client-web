import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tcmslimited.com"),
  title: { default: "TCMS Limited | Trade & Consumer Marketing", template: "%s | TCMS Limited" },
  description: site.description,
  keywords: ["trade marketing Nigeria", "consumer marketing Lagos", "field marketing", "brand activation", "market research"],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: "TCMS Limited | Trade & Consumer Marketing",
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: "TCMS Limited", description: site.description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#841B82" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.legalName,
              url: "https://tcmslimited.com",
              email: site.email,
              telephone: site.phonePrimary,
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 7 Adedotun Dina Street, Mende, Maryland",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              areaServed: ["Nigeria", "Sub-Saharan Africa"],
            }),
          }}
        />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
