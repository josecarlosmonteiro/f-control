import { useEffect, useState } from "react";
import { api } from "../services/api";

export interface BudgetProps {
  id?: string;
  title: string;
  type: "in" | "out";
  value: number | string;
}

interface TotalsProps {
  in: number;
  out: number;
}

export function useBudget() {
  const [budget, setBudget] = useState<BudgetProps[]>([]);
  const [totals, setTotals] = useState<TotalsProps>({ in: 0, out: 0 });

  useEffect(() => {
    (async function () {
      const { data } = await api.get("budget");

      setBudget(data);
    })();
  }, []);

  useEffect(() => {
    setTotals({
      in: budget
        .filter((el: BudgetProps) => el.type === "in")
        .reduce(
          (prev: number, current: BudgetProps) => prev + Number(current.value),
          0
        ),
      out: budget
        .filter((el: BudgetProps) => el.type === "out")
        .reduce(
          (prev: number, current: BudgetProps) => prev + Number(current.value),
          0
        ),
    });
  }, [budget]);

  const addBudgetItem = async (newItem: BudgetProps) => {
    try {
      await api.post("budget", newItem);
      return setBudget((oldState) => [...oldState, newItem]);
    } catch {
      console.error("Erro ao cadastrar item no orçamento.");
    }
  };

  const getListByType = (type: string) => {
    return budget.filter((el) => el.type === type);
  };

  return {
    budget,
    totals,
    getListByType,
    addBudgetItem,
  };
}
