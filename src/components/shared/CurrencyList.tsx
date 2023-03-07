import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { currency } from "../../utils/monetary";

export function CurrencyList({ list }: any) {
  const { removeRegister } = useContext(BudgetContext);

  return (
    <div className="w-full stripped max-h-52 overflow-auto">
      {list.map((item: any) => (
        <div
          key={item.id}
          className="p-1 flex justify-between border-b border-b-slate-300"
        >
          <div>{item.title}</div>
          <div className="flex items-center">
            <span>{currency(item.value)}</span>
            <i
              className="ml-3 p-1 text-black cursor-pointer rounded-full duration-100 hover:bg-slate-300"
              onClick={() => removeRegister(item.id)}
            >
              <AiOutlineClose />
            </i>
          </div>
        </div>
      ))}
    </div>
  );
}
