import { BudgetProvider } from "../../contexts/BudgetProvider";
import { Budget } from "../../components/Budget";
import { Chart } from "../../components/Chart";

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-4 pt-4">
      <BudgetProvider>
        <div className="col-span-12">
          <div className="py-1 p-3 m-2 bg-gray-100 rounded shadow-lg">
            <h1 className="my-1 italic text-3xl mb-3">
              Orçamento mensal
              <h4 className="text-slate-400 text-sm">
                Clique em uma sessão para editá-la.
              </h4>
            </h1>
            <Budget />
          </div>
        </div>
        <div className="col-span-12">
          <div className="py-1 p-3 m-2 bg-gray-100 rounded shadow-lg">
            <h1 className="my-1 italic text-3xl">Gastos em geral</h1>
            <br />
            <Chart />
          </div>
        </div>
      </BudgetProvider>
    </div>
  );
}
