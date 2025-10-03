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
  title: "Tennis Glicko-2 Ratings",
  description: "Advanced tennis player ratings using the Glicko-2 rating system. View rankings for overall, hard court, clay court, and grass court performances.",
  keywords: "tennis, ratings, glicko-2, rankings, ATP, tennis statistics",
  authors: [{ name: "Deven Hagen" }],
  openGraph: {
    title: "Tennis Glicko-2 Ratings",
    description: "Advanced tennis player ratings using the Glicko-2 rating system. View rankings for overall, hard court, clay court, and grass court performances.",
    type: "website",
    siteName: "Tennis Glicko-2 Ratings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tennis Glicko-2 Ratings",
    description: "Advanced tennis player ratings using the Glicko-2 rating system. View rankings for overall, hard court, clay court, and grass court performances.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
