interface TBodyProps {
  data?: any[];
  header: {
    head: string;
    key: string;
  }[];
}

export default function TBody({
  data,
  header
}: TBodyProps) {
  return (
    <tbody>
      {
        data!.map((value, index) => (
          <tr key={index}>
            {
              header.map((head, i) => (
                <td 
                  key={index+i}
                  className={"text-[var(--green-light)] bg-[var(--green-dark)] text-center border-[11px] " + (i == 0 ? 'border-l-[0px]' : (i == header.length - 1 ? 'border-r-[0px]' : ''))}
                >
                  {value[head.key]}
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  );
}