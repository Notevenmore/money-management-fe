"use client"

import CardInfo from "./_components/card-info";
import ComponentCard from "./_components/component-card";
import Button from "./_components/button";
import Container from "./_components/container";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAssets } from "@/services/assetServices";
import { fetchDebts, updateDebt } from "@/services/debtServices";
import { fetchIncomes } from "@/services/incomeServices";
import { createOutcome, fetchOutcomes } from "@/services/outcomeServices";
import { Debt } from "@/interface/debt";

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {incomes} = useAppSelector((state) => state.income);
  const {outcomes} = useAppSelector((state) => state.outcome);
  const {debts} = useAppSelector((state) => state.debt);
  const {assets} = useAppSelector((state) => state.asset); 

  useEffect(() => {
    if(incomes && outcomes && debts && assets) {
      setMounted(true);
    }
  }, [incomes, outcomes, debts, assets])

  useEffect(() => {
    if(!assets) {
      dispatch(fetchAssets());
    }
  }, [assets])

  useEffect(() => {
    if(!debts) {
      dispatch(fetchDebts());    
    }
  }, [debts])

  useEffect(() => {
    if(!outcomes) {
      dispatch(fetchOutcomes());
    }
  }, [outcomes])

  useEffect(() => {
    if(!incomes) {
      dispatch(fetchIncomes());
    }
  }, [incomes])

  const onUpdate = async (id: number, value: boolean, debt: Debt) => {
    await dispatch(updateDebt({
      debt: {
        ...debt, 
        is_finish: value
      }, 
      id: id
    }));
    await dispatch(fetchDebts());
    await dispatch(fetchOutcomes());
    // if(value) {
    //   await dispatch(createOutcome({}))
    // }
  }

  if(!mounted && !incomes && !outcomes && !debts && !assets) 
    return null;
  else
    return (
      <div className="grid grid-cols-2 grid-rows-5 gap-x-[48px] gap-y-[29px] justify-center justify-items-center bg-white h-[90vh]">
        <div className="w-full col-start-1 col-end-2 row-start-1 row-end-2 ps-[75px] pt-[39px]">
          <CardInfo 
            title="Pemasukan"
            content={new Intl.NumberFormat(
              "id-ID", 
              {
                style: "currency",
                currency: "IDR"
              }
            ).format(incomes?.reduce((acc, curr) => acc + curr.nominal, 0) ?? 0)}
          />
        </div>
        <div className="w-full col-start-2 col-end-3 row-start-1 row-end-2 pe-[75px] pt-[39px]">
          <CardInfo 
            title="Tagihan"
            content={`${(debts?.filter((value) => value.is_finish === false) ?? []).length} Tagihan`}
          />
        </div>
        <div className="w-full col-start-1 col-end-2 row-start-2 row-end-3 ps-[75px] pt-[39px]">
          <CardInfo 
            title="Pengeluaran"
            content={new Intl.NumberFormat(
              "id-ID", 
              {
                style: "currency",
                currency: "IDR"
              }
            ).format(outcomes?.reduce((acc, curr) => acc + curr.nominal, 0) ?? 0)}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-6 py-[39px] pe-[75px] w-full">
          <Container className="w-full h-max max-h-full bg-[var(--green-light)] rounded-[23px] overflow-y-hidden">
            <div className="overflow-y-scroll h-full flex flex-col items-center gap-[10px]">
              {
                debts?.map((value, index) => (
                  <ComponentCard 
                    key={index}
                    title={`Tagihan ${index+1} - ${new Intl.DateTimeFormat('id-ID', {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    }).format(new Date(value.deadline))}`}
                    content={`${value.name} - ${new Intl.NumberFormat(
                      "id-ID", 
                      {
                        style: "currency",
                        currency: "IDR"
                      }
                    ).format(value.nominal)}`}
                  >
                    <input type="checkbox" onChange={(e) => {onUpdate(value.id!, e.target.checked, value)}} checked={value.is_finish} />
                  </ComponentCard>
                ))
              }
            </div>
          </Container>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-6 py-[39px] ps-[75px] w-full">
          <Container className="w-full h-full max-h-full bg-[var(--green-light)] rounded-[23px] overflow-y-hidden py-[39px]">
            <div className="overflow-y-scroll h-full max-h-full flex flex-col items-center gap-[10px]">
              {
                assets && assets?.length > 0 
                  ? assets?.map((value, index) => (
                    <ComponentCard 
                      key={index}
                      title={value.name}
                      content={value.is_reusable ? "Reusable Asset" : "Unreusable Asset"}
                    >
                      <Button 
                      label="Sell"
                      className="bg-[var(--green-light)] text-[var(--green-dark)]"
                      onClick={() => {}}
                      />
                    </ComponentCard>
                  )) : <Container className="w-full h-full bg-[var(--green-dark)] rounded-[23px] overflow-y-hidden py-[39px] text-[var(--green-light)] flex items-center justify-center font-bold text-xl tracking-[1px]">
                    Belum ada data aset yang ditambahkan
                  </Container>
              }
            </div>
          </Container>
        </div>
      </div>
    );
}
