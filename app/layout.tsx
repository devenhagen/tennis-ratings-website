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
  metadataBase: new URL('https://glicko2-tennis-ratings.vercel.app'),
  title: {
    default: 'Tennis Glicko-2 Ratings',
    template: '%s | Tennis Glicko-2 Ratings',
  },
  description: 'Live surface-aware Glicko-2 rankings for tennis. Advanced player ratings for overall, hard court, clay court, and grass court performances.',
  keywords: "tennis, ratings, glicko-2, rankings, ATP, tennis statistics",
  authors: [{ name: "Deven Hagen" }],
  openGraph: {
    title: 'Tennis Glicko-2 Ratings',
    description: 'Live surface-aware Glicko-2 rankings for tennis. Advanced player ratings for overall, hard court, clay court, and grass court performances.',
    url: '/',
    siteName: 'Tennis Glicko-2 Ratings',
    images: [{ 
      url: '/og-image.svg', 
      width: 1200, 
      height: 630, 
      alt: 'Tennis Glicko-2 Ratings' 
    }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tennis Glicko-2 Ratings',
    description: 'Live surface-aware Glicko-2 rankings for tennis. Advanced player ratings for overall, hard court, clay court, and grass court performances.',
    images: ['/og-image.svg'],
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
