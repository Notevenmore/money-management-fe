"use client"

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}

export default function Button({
  label,
  onClick,
  className
}: ButtonProps) {
  return (
    <button
      className={"py-[5px] px-[20px] items-center justify-center h-max w-max cursor-pointer rounded-[23px] font-extrabold text-[16px] " + className}
      onClick={onClick}
    >
      {label}
    </button>
  );
}