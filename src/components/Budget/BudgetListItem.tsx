import { BudgetProps } from "../../interfaces/Budget";
import { currency } from "../../utils/monetary";

export function BudgetListItem({title, value}: BudgetProps) {
  return (
    <div className="p-1 border-b border-slate-500 flex justify-between">
      <div>{title}</div>
      <div>{currency(value)}</div>
    </div>
  );
}
