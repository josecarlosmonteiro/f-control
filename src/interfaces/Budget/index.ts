import { MouseEventHandler } from "react";

export interface BudgetProps {
  id: string;
  title: string;
  type: "in" | "out";
  value: string | number;
}

export interface BudgetContextProps {
  budget: BudgetProps[];
  totals: Record<"in" | "out", number>;
  listByType: Record<"in" | "out", BudgetProps[]>;
}

export interface TotalInfoProps {
  title?: string;
  value: string | number;
  bg?: "success" | "danger" | "null";
  clickFn?: MouseEventHandler<HTMLDivElement>;
}
