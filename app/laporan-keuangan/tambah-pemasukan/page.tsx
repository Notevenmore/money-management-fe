"use client"

import { useEffect, useState } from "react";
import Input from "../../_components/input";
import InputDate from "../../_components/inputDate";
import Container from "../../_components/container";
import Select from "@/app/_components/select";
import Button from "../../_components/button";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from 'next/navigation';
import { createIncome, fetchIncomes } from "@/services/incomeServices";
import { Income } from "@/interface/income";

export default function TambahPemasukan() {
  const [data, setData] = useState<Income>();
  const dispatch = useAppDispatch();
  const router = useRouter();
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

  const onSubmit = async () => {
    if(data && data.name && data.name !== '' && data.nominal && data.date && data.category && data.category !== '') {
      await dispatch(createIncome(data!));
      await dispatch(fetchIncomes());
      alert("Berhasil ditambahkan");
      router.push('/laporan-keuangan');
    }
  }

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
          error={data?.name ? false : true}
          errorMessage="Tambahkan nama pemasukan"
        />
        <Input 
          label="Nominal Pemasukan"
          data={data}
          setData={setData}
          dataKey="nominal"
          type="number"
          error={data?.nominal ? false : true}
          errorMessage="Tambahkan nominal pemasukan"
        />
        <InputDate 
          label="Tanggal"
          data={data}
          setData={setData}
          dataKey="date"
          error={data?.date ? false : true}
          errorMessage="Tambahkan tanggal pemasukan"
        />
        <Select
          label="Kategori Pemasukan"
          options={kategoriPemasukan}
          data={data}
          setData={setData}
          dataKey="category"
          error={data?.category ? false : true}
          errorMessage="Tambahkan kategori pemasukan"
        />
        <Button 
          label="Submit"
          onClick={onSubmit}
          className="bg-[var(--green-dark)] text-[var(--green-light)] text-lg font-extrabold flex items-center justify-center !w-full"
        />
      </Container>
    </div>
  );
}
