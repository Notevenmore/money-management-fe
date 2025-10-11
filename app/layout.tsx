import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from "./_components/provider";
import Nav from "./_layout/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("mounted");
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white min-h-screen text-black`}
      >
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
