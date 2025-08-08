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
  title: "Ira turns 2!",
  description: "Join us on 31st August at Prestige Shantiniketan to celebrate Ira's 2nd Birthday!",
  openGraph: {
    title: "Ira turns 2!",
    description: "Join us on 31st August at Prestige Shantiniketan to celebrate Ira's 2nd Birthday!",
    images: ["https://ira-birthday.vercel.app/birthday-invit.webp"],
    url: "https://ira-birthday.vercel.app",
    type: "website",
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
