import { BudgetShowListType } from "./BudgetShowListType";

export default function Budget() {
  return (
    <div>
      <h1 className="text-3xl font-semibold italic">Orçamento mensal</h1>
      <br />
      <div className="flex gap-6 justify-between">
        <BudgetShowListType title={"Entradas"} totalReference={"in"} />
        <BudgetShowListType title={"Saídas"} totalReference={"out"} />
      </div>
    </div>
  );
}
