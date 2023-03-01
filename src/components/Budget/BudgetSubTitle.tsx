import { ReactNode } from "react";

export function BudgetSubTitle({
  color,
  children,
}: {
  color: string;
  children?: ReactNode;
}) {
  return (
    <h1 className={`mb-4 text-xl text-${color === "success" ? "green" : "red"}-400`}>
      {children}
    </h1>
  );
}
