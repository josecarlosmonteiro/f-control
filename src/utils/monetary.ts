import { BudgetRegisterProps } from "./../components/Budget/interfaces";

export const printCurrency = (value: number | string) =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export const total = (list: BudgetRegisterProps[]) =>
  list.reduce((previous, current) => previous + current.value, 0);
