"use client"

interface TFooterProps {
  footer: {
    label: string;
    value: string;
  }[];
  colspan: number;
}

export default function TFooter({
  footer,
  colspan
}: TFooterProps) {
  return (
    <tfoot>
      {
        footer.map((value, index) => (
          <tr key={index}>
            <td className={"bg-[var(--green-dark)] text-[var(--green-light)] border-[11px] border-l-[0px] text-center px-[10px] py-[13px] " + (index == footer.length - 1 ? 'rounded-bl-[23px] border-b-[0px]' : '')}>{value.label}</td>
            <td className={"bg-[var(--green-dark)] text-[var(--green-light)] border-[11px] border-r-[0px] px-[10px] py-[13px] " + (index == footer.length - 1 ? 'rounded-br-[23px] border-b-[0px]' : '')} colSpan={colspan}>{value.value}</td>
          </tr>
        ))
      }
    </tfoot>
  );
}