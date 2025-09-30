import { table } from "console";
import THead from "./thead";
import TBody from "./tbody";
import TFooter from "./tfooter";

interface TableProps {
  data?: any[];
  header: {
    head: string;
    key: string;
  }[];
  footer: {
    label: string;
    value: string
  }[]
}
export default function Table({
  data,
  header,
  footer
}: TableProps) {
  return (
    <div className="w-full h-max p-[11px] bg-[var(--green-light)] rounded-[23px]">
      <table className="w-full h-full">
        <THead header={header} />
        <TBody 
          data={data!}
          header={header}
        />
        <TFooter 
          footer={footer}
          colspan={header.length - 1}
        />
      </table>
    </div>
  );
}