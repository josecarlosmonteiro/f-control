import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../service/api";

export interface BudgetProps {
  id: number;
  title: string;
  value: number | string;
  type: string;
}

export const BudgetContext = createContext<any>({});

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState<BudgetProps[]>([]);

  useEffect(() => {
    (async function () {
      const response = await api.get("budget");
      setBudget(response.data);
    })();
  }, []);

  const filterByType = (type: string) =>
    budget.filter((el: BudgetProps) => el.type === type);

  const context = { budget, filterByType };

  return (
    <BudgetContext.Provider value={context}>{children}</BudgetContext.Provider>
  );
}
