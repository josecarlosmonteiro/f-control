import { useState } from "react";
import { AddBudgetForm } from "./AddBudgetForm";
import { BudgetShowListType } from "./BudgetShowListType";

export default function Budget() {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div>
      <h1 className="flex items-center justify-between text-3xl font-semibold italic">
        Orçamento mensal
        <button className="text-sm border rounded p-2" onClick={() => setShowForm(!showForm)}>{showForm ? "Fechar Formulário" : "Cadastrar Item"}</button>
      </h1>
      <br />
      <div className="flex gap-6 justify-between">
        <BudgetShowListType title={"Entradas"} totalReference={"in"} />
        <BudgetShowListType title={"Saídas"} totalReference={"out"} />
      </div>
      {showForm && <AddBudgetForm />}
    </div>
  );
}
