"use client"

import { useEffect, useState } from "react";
import Input from "../_components/input";
import InputDate from "../_components/inputDate";
import Container from "../_components/container";
import Button from "../_components/button";
import { Debt } from "@/interface/debt";
import { useAppDispatch } from "@/store/hooks";
import { createDebt, fetchDebts } from "@/services/debtServices";
import { useRouter } from 'next/navigation';

export default function TambahTagihan() {
  const [data, setData] = useState<Debt>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async () => {
    if(data && data.name && data.name !== '' && data.nominal && data.deadline) {
      await dispatch(createDebt(data!));
      await dispatch(fetchDebts());
      alert("Berhasil ditambahkan");
      router.push('/');
    }
  }

  return (
    <div className="flex flex-col gap-[10px] justify-center items-center justify-items-center bg-white h-[90vh] px-[54px] py-[39px]">
      <Container className="flex items-center justify-center bg-[var(--green-light)] text-[var(--green-dark)] font-extrabold text-[36px] rounded-[23px] w-1/2">Tambah Tagihan</Container>
      <Container className="flex flex-col items-center justify-center gap-[24px] bg-[var(--green-light)] rounded-[23px] w-1/2">
        <Input 
          label="Nama Tagihan"
          data={data}
          setData={setData}
          dataKey="name"
          type="text"
          error={data?.name ? false : true}
          errorMessage="Tambahkan nama tagihan"
        />
        <Input 
          label="Nominal"
          data={data}
          setData={setData}
          dataKey="nominal"
          type="number"
          error={data?.nominal ? false : true}
          errorMessage="Tambahkan nominal tagihan"
        />
        <InputDate 
          label="Tenggat"
          data={data}
          setData={setData}
          dataKey="deadline"
          error={data?.deadline ? false : true}
          errorMessage="Tambahkan tenggat tagihan"
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
