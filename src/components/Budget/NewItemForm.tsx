import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BudgetContext } from "../../contexts/BudgetProvider";

export function NewItemForm({ type }: { type: string }) {
  const { register, handleSubmit, setFocus, setValue } = useForm();
  const { addRegister } = useContext(BudgetContext);

  const fieldsetStyle = `p-2 border-2 border-slate-300 rounded`;
  const legendStyle = `ml-2 px-1 text-slate-400 italic`;

  const onSubmit = (data: any) => {
    addRegister({ ...data, type });
    setValue("title", "");
    setValue("value", "");
    setFocus("title");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={fieldsetStyle}>
        <legend className={legendStyle}>Adicionar novo registro</legend>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="w-full flex flex-col">
            <label htmlFor="">Título</label>
            <input
              className="py-1 border-b-2 border-slate-300 outline-none"
              type="text"
              placeholder="novo registro"
              {...register("title", { required: true })}
              autoFocus
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Valor</label>
            <input
              className="py-1 border-b-2 border-slate-300 outline-none"
              type="number"
              placeholder="R$ 0.000,00"
              step={0.1}
              {...register("value", { required: true })}
              required
            />
          </div>
        </div>
      </fieldset>
      <div className="mt-4 flex justify-end">
        <button className="py-1 px-4 border sm:hidden" type="submit">
          Registrar
        </button>
      </div>
    </form>
  );
}
