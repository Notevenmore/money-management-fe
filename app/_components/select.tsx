import { useState } from "react";

interface SelectProps {
  label: string;
  options: {
    key: string;
    value: any;
  }[];
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  dataKey: string;
}

export default function Select({
  label,
  data,
  setData,
  dataKey,
  options
}: SelectProps) {
  const [isShow, setIsShow] = useState(false);
  const [focused, setFocused] = useState(false);

  const action = (
    e: React.MouseEvent<HTMLDivElement>, 
    value: any
  ) => {
    e.stopPropagation();
    console.log(value);
    setData({
      ...data!,
      [dataKey]: value
    });
    setIsShow(false);
  };

  const selectedValue = data && data[dataKey]
    ? options.find(opt => data[dataKey] === opt.value)?.key
    : "";

  return (
    <div 
      className="relative w-full cursor-pointer"
      onClick={() => {
        setIsShow(!isShow);
        setFocused(!focused);
      }}
      onBlur={() => {
        setIsShow(false)
        setFocused(false)
      }}
      tabIndex={0}
    >
      <div
        className={`peer w-full rounded-2xl bg-[var(--green-dark)] text-[var(--green-light)] border-[1px] border-[var(--green-light)] focus:outline-none flex justify-between items-center transition-all duration-200 ${
          isShow || selectedValue || focused ? (selectedValue && (!isShow || focused) ? "px-4 py-8" : 'rounded-b-none px-4 py-8') : "px-4 py-4"
        }`}
      >
        <span>{selectedValue || ""}</span>
        <img
          src="/icons/keyboard_arrow_down.png"
          alt=""
          className={
            isShow
              ? "rotate-180 transition-all duration-200"
              : "rotate-0 transition-all duration-200"
          }
        />
      </div>
      <label
        className={`
          absolute left-4 text-[var(--green-light)] transition-all duration-200
          ${focused || selectedValue || isShow
            ? "top-2 text-sm font-extrabold"
            : "top-4 text-lg font-semibold"}
        `}
      >
        {label}
      </label>
      <div
        className={`absolute top-[100%] left-0 w-full bg-[var(--green-dark)] rounded-b-2xl overflow-hidden border-x-[1px] border-b-[1px] border-[var(--green-light)] z-50 transition-all duration-200 ${
          isShow ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="px-4 py-2 text-[var(--green-light)] hover:bg-[var(--green-light)] hover:text-[var(--green-dark)] cursor-pointer transition-all duration-200 z-50"
            onClick={(e) => action(e, option.value)}
          >
            {option.key}
          </div>
        ))}
      </div>
    </div>
  );
}
