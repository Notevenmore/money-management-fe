"use client"

import Nav from "./_layout/navigation";
import { Inter } from 'next/font/google';
import { Provider } from "react-redux";
import { store } from "@/store";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function MainLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${inter.className} bg-white min-h-screen text-black`}
        >
          <Nav />
          {children}
        </body>
      </html>
    </Provider>
  );
}
