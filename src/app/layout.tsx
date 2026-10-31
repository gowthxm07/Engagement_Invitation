import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat, Noto_Serif_Tamil } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerifTamil = Noto_Serif_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#7c0733",
};

export const metadata: Metadata = {
  title: "Praveen S & Swathi N | Engagement Invitation",
  description:
    "We warmly invite you to celebrate the auspicious Engagement of Praveen S & Swathi N on Friday, 20 November 2026 at Aarathana Mahaal, Karur.",
  openGraph: {
    title: "Praveen S & Swathi N | Engagement Invitation",
    description: "Friday, 20 November 2026 • Aarathana Mahaal, Karur",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable} ${notoSerifTamil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#580524] text-white selection:bg-[#f3c64f] selection:text-[#580524] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
