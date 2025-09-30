"use client"

import { useEffect, useState } from "react";
import Table from "../_components/table";
import Container from "../_components/container";
import Button from "../_components/button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchIncomes } from "@/services/incomeServices";
import { fetchOutcomes } from "@/services/outcomeServices";


export default function LaporanKeuangan() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {incomes} = useAppSelector((state) => state.income);
  const {outcomes} = useAppSelector((state) => state.outcome);
  const [report, setReport] = useState<{
    tanggal: string;
    tanggalFilter: string;
    pemasukan: string | null;
    pengeluaran: string | null;
    keterangan: string;
  }[]>();
  const [header, setHeader] = useState<{
    head: string,
    key: string
  }[]>([
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
  ]);

  const [footer, setFooter] = useState<{label: string, value: string}[]>()

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if(incomes && outcomes) {
      setReport([
        ...(incomes.map(value => ({
          tanggal: new Intl.DateTimeFormat('id-ID', {
            day: "2-digit",
            month: "long",
            year: "numeric"
          }).format(new Date(value.date)),
          tanggalFilter: value.date,
          pemasukan: new Intl.NumberFormat(
              "id-ID", 
              {
                style: "currency",
                currency: "IDR"
              }
            ).format(value.nominal),
          pengeluaran: null,
          keterangan: value.category
        }))),
        ...(outcomes.map(value => ({
          tanggal: new Intl.DateTimeFormat('id-ID', {
            day: "2-digit",
            month: "long",
            year: "numeric"
          }).format(new Date(value.date)),
          tanggalFilter: value.date,
          pengeluaran: new Intl.NumberFormat(
              "id-ID", 
              {
                style: "currency",
                currency: "IDR"
              }
            ).format(value.nominal),
          pemasukan: null,
          keterangan: value.category
        })))
      ].sort((a, b) => a.tanggalFilter.localeCompare(b.tanggalFilter)));
      setMounted(true);
      setFooter([{
        label: "Total",
        value: new Intl.NumberFormat(
          "id-ID", 
          {
            style: "currency",
            currency: "IDR"
          }
        ).format(
          (incomes?.reduce((acc, curr) => acc + curr.nominal, 0) ?? 0) 
          - (outcomes?.reduce((acc, curr) => acc + curr.nominal, 0) ?? 0)
        )
      }])
    }
  }, [incomes, outcomes])

  useEffect(() => {
    if(!incomes) {
      dispatch(fetchIncomes())
    }
  }, [incomes])

  useEffect(() => {
    if(!outcomes) {
      dispatch(fetchOutcomes())
    }
  }, [outcomes])

  if(!mounted && !footer && !report) 
    return null;
  else
    return (
      <div className="flex flex-col gap-[39px] justify-center justify-items-center bg-white h-max min-h-[90vh] px-[54px] py-[39px] overflow-y-scroll">
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
          data={report}
          header={header}
          footer={footer!}
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
