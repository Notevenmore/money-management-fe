"use client"

import Nav from "./_layout/navigation";

export default function MainLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log("main layout client mounted")

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
