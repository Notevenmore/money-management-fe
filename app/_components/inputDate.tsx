"use client";

import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface InputDateProps {
  label: string;
  data: any;
  setData: React.Dispatch<SetStateAction<any>>;
  dataKey: string;
}

export default function InputDate({
  label,
  data,
  setData,
  dataKey,
}: InputDateProps) {
  const value = data && data[dataKey] ? new Date(data[dataKey]) : null;

  return (
    <div className="w-full flex justify-between gap-2 rounded-2xl bg-[var(--green-dark)] px-4 pt-2 pb-2 items-center border-[var(--green-light)] border-[1px]">
      <div className="relative w-full flex gap-2 items-center">
        <label className="text-[var(--green-light)] text-lg font-semibold">
          {label}
        </label>
        <DatePicker
          selected={value}
          onChange={(date: Date | null) => {
            setData({
              ...data!,
              [dataKey]: date ? date.toISOString().split("T")[0] : "",
            });
          }}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
          className="peer w-full h-full bg-transparent text-[var(--green-light)] focus:outline-none text-lg"
          calendarClassName="!bg-[var(--green-light)] !text-[var(--green-dark)] rounded-lg"
          dayClassName={(date) =>
            "react-datepicker__day" +
            (value &&
            date.toDateString() === new Date(value).toDateString()
              ? " !bg-[var(--green-dark)] !text-[var(--green-light)] rounded-full"
              : "")
          }
        />
      </div>
      <img src="/icons/calendar-icon.svg" alt="" />
    </div>
  );
}
