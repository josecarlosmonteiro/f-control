import { useContext, useState } from "react";
import { BudgetContext } from "../../contexts/BudgetProvider";
import { Modal } from "../shared/Modal";
import SimpleList from "../shared/SimpleList";

export default function MonthControl() {
  const { budget, filterByType } = useContext(BudgetContext);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <h1 className="text-3xl">Controle de contas</h1>
      <hr />
      <br />
      {!!budget.length ? (
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6">
            <SimpleList list={filterByType("out")} />
          </div>
          <div className="col-span-2 flex flex-col gap-4 justify-center">
            <button className="w-full py-2 border rounded-sm hover:bg-slate-600">
              Editar
            </button>
            <button className="w-full py-2 border rounded-sm hover:bg-slate-600">
              Fechar mês
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setModalOpen(true)}
            className="p-3 px-5 text-xl border rounded-sm hover:bg-slate-600"
          >
            Começar
          </button>
        </div>
      )}
      <Modal
        title="Orçamento"
        isOpen={modalOpen}
        closeFunction={() => setModalOpen(false)}
      ></Modal>
    </>
  );
}
