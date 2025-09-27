"use client"

import { useEffect, useState } from "react";
import Input from "../../_components/input";
import InputDate from "../../_components/inputDate";
import Container from "../../_components/container";
import Select from "@/app/_components/select";
import Button from "../../_components/button";
import { Outcome } from "@/interface/outcome";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from "@/store/hooks";
import { createOutcome, fetchOutcomes } from "@/services/outcomeServices";

export default function TambahPengeluaran() {
  const [data, setData] = useState<Outcome>();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const kategoriPengeluaran = [
    {
      key: 'Pembelian Aset',
      value: 'Pembelian Aset'
    },
    {
      key: 'Konsumsi',
      value: 'Konsumsi'
    },
    {
      key: 'Others',
      value: 'Others'
    },
  ];

  const onSubmit = async () => {
    if(data && data.name && data.name !== '' && data.nominal && data.date && data.category && data.category !== '') {
      await dispatch(createOutcome(data!));
      await dispatch(fetchOutcomes());
      alert("Berhasil ditambahkan");
      router.push('/laporan-keuangan');
    }
  }

  return (
    <div className="flex flex-col gap-[10px] justify-center items-center justify-items-center bg-white h-[90vh] px-[54px] py-[39px]">
      <Container className="flex items-center justify-center bg-[var(--green-light)] text-[var(--green-dark)] font-extrabold text-[36px] rounded-[23px] w-1/2">Tambah Pengeluaran</Container>
      <Container className="flex flex-col items-center justify-center gap-[24px] bg-[var(--green-light)] rounded-[23px] w-1/2">
        <Input 
          label="Nama Pengeluaran"
          data={data}
          setData={setData}
          dataKey="name"
          type="text"
          error={data?.name ? false : true}
          errorMessage="Tambahkan nama pengeluaran"
        />
        <Input 
          label="Nominal Pengeluaran"
          data={data}
          setData={setData}
          dataKey="nominal"
          type="number"
          error={data?.nominal ? false : true}
          errorMessage="Tambahkan nominal pengeluaran"
        />
        <InputDate 
          label="Tanggal"
          data={data}
          setData={setData}
          dataKey="date"
          error={data?.date ? false : true}
          errorMessage="Tambahkan tanggal pengeluaran"
        />
        <Select
          label="Kategori Pengeluaran"
          options={kategoriPengeluaran}
          data={data}
          setData={setData}
          dataKey="category"
          error={data?.category ? false : true}
          errorMessage="Tambahkan kategori pengeluaran"
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
