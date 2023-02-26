import { useBudgetList } from "../../hooks/useBudgetList";
import { printCurrency } from "../../utils/monetary";
import { BudgetList } from "./BudgetList";

export function Budget() {
  const { monthBudget } = useBudgetList();

  return (
    <div className="m-3 mt-5 p-4 bg-slate-600 rounded-md">
      <div className="flex justify-between text-2xl">
        <h2 className="font-semibold text-green-600">
          Entradas - {printCurrency(monthBudget.totalIncomes)}
        </h2>
        <h2 className="font-semibold text-red-500">
          Saídas - {printCurrency(monthBudget.totalExpenses)}
        </h2>
      </div>
      <hr />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <BudgetList list={monthBudget.incomesList} isIncome />
        <BudgetList list={monthBudget.expensesList} />
      </div>
    </div>
  );
}
