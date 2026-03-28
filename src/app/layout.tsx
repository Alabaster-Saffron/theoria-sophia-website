import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { Suspense } from "react";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/live";
import { draftMode } from "next/headers";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlagOverlay from "@/components/FlagOverlay";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Theoria Sophia | To Behold Wisdom",
    template: "%s | Theoria Sophia",
  },
  description:
    "A sanctuary for women to find safety, love, and peace within their bodies and lives. Restoring humanity's natural connection to nature and their true authentic selves.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <SanityLive />
        {isEnabled && <VisualEditing />}
        <Suspense>
          <FlagOverlay />
        </Suspense>
      </body>
    </html>
  );
}
