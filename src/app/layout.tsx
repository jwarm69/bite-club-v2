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
  title: "Bite Club Meal Plan - Save Money on Campus Dining | 25+ Partner Restaurants",
  description: "Skip dining hall lines! Order ahead at 25+ local restaurants near campus. Save money with student-exclusive deals and never lose unused meal credits.",
  keywords: "campus meal plan, student dining, restaurant delivery, college meal plan alternative, student discounts",
  icons: {
    icon: "/favicon.ico",
    apple: "/bite-club-logo.png",
  },
  openGraph: {
    title: 'Bite Club Meal Plan - The Smarter Meal Plan for Campus Life',
    description: 'Order ahead at 25+ restaurants, skip the wait, and save money on every meal.',
    images: ['/bite-club-logo.png'],
    type: 'website',
    url: 'https://bite-club-v2-s7su.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bite Club Meal Plan - Save Money on Campus Dining',
    description: 'Order ahead at 25+ restaurants, skip the wait, and save money on every meal.',
  }
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
