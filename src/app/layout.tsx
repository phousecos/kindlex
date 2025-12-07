import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KindleX - Where Brilliance Takes Flight",
  description:
    "Empowering women, underserved youth, and justice-impacted communities to rise in tech through skills, mentorship, and opportunity.",
  keywords: [
    "tech education",
    "women in tech",
    "AI skills training",
    "mentorship",
    "nonprofit",
    "Lumynr",
    "GenAIrate",
  ],
  icons: {
    icon: "/images/KindleX-favicon-48.png",
    shortcut: "/images/KindleX-favicon-48.png",
    apple: "/images/KindleX-favicon-48.png",
  },
  openGraph: {
    title: "KindleX - Where Brilliance Takes Flight",
    description:
      "Empowering women, underserved youth, and justice-impacted communities to rise in tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-navy-900">{children}</body>
    </html>
  );
}
