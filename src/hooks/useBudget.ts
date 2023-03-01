import { useEffect, useState } from "react";
import { api } from "../services/api";

export interface BudgetProps {
  id: string;
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
      setTotals({
        in: data
          .filter((el: BudgetProps) => el.type === "in")
          .reduce(
            (prev: number, current: BudgetProps) =>
              prev + Number(current.value),
            0
          ),
        out: data
          .filter((el: BudgetProps) => el.type === "out")
          .reduce(
            (prev: number, current: BudgetProps) =>
              prev + Number(current.value),
            0
          ),
      });
    })();
  }, []);

  return {
    budget,
    totals,
  };
}
