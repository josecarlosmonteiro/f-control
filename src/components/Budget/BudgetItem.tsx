import { BudgetProps } from "../../hooks/useBudget";
import { currency } from "../../utils/monetary";

export function BudgetItem({ title, value }: BudgetProps) {
  return (
    <div className="flex justify-between items-center p-1 border-b font-semibold">
      <span>{title}</span>
      <span>{currency(value)}</span>
    </div>
  );
}
