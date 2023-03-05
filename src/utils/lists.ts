import { BudgetItemProps } from "../interfaces/Budget";

export const filterByType = (list: BudgetItemProps[], type: "in" | "out") =>
  list
    .filter((el) => el.type === type)
    .sort((a, b) => {
      if (Number(a.value) > Number(b.value)) return -1;
      if (Number(a.value) < Number(b.value)) return 1;

      return 0;
    });

export const totalByType = (list: BudgetItemProps[], type: "in" | "out") =>
  filterByType(list, type).reduce(
    (prev, current) => prev + Number(current.value),
    0
  );

export const amount = (list: BudgetItemProps[]) =>
  list.reduce((prev, current) => prev + Number(current.value), 0);
