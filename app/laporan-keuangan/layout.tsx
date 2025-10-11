import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan Keuangan",
};

export default function LaporanKeuanganLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("LaporanKeuanganLayout mounted");
  return children;
}
