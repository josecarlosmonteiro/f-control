import { AiFillEdit } from "react-icons/ai";
import { BiEdit } from 'react-icons/bi';
import { currency } from "../../utils/monetary";

export function CurrencyList({ list }: any) {
  return (
    <div className="w-full stripped">
      {list.map((item: any) => (
        <div
          key={item.id}
          className="p-1 flex justify-between border-b border-b-slate-300"
        >
          <div>{item.title}</div>
          <div className="flex items-center">
            <span>{currency(item.value)}</span>
            <i className="ml-3">
              <BiEdit />
            </i>
          </div>
        </div>
      ))}
    </div>
  );
}
