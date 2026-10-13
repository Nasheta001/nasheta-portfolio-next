import type { Metadata } from "next";
import { Sora, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body-face",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Only used for the small code-style labels on the Development page.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Nasheta John · Home",
  description: "Nasheta John: content writer for iGaming, FinTech, Forex and Crypto, and software developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${sourceSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-ink font-body text-text">{children}</body>
    </html>
  );
}
