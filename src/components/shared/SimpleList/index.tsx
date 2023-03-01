import { currency } from "../../../utils/monetary";

interface SimpleListProps {
  list: Record<string, number | string>[];
  type?: "in" | "out";
}

export default function SimpleList({ list, type }: SimpleListProps) {
  const setClasses = (type?: string) => {
    let style = "flex justify-between border-b duration-100 hover:scale-105 ";

    if (type === "in") style += "text-green-300 border-green-300";
    if (type === "out") style += "text-red-300 border-red-300";

    return style;
  };

  return (
    <>
      {list.map((el) => (
        <div key={el.id} className={setClasses(type)}>
          <span>{el.title}</span>
          <span>{currency(el.value)}</span>
        </div>
      ))}
    </>
  );
}
