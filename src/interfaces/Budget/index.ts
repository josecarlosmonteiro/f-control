export interface BudgetProps {
  id: string;
  title: string;
  type: "in" | "out";
  value: string | number;
}
