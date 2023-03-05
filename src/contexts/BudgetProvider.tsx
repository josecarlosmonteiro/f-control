import { createContext, ReactNode, useEffect, useState } from "react";
import { useBudget } from "../hooks/useBudget";
import { BudgetContextProps, BudgetProps } from "../interfaces/Budget";
import { filterByType, totalByType } from "../utils/lists";

export const BudgetContext = createContext<any>({});

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState([]);

  const [totals, setTotals] = useState({
    in: 0,
    out: 0,
  });

  const [listByType, setListByType] = useState<Record<string, BudgetProps[]>>({
    in: [],
    out: [],
  });

  const { getBudget } = useBudget(budget);

  useEffect(() => {
    getBudget().then((res) => {
      setBudget(res);

      setTotals({
        in: totalByType(res, "in"),
        out: totalByType(res, "out"),
      });

      setListByType({
        in: filterByType(res, "in"),
        out: filterByType(res, "out"),
      });
    });
  }, []);

  const context: BudgetContextProps = { budget, totals, listByType };

  return (
    <BudgetContext.Provider value={context}>{children}</BudgetContext.Provider>
  );
}
