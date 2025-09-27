"use client"

import { useEffect, useState } from "react";
import Input from "../_components/input";
import Container from "../_components/container";
import Checkbox from "../_components/checkbox";
import Button from "../_components/button";
import { useAppDispatch } from "@/store/hooks";
import { createAsset, fetchAssets } from "@/services/assetServices";
import { Asset } from "@/interface/asset";
import { useRouter } from 'next/navigation';

export default function TambahAset() {
  const [data, setData] = useState<Asset>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if(!data)
      setData({...data!, is_reusable: false});
  }, [data])

  const onSubmit = async () => {
    if(data && data.name && data.name !== '') {
      await dispatch(createAsset(data!));
      await dispatch(fetchAssets());
      alert("Berhasil ditambahkan");
      router.push('/');
    }
  }

  return (
    <div className="flex flex-col gap-[10px] justify-center items-center justify-items-center bg-white h-[90vh] px-[54px] py-[39px]">
      <Container className="flex items-center justify-center bg-[var(--green-light)] text-[var(--green-dark)] font-extrabold text-[36px] rounded-[23px] w-1/2">Tambah Aset</Container>
      <Container className="flex flex-col items-center justify-center gap-[24px] bg-[var(--green-light)] rounded-[23px] w-1/2">
        <Input 
          label="Nama Aset"
          data={data}
          setData={setData}
          dataKey="name"
          type="text"
          error={data?.name ? false : true}
          errorMessage="Tambahkan nama aset"
        />
        <Checkbox 
          label="Dapat diperjual belikan?"
          conditionYes="Dapat"
          conditionNo="Tidak"
          dataKey="is_reusable"
          data={data}
          setData={setData}
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
