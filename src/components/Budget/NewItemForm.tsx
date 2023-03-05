import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BudgetContext } from "../../contexts/BudgetProvider";

export function NewItemForm({ type }: { type: string }) {
  const { register, handleSubmit, reset, setFocus } = useForm();
  const { addRegister } = useContext(BudgetContext);

  const fieldsetStyle = `p-2 border-2 border-slate-300 rounded`;
  const legendStyle = `ml-2 px-1 text-slate-400 italic`;

  const onSubmit = (data: any) => {
    addRegister({ ...data, type });
    reset();
    setFocus("title");
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={fieldsetStyle}>
        <legend className={legendStyle}>Adicionar novo registro</legend>
        <div className="flex justify-between gap-6">
          <div className="w-full flex flex-col">
            <label htmlFor="">Título</label>
            <input
              className="p-1 border-b-2 border-slate-300 outline-none"
              type="text"
              placeholder="novo registro"
              {...register("title", { required: true })}
              autoFocus
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Valor</label>
            <input
              className="p-1 border-b-2 border-slate-300 outline-none"
              type="number"
              placeholder="R$ 0.000,00"
              step={0.1}
              {...register("value", { required: true })}
            />
          </div>
          <button className="hidden" type="submit" />
        </div>
      </fieldset>
    </form>
  );
}
