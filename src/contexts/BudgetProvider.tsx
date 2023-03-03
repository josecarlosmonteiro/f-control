import { createContext, ReactNode, useEffect, useState } from "react";
import { useBudget } from "../hooks/useBudget";
import { BudgetProps } from "../interfaces/Budget";

export const BudgetContext = createContext<any>({});

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState<BudgetProps[]>([]);
  const { getBudget } = useBudget(budget);

  useEffect(() => {
    getBudget().then((response) => setBudget(response));
  }, []);

  const context = { budget };

  return (
    <BudgetContext.Provider value={context}>{children}</BudgetContext.Provider>
  );
}
