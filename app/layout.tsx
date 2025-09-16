import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Nav from "./_layout/navigation";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white min-h-screen text-black`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
