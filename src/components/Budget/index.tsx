import { BudgetProps, useBudget } from "../../hooks/useBudget";
import { currency } from "../../utils/monetary";

const BudgetItem = ({ title, value }: BudgetProps) => {
  return (
    <div className="flex justify-between items-center p-1 border-b font-semibold">
      <span>{title}</span>
      <span>{currency(value)}</span>
    </div>
  );
};

export default function Budget() {
  const { budget, totals } = useBudget();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl text-green-400">
          Entradas: {currency(totals.in)}
        </h1>
        <h1 className="text-2xl text-red-400">
          Saídas: {currency(totals.out)}
        </h1>
      </div>
      <br />
      <div>
        {!!budget.length &&
          budget.map((item) => <BudgetItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
