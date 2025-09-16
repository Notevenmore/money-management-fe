"use client"

import { useEffect, useState } from "react";
import Table from "../_components/table";
import Container from "../_components/container";
import Button from "../_components/button";
import { useRouter } from "next/navigation";


export default function LaporanKeuangan() {
  const router = useRouter();
  const [data, setData] = useState([
    {
      tanggal: '10 September 2025, 15.55',
      pemasukan: 'Rp 3.200.000',
      pengeluaran: '',
      keterangan: 'Gaji Bulanan'
    },
    {
      tanggal: '11 September 2025, 15.55',
      pemasukan: 'Rp 1.000.000',
      pengeluaran: '',
      keterangan: 'Jajan Mingguan'
    },
    {
      tanggal: '12 September 2025, 15.55',
      pemasukan: '',
      pengeluaran: 'Rp 1.100.000',
      keterangan: 'Beli Emas 0.5 gr'
    },
    {
      tanggal: '10 September 2025, 15.55',
      pemasukan: '',
      pengeluaran: 'Rp 20.000',
      keterangan: 'Sarapan'
    },
  ]);

  const [header, setHeader] = useState([
    {
      head: 'Tanggal',
      key: 'tanggal'
    },
    {
      head: 'Pemasukan',
      key: 'pemasukan',
    },
    {
      head: 'Pengeluaran',
      key: 'pengeluaran',
    },
    {
      head: 'Keterangan',
      key: 'keterangan',
    }
  ])

  const [footer, setFooter] = useState([
    {
      label: 'Total',
      value: 'Rp 3.080.000'
    }
  ])

  const [mounted, setMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setMounted(true);
  }, [mounted])

  if(!mounted) 
    return null;
  else
    return (
      <div className="flex flex-col gap-[39px] justify-center justify-items-center bg-white h-[90vh] px-[54px] py-[39px]">
        <Container className="flex gap-[10px] items-center justify-center py-[10px] w-full h-[62px] bg-[var(--green-light)] rounded-[23px]">
          <Button 
            label="Tambah Pemasukan"
            className="bg-[var(--green-dark)] text-[var(--green-light)]"
            onClick={() => { router.push('/laporan-keuangan/tambah-pemasukan') }}
          />
          <Button 
            label="Laporan Keuangan"
            className="bg-[var(--green-dark)] text-[var(--green-light)]"
            onClick={() => {}}
          />
          <Button 
            label="Tambah Pengeluaran"
            className="bg-[var(--green-dark)] text-[var(--green-light)]"
            onClick={() => { router.push('/laporan-keuangan/tambah-pengeluaran') }}
          />
        </Container>
        <Table
          data={data}
          header={header}
          footer={footer}
        />
        <Container className="flex gap-[10px] items-center justify-center py-[10px] w-full h-[62px] bg-[var(--green-light)] rounded-[23px]">
          <Button 
            label="Ekspor Laporan ke XLSX"
            className="bg-[var(--green-dark)] text-[var(--green-light)]"
            onClick={() => {}}
          />
        </Container>
      </div>
    );
}
