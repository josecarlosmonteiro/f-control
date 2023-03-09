import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { amount, totalByType } from "../../utils/lists";

export function BudgetComparation() {
  const { budget } = useContext(BudgetContext);
  const budgetAmount = amount(budget);

  return (
    <>
      {!!budgetAmount && (
        <div className="h-2 my-3 flex items-center bg-red-700 rounded">
          <div
            style={{
              width: `${Math.round(
                (totalByType(budget, "in") / budgetAmount) * 100
              )}%`,
            }}
            className="h-full bg-green-600 rounded duration-1000"
          ></div>
        </div>
      )}
    </>
  );
}
