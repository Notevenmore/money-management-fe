"use client"

import CardInfo from "./_components/card-info";
import ComponentCard from "./_components/component-card";
import Button from "./_components/button";
import Container from "./_components/container";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setMounted(true);
  }, [mounted])

  if(!mounted) 
    return null;
  else
    return (
      <div className="grid grid-cols-2 grid-rows-5 gap-x-[48px] gap-y-[29px] justify-center justify-items-center bg-white h-[90vh]">
        <div className="w-full col-start-1 col-end-2 row-start-1 row-end-2 ps-[75px] pt-[39px]">
          <CardInfo 
            title="Pemasukan"
            content="Rp 100.000.000"
          />
        </div>
        <div className="w-full col-start-2 col-end-3 row-start-1 row-end-2 pe-[75px] pt-[39px]">
          <CardInfo 
            title="Tagihan"
            content="10 Tagihan"
          />
        </div>
        <div className="w-full col-start-1 col-end-2 row-start-2 row-end-3 ps-[75px] pt-[39px]">
          <CardInfo 
            title="Pengeluaran"
            content="Rp 90.000.000"
          />
        </div>
        <div className="w-full col-start-2 col-end-3 row-start-1 row-end-2 pe-[75px] pt-[39px]">
          <CardInfo 
            title="Tagihan"
            content="10 Tagihan"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-6 py-[39px] pe-[75px] w-full">
          <Container className="w-full h-full bg-[var(--green-light)] rounded-[23px] overflow-y-hidden">
            <div className="overflow-y-scroll h-full flex flex-col items-center gap-[10px]">
              <ComponentCard 
                title="Tagihan I - 1 Januari 2020"
                content="Paylater - 100.000"
              >
                <input type="checkbox" />
              </ComponentCard>
              <ComponentCard 
                title="Tagihan I - 1 Januari 2020"
                content="Paylater - 100.000"
              >
                <input type="checkbox" />
              </ComponentCard>
              <ComponentCard 
                title="Tagihan I - 1 Januari 2020"
                content="Paylater - 100.000"
              >
                <input type="checkbox" />
              </ComponentCard>
              <ComponentCard 
                title="Tagihan I - 1 Januari 2020"
                content="Paylater - 100.000"
              >
                <input type="checkbox" />
              </ComponentCard>
              <ComponentCard 
                title="Tagihan I - 1 Januari 2020"
                content="Paylater - 100.000"
              >
                <input type="checkbox" />
              </ComponentCard>
              <ComponentCard 
                title="Tagihan I - 1 Januari 2020"
                content="Paylater - 100.000"
              >
                <input type="checkbox" />
              </ComponentCard>
              <ComponentCard 
                title="Tagihan I - 1 Januari 2020"
                content="Paylater - 100.000"
              >
                <input type="checkbox" />
              </ComponentCard>
            </div>
          </Container>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-6 py-[39px] ps-[75px] w-full">
          <Container className="w-full h-full bg-[var(--green-light)] rounded-[23px] overflow-y-hidden">
            <div className="overflow-y-scroll h-full flex flex-col items-center gap-[10px]">
              <ComponentCard 
                title="Gold - 1 gr"
                content="Reusable Asset"
              >
                <Button 
                label="Sell"
                className="bg-[var(--green-light)] text-[var(--green-dark)]"
                onClick={() => {}}
                />
              </ComponentCard>
              <ComponentCard 
                title="Gold - 1 gr"
                content="Reusable Asset"
              >
                <Button 
                label="Sell"
                className="bg-[var(--green-light)] text-[var(--green-dark)]"
                onClick={() => {}}
                />
              </ComponentCard>
              <ComponentCard 
                title="Gold - 1 gr"
                content="Reusable Asset"
              >
                <Button 
                label="Sell"
                className="bg-[var(--green-light)] text-[var(--green-dark)]"
                onClick={() => {}}
                />
              </ComponentCard>
              <ComponentCard 
                title="Gold - 1 gr"
                content="Reusable Asset"
              >
                <Button 
                label="Sell"
                className="bg-[var(--green-light)] text-[var(--green-dark)]"
                onClick={() => {}}
                />
              </ComponentCard>
              <ComponentCard 
                title="Gold - 1 gr"
                content="Reusable Asset"
              >
                <Button 
                label="Sell"
                className="bg-[var(--green-light)] text-[var(--green-dark)]"
                onClick={() => {}}
                />
              </ComponentCard>
              <ComponentCard 
                title="Gold - 1 gr"
                content="Reusable Asset"
              >
                <Button 
                label="Sell"
                className="bg-[var(--green-light)] text-[var(--green-dark)]"
                onClick={() => {}}
                />
              </ComponentCard>
              <ComponentCard 
                title="Gold - 1 gr"
                content="Reusable Asset"
              >
                <Button 
                label="Sell"
                className="bg-[var(--green-light)] text-[var(--green-dark)]"
                onClick={() => {}}
                />
              </ComponentCard>
            </div>
          </Container>
        </div>
      </div>
    );
}
