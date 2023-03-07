import { createContext, ReactNode, useEffect, useState } from "react";
import { BudgetContextProps, BudgetItemProps } from "../interfaces/Budget";
import { api } from "../services/api";
import { filterByType, totalByType } from "../utils/lists";

export const BudgetContext = createContext<any>({});

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState([]);

  const [totals, setTotals] = useState({
    in: 0,
    out: 0,
  });

  const [listByType, setListByType] = useState<
    Record<string, BudgetItemProps[]>
  >({
    in: [],
    out: [],
  });

  useEffect(() => {
    (async function () {
      const { data } = await api.get("budget");

      setBudget(data);

      setTotals({
        in: totalByType(data, "in"),
        out: totalByType(data, "out"),
      });

      setListByType({
        in: filterByType(data, "in"),
        out: filterByType(data, "out"),
      });
    })();
  }, []);

  const addRegister = async (newItem: BudgetItemProps) => {
    try {
      const { data } = await api.post("budget", newItem);
      setBudget((state) => state.concat(data));
    } catch {
      console.error("Erro ao adicionar registro de orçamento.");
    }
  };

  const removeRegister = async (itemId: string) => {
    try {
      await api.delete(`budget/${itemId}`);

      const newState = [...budget];
      newState.splice(
        budget.findIndex((el: BudgetItemProps) => el.id === itemId),
        1
      );
      setBudget(newState);
    } catch {
      console.error("Erro ao remover registro de orçamento.");
    }
  };

  const context: BudgetContextProps = {
    budget,
    totals,
    listByType,
    addRegister,
    removeRegister,
  };

  return (
    <BudgetContext.Provider value={context}>{children}</BudgetContext.Provider>
  );
}
