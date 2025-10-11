"use client"

import Container from "./container";

interface ComponentCardProps {
  title: string;
  content: string;
  children?: React.ReactNode
}

export default function ComponentCard({
  title, 
  content,
  children
}: ComponentCardProps) {
  return (
    <Container
      className="bg-[var(--green-dark)] text-[var(--green-light)] flex items-center justify-between w-full rounded-[12px]"
    >
      <div className="flex flex-col gap-[3px] w-full">
        <h1 className="font-semibold text-[20px]">{title}</h1>
        <p className="text-[14px]">{content}</p>
      </div>
      {
        children && <div className="justify-end">
          {children}
        </div>
      }
    </Container>
  );
}