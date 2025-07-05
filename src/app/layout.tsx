import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pooja Yadav | Frontend Developer",
  description: "Frontend Developer with 4 years of experience specializing in React.js, Next.js, and Tailwind CSS. Expert in converting Figma designs into pixel-perfect, responsive UIs.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Pooja Yadav | Frontend Developer',
    description: 'Frontend Developer with expertise in React.js, Next.js, and Tailwind CSS',
    url: 'https://poojayadav.com',
    siteName: 'Pooja Yadav Portfolio',
    images: [
      {
        url: '/about/about-me.png',
        width: 800,
        height: 600,
        alt: 'Pooja Yadav - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <Header />
        {children}
      </body>
    </html>
  );
}
