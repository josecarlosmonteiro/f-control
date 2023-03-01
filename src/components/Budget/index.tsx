import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { currency, totalFromList } from "../../utils/monetary";
import SimpleList from "../shared/SimpleList";

export default function Budget() {
  const { filterByType } = useContext(BudgetContext);

  return (
    <div>
      <div className="text-3xl">Orçamento mensal</div>
      <hr />
      <br />
      <div className="flex justify-between text-xl font-bold">
        <div className="text-green-500">
          Entradas: {currency(totalFromList(filterByType("in")))}
        </div>
        <div className="flex justify-between text-red-500">
          Saídas {currency(totalFromList(filterByType("out")))}
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full">
          <SimpleList type="in" list={filterByType("in")} />
        </div>
        <div className="w-full">
          <SimpleList type="out" list={filterByType("out")} />
        </div>
      </div>
    </div>
  );
}
