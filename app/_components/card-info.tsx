"use client"

import Container from "./container";

interface CardInfoProps {
  title: string;
  content: string;
}

export default function CardInfo({ 
  title, 
  content 
}: CardInfoProps) {
  return (
    <Container className="bg-[var(--green-light)] text-[var(--green-dark)] flex flex-col gap-[3px] px-[43px] w-full rounded-[23px]">
      <h1 className="font-extrabold text-[16px]">{title}</h1>
      <p className="font-extrabold text-[32px]">{content}</p>
    </Container>
  );
}