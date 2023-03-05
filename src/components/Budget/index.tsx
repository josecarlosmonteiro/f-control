import { useContext, useState } from "react";

import { AiOutlineDollar } from "react-icons/ai";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { BudgetItemProps } from "../../interfaces/Budget";
import { CurrencyList } from "../shared/CurrencyList";
import { Modal } from "../shared/Modal";
import { BudgetList } from "./BudgetList";
import { TotalInfo } from "./TotalInfo";
import { filterByType, totalByType } from "../../utils/lists";
import { NewItemForm } from "./NewItemForm";

export function Budget() {
  const { budget }: { budget: BudgetItemProps[] } = useContext(BudgetContext);

  const [revenuesModal, setRevenuesModal] = useState<boolean>(false);
  const [expensesModal, setExpensesModal] = useState<boolean>(false);

  return (
    <div>
      <h1 className="my-2 mb-4 italic flex justify-between text-3xl">
        Orçamento mensal
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
        {!!budget.length ? (
          <>
            <div className="w-full">
              <BudgetList list={filterByType(budget, "in")} />
            </div>
            <div className="w-full">
              <BudgetList list={filterByType(budget, "out")} />
            </div>
          </>
        ) : (
          <div>
            Clique em uma das sessões acima para iniciar seus lançamentos
            mensais.
          </div>
        )}
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
        <NewItemForm type="in" />
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
        <NewItemForm type="out" />
      </Modal>
    </div>
  );
}
