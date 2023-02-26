import { useState, useEffect } from "react";
import { MonthBudgetProps } from "../components/Budget/interfaces";
import { total } from "../utils/monetary";

export function useBudgetList() {
  const [monthBudget, setMonthBudget] = useState<MonthBudgetProps>({
    totalIncomes: 0,
    totalExpenses: 0,
    incomesList: [],
    expensesList: [],
  });

  useEffect(() => {
    (function () {
      setMonthBudget((state) => ({
        ...state,
        incomesList: [{ title: "Salário mensal", value: 1500 }],
        expensesList: [
          { title: "Internet", value: 100 },
          { title: "Agiota", value: 400 },
        ],
      }));

      setMonthBudget((state) => ({
        ...state,
        totalExpenses: total(state.expensesList),
        totalIncomes: total(state.incomesList),
      }));
    })();
  }, []);

  return {
    monthBudget,
  };
}
