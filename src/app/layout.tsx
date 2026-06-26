import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://supportsicklecell.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Support Sickle Cell Nigeria (SSCN) — Awareness, Care & Hope",
    template: "%s | Support Sickle Cell Nigeria",
  },
  description:
    "Support Sickle Cell Nigeria (SSCN) is a national non-profit creating awareness, supporting warriors, funding research, promoting genotype testing and blood donation, and driving healthcare reform across Nigeria.",
  keywords: [
    "Support Sickle Cell Nigeria",
    "Sickle Cell Foundation Nigeria",
    "Sickle Cell Awareness",
    "Blood Donation Nigeria",
    "Genotype Test Nigeria",
    "Living with Sickle Cell",
    "Donate for Sickle Cell Patients",
    "Sickle Cell Advocacy",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Support Sickle Cell Nigeria",
    title: "Support Sickle Cell Nigeria (SSCN) — Awareness, Care & Hope",
    description:
      "Supporting lives through awareness, healthcare, advocacy, education, and community across Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Sickle Cell Nigeria (SSCN)",
    description:
      "Together we can give every sickle cell warrior hope. Awareness, care, advocacy & community across Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
