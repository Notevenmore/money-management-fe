import React from "react";

interface CheckboxProps<K extends string, T extends Record<string, any>> {
  label: string;
  conditionYes: string;
  conditionNo: string;
  dataKey: K;
  data: (T & { [key in K]: boolean }) | undefined;
  setData: React.Dispatch<React.SetStateAction<T | undefined>>;
}

export default function Checkbox<K extends string, T extends Record<string, any>> ({
  label,
  conditionYes,
  conditionNo,
  dataKey, 
  data,
  setData
}: CheckboxProps<K, T>) {

  const action = (value: boolean) => {
    setData({
      ...data!,
      [dataKey]: !value
    });
  }

  return (
    <div className={"flex gap-[10px] rounded-[10px] items-center w-full px-[16px] py-[12px] text-[12px] placeholder-transparent focus:outline-none transition-all duration-200 "+(data && data[dataKey] ? "text-[var(--green-dark)] bg-[var(--green-light)]" : "bg-[var(--green-dark)] text-[var(--green-light)]")}>
      <p className="text-lg font-semibold">{label}</p>
      <div className={"h-[25px] w-[70px] p-[4px] rounded-full "+(data && data[dataKey] ? "bg-[var(--green-dark)]" : "bg-[var(--green-light)]")} onClick={() => action(data && data[dataKey] ? data[dataKey] : false)}>
        <div className={"aspect-square h-full rounded-full transition-all duration-200 flex items-center justify-center "+(data && data[dataKey] ? " bg-[var(--green-light)] translate-x-[45px]" : "bg-[var(--green-dark)] translate-x-0")}>
          <img src={data && data[dataKey] ? "/icons/true.svg" : "/icons/false.svg"} />
        </div>
      </div>
      <p className="text-lg">{data && data[dataKey] ? conditionYes : conditionNo}</p>
    </div>
  );
}