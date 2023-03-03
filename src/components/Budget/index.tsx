import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { BudgetProps } from "../../interfaces/Budget";
import { totalByType } from "../../utils/lists";
import { BudgetList } from "./BudgetList";
import { TotalInfo } from "./TotalInfo";

export function Budget() {
  const { budget }: { budget: BudgetProps[] } = useContext(BudgetContext);

  return (
    <div>
      <h1 className="my-2 mb-4 italic flex justify-between text-3xl">
        Orçamento mensal
        <button className="p-1 px-4 border radius text-lg">Add</button>
      </h1>
      <div className="flex justify-between gap-4 mb-4">
        <TotalInfo
          title="Entradas"
          bg="success"
          value={totalByType(budget, "in")}
        />
        <TotalInfo
          title="Saídas"
          bg="danger"
          value={totalByType(budget, "out")}
        />
      </div>
      <BudgetList list={budget} />
    </div>
  );
}
