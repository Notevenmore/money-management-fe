interface THeadProps {
  header: {
    head: string;
    key: string;
  }[];
}

export default function THead({
  header
}: THeadProps) {
  return (
    <thead>
      <tr>
        {
          header.map((value, index) => {
            return <th 
              key={index}
              className={"px-[20px] py-[13px] bg-[var(--green-dark)] text-[var(--green-light)] " + (index == 0 ? 'rounded-tl-[23px]' : (index == header.length - 1 ? 'rounded-tr-[23px]' : ''))}
              >
                {value.head}
              </th>;
          })
        }
      </tr>
    </thead>
  );
}