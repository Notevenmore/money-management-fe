import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Tambah Tagihan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
