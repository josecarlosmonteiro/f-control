import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { filterByType } from "../../utils/lists";
import { ChartData, ChartDataProps } from "./ChartData";

export function Chart() {
  const { budget } = useContext(BudgetContext);
  const expenses = filterByType(budget, "out");

  const chartData: ChartDataProps = {
    type: "bar",
    labels: expenses.map((el) => el.title),
    data: expenses.map((el) => el.value),
  };

  return <ChartData {...chartData} />;
}
