import { useContext, useState } from "react";

import { AiOutlineDollar } from "react-icons/ai";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { BudgetProps } from "../../interfaces/Budget";
import { CurrencyList } from "../shared/CurrencyList";
import { Modal } from "../shared/Modal";
import { BudgetList } from "./BudgetList";
import { TotalInfo } from "./TotalInfo";
import { filterByType, totalByType } from "../../utils/lists";
import { NewItemForm } from "./NewItemForm";

export function Budget() {
  const { budget }: { budget: BudgetProps[] } = useContext(BudgetContext);

  const [revenuesModal, setRevenuesModal] = useState<boolean>(false);
  const [expensesModal, setExpensesModal] = useState<boolean>(false);

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
          clickFn={() => setRevenuesModal(true)}
        />
        <TotalInfo
          title="Saídas"
          bg="danger"
          value={totalByType(budget, "out")}
          clickFn={() => setExpensesModal(true)}
        />
      </div>
      <div className="flex justify-between gap-4">
        <div className="w-full">
          <BudgetList list={filterByType(budget, "in")} />
        </div>
        <div className="w-full">
          <BudgetList list={filterByType(budget, "out")} />
        </div>
      </div>

      <Modal
        title="Minhas receitas"
        closeFn={() => setRevenuesModal(false)}
        open={revenuesModal}
        trailingIcon={
          <i className="text-green-600">
            <AiOutlineDollar />
          </i>
        }
      >
        <div className="text-green-600">
          <CurrencyList list={filterByType(budget, "in")} />
        </div>
        <NewItemForm />
      </Modal>

      <Modal
        title="Minhas despesas"
        closeFn={() => setExpensesModal(false)}
        open={expensesModal}
        trailingIcon={
          <i className="text-red-600">
            <AiOutlineDollar />
          </i>
        }
      >
        <div className="text-red-600">
          <CurrencyList list={filterByType(budget, "out")} />
        </div>
        <NewItemForm />
      </Modal>
    </div>
  );
}
