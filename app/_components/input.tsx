import { SetStateAction, useState } from "react";

interface InputProps {
  label: string;
  data: any;
  setData: React.Dispatch<SetStateAction<any>>;
  dataKey: string;
  type: string;
  error: boolean;
  errorMessage: string;
}

export default function Input({ 
  label,
  data,
  setData,
  dataKey,
  type,
  error,
  errorMessage
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full flex flex-col gap-1">
      <input
        type="text"
        value={data && data[dataKey] 
          ? (type === "number" ? Number(data[dataKey]) : data[dataKey]) 
          : ''}
        onChange={(e) => {
          setData({
            ...data!,
            [dataKey]: type === "number" ? e.target.value === "" ? 0 : Number(e.target.value) : e.target.value
          })
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full rounded-2xl bg-[var(--green-dark)] px-4 pt-6 pb-2 text-[var(--green-light)] border-[1px] border-[var(--green-light)] placeholder-transparent focus:outline-none"
        placeholder={label}
      />
      { error && <p className="text-[#ff0000] text-sm ms-4 font-semibold tracking-[.3px]">{errorMessage}</p> }
      <label
        className={`
          absolute left-4 text-[var(--green-light)] transition-all duration-200
          ${focused || (data && data[dataKey])
            ? "top-1 text-sm font-extrabold"
            : "top-4 text-lg font-semibold"}
        `}
      >
        {label}
      </label>
    </div>
  );
}
