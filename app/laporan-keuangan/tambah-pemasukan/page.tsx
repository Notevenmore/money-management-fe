"use client"

import { useEffect, useState } from "react";
import Input from "../../_components/input";
import InputDate from "../../_components/inputDate";
import Container from "../../_components/container";
import Select from "@/app/_components/select";
import Button from "../../_components/button";

export default function TambahPemasukan() {
  const [data, setData] = useState<{name: string; tanggal: string; kategori_pemasukan: string}>();
  const kategoriPemasukan = [
    {
      key: 'Penjualan Aset',
      value: 'Penjualan Aset'
    },
    {
      key: 'Gaji',
      value: 'Gaji'
    },
    {
      key: 'Jajan',
      value: 'Jajan'
    },
    {
      key: 'Others',
      value: 'Others'
    },
  ];

  return (
    <div className="flex flex-col gap-[10px] justify-center items-center justify-items-center bg-white h-[90vh] px-[54px] py-[39px]">
      <Container className="flex items-center justify-center bg-[var(--green-light)] text-[var(--green-dark)] font-extrabold text-[36px] rounded-[23px] w-1/2">Tambah Pemasukan</Container>
      <Container className="flex flex-col items-center justify-center gap-[24px] bg-[var(--green-light)] rounded-[23px] w-1/2">
        <Input 
          label="Nama Pemasukan"
          data={data}
          setData={setData}
          dataKey="name"
          type="text"
        />
        <InputDate 
          label="Tanggal"
          data={data}
          setData={setData}
          dataKey="tanggal"
        />
        <Select
          label="Kategori Pemasukan"
          options={kategoriPemasukan}
          data={data}
          setData={setData}
          dataKey="kategori_pemasukan"
        />
        <Button 
          label="Submit"
          onClick={() => {}}
          className="bg-[var(--green-dark)] text-[var(--green-light)] text-lg font-extrabold flex items-center justify-center !w-full"
        />
      </Container>
    </div>
  );
}
