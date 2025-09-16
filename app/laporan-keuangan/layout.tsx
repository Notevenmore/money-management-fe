import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Laporan Keuangan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
