"use client"

import { useEffect, useState } from "react";
import Input from "../_components/input";
import InputDate from "../_components/inputDate";
import Container from "../_components/container";
import Checkbox from "../_components/checkbox";
import Button from "../_components/button";

export default function TambahAset() {
  const [data, setData] = useState<{tagihan_name: string; nominal: number; date: string;}>();

  return (
    <div className="flex flex-col gap-[10px] justify-center items-center justify-items-center bg-white h-[90vh] px-[54px] py-[39px]">
      <Container className="flex items-center justify-center bg-[var(--green-light)] text-[var(--green-dark)] font-extrabold text-[36px] rounded-[23px] w-1/2">Tambah Tagihan</Container>
      <Container className="flex flex-col items-center justify-center gap-[24px] bg-[var(--green-light)] rounded-[23px] w-1/2">
        <Input 
          label="Nama Tagihan"
          data={data}
          setData={setData}
          dataKey="tagihan_name"
          type="text"
        />
        <Input 
          label="Nominal"
          data={data}
          setData={setData}
          dataKey="nominal"
          type="number"
        />
        <InputDate 
          label="Tenggat"
          data={data}
          setData={setData}
          dataKey="date"
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
