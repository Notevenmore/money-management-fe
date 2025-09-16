"use client"

import { usePathname } from "next/navigation";
import Container from "../_components/container"
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted])

  if(!mounted) 
    return null;
  else
    return (
      <Container className="bg-[var(--green-light)] text-[var(--green-dark)] flex items-center justify-center gap-[43px] text-[24px]">
        <a href="/" className={pathname == '/' ? 'active' : 'hover-active transition duration-500 ease-in-out'}>Dashboard</a>
        <a href="/tambah-aset" className={pathname == '/tambah-aset' ? 'active' : 'hover-active transition duration-500 ease-in-out'}>Tambah Aset</a>
        <a href="/tambah-tagihan" className={pathname == '/tambah-tagihan' ? 'active' : 'hover-active transition duration-500 ease-in-out'}>Tambah Tagihan</a>
        <a href="/laporan-keuangan" className={pathname == '/laporan-keuangan' ? 'active' : 'hover-active transition duration-500 ease-in-out'}>Laporan Keuangan</a>
      </Container>
    );
}
