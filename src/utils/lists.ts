import { BudgetProps } from "../interfaces/Budget";

export const filterByType = (list: BudgetProps[], type: "in" | "out") =>
  list.filter((el) => el.type === type);

export const totalByType = (list: BudgetProps[], type: "in" | "out") =>
  filterByType(list, type).reduce(
    (prev, current) => prev + Number(current.value),
    0
  );
