import { useContext, useState } from "react";

import { AiOutlineDollar } from "react-icons/ai";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { BudgetItemProps } from "../../interfaces/Budget";
import { CurrencyList } from "../shared/CurrencyList";
import { Modal } from "../shared/Modal";
import { BudgetList } from "./BudgetList";
import { TotalInfo } from "./TotalInfo";
import { amount, filterByType, totalByType } from "../../utils/lists";
import { NewItemForm } from "./NewItemForm";
import { currency } from "../../utils/monetary";
import { BudgetComparation } from "./BudgetComparation";

export function Budget() {
  const {
    budget,
    totals,
  }: {
    budget: BudgetItemProps[];
    totals: Record<"in" | "out", number>;
  } = useContext(BudgetContext);

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

      <BudgetComparation
        amount={amount(budget)}
        revenues={totalByType(budget, "in")}
      />

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
          <div className="mb-1 flex items-center text-xl">
            ({currency(totalByType(budget, "in"))})
            <i className="text-green-600 ml-2 mt-1">
              <AiOutlineDollar />
            </i>
          </div>
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
          <div className="mb-1 flex items-center text-xl">
            ({currency(totalByType(budget, "out"))})
            <i className="text-red-600 ml-2 mt-1">
              <AiOutlineDollar />
            </i>
          </div>
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
