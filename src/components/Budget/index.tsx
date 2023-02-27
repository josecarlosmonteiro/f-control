import { useState } from "react";
import { currency, totalFromList } from "../../utils/monetary";
import SimpleList from "../shared/SimpleList";

export default function Budget() {
  const [budget, setBudget] = useState([
    { id: 1, title: "Salário", value: 2200, type: "in" },
    { id: 2, title: "Agiotagem", value: 750, type: "in" },
    { id: 3, title: "Aluguel", value: 680, type: "out" },
    { id: 4, title: "Energia", value: 112, type: "out" },
    { id: 5, title: "Água", value: 195, type: "out" },
  ]);

  const filterByType = (type: string) =>
    budget.filter((el) => el.type === type);

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
