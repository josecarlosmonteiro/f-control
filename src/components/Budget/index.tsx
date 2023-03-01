import { useBudget } from "../../hooks/useBudget";
import { currency } from "../../utils/monetary";
import { BudgetItem } from "./BudgetItem";
import { BudgetSubTitle } from "./BudgetSubTitle";

export default function Budget() {
  const { budget, totals, getListByType } = useBudget();

  return (
    <div>
      <h1 className="text-3xl font-semibold italic">Orçamento mensal</h1>
      <br />
      <div className="flex gap-6 justify-between">
        <div className="w-full text-green-300">
          <BudgetSubTitle color="success">
            Entradas: {currency(totals.in)}
          </BudgetSubTitle>
          {!!budget.length &&
            getListByType("in").map((item) => (
              <BudgetItem key={item.id} {...item} />
            ))}
        </div>

        <div className="w-full text-red-300">
          <BudgetSubTitle color="danger">
            Saídas: {currency(totals.out)}
          </BudgetSubTitle>
          {!!budget.length &&
            getListByType("out").map((item) => (
              <BudgetItem key={item.id} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
}
