import { ReactNode } from "react";

export function BudgetSubTitle({ children }: { children?: ReactNode }) {
  return <h1 className={"mb-4 text-xl"}>{children}</h1>;
}
