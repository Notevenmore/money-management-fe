import type { Metadata } from "next";
import MainLayoutClient from "./mainLayoutClient";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayoutClient>{children}</MainLayoutClient>
  );
}
