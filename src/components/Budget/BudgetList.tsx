import { printCurrency } from "../../utils/monetary";
import { BudgetListProps, BudgetRegisterProps } from "./interfaces";

export function BudgetList({ list, isIncome = false }: BudgetListProps) {
  return (
    <div className="p-3 bg-slate-500 rounded">
      {list.map((item: BudgetRegisterProps) => (
        <div
          className={`flex justify-between border-b-slate-900 font-semibold ${
            isIncome ? "text-green-800" : "text-red-400"
          }`}
        >
          <div>{item.title}</div>
          <div>{printCurrency(item.value)}</div>
        </div>
      ))}
    </div>
  );
}
