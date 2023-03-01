import { FormEvent, useState } from "react";
import { useBudget } from "../../hooks/useBudget";

export function AddBudgetForm() {
  const { addBudgetItem } = useBudget();
  const [principalType, setPrincipalType] = useState<"in" | "out">("in");
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const handleFormValues = (event: any) => {
    const {
      target: { id, value },
    } = event;

    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addBudgetItem({
      title: formValues.title,
      value: formValues.value,
      type: principalType,
    });
  };

  return (
    <div className="m-2 p-3 border rounded">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <h1 className="text-lg">Tipo de cadastro:</h1>
          <select
            name="type"
            id="type"
            required
            value={principalType}
            onChange={() =>
              setPrincipalType(principalType === "in" ? "out" : "in")
            }
          >
            <option value="in">entrada</option>
            <option value="out">saída</option>
          </select>
        </div>
        <div className="m-3 flex justify-center gap-6">
          <div>
            <label htmlFor="">Título:</label>
            <br />
            <input
              id="title"
              type="text"
              placeholder="Nome do item..."
              required
              value={formValues.title || ""}
              onChange={handleFormValues}
            />
          </div>
          <div>
            <label htmlFor="">Valor:</label>
            <br />
            <input
              id="value"
              type="number"
              step={0.1}
              placeholder="100"
              required
              value={formValues.value || ""}
              onChange={handleFormValues}
            />
          </div>
        </div>
        <br />
        <button type="submit" className="border rounded p-3">
          Cadastrar dado
        </button>
      </form>
    </div>
  );
}
