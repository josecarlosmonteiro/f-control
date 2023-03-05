// import { useState } from "react";

export function NewItemForm() {
  // const [focused, setFocused] = useState<boolean>(false);

  const fieldsetStyle = `p-2 border-2 border-slate-300 rounded`;
  const legendStyle = `ml-2 px-1 text-slate-400 italic`;

  return (
    <form className="mt-4">
      <fieldset className={fieldsetStyle}>
        <legend className={legendStyle}>Adicionar novo registro</legend>
        <div className="flex justify-between gap-6">
          <input
            className="w-full p-1 border-b-2 border-slate-300 outline-none"
            type="text"
            placeholder="novo registro"
            // onFocus={() => setFocused(true)}
            // onBlur={() => setFocused(false)}
          />
          <input
            className="w-full p-1 border-b-2 border-slate-300 outline-none"
            type="number"
            placeholder="R$ 0.000,00"
            // onFocus={() => setFocused(true)}
            // onBlur={() => setFocused(false)}
          />
        </div>
      </fieldset>
    </form>
  );
}
