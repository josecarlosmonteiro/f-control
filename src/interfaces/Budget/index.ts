import { MouseEventHandler } from "react";

export interface BudgetItemProps {
  id: string;
  title: string;
  type: "in" | "out";
  value: string | number;
}

export interface BudgetContextProps {
  budget: BudgetItemProps[];
  totals: Record<"in" | "out", number>;
  listByType: Record<"in" | "out", BudgetItemProps[]>;
  addRegister: Function;
}

export interface TotalInfoProps {
  title?: string;
  value: string | number;
  bg?: "success" | "danger" | "null";
  clickFn?: MouseEventHandler<HTMLDivElement>;
}
