import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Tambah Pemasukan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
