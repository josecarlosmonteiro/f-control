import { useState } from "react";
import { BudgetProps } from "../interfaces/Budget";
import { api } from "../services/api";

export function useBudget(initialBudget: BudgetProps[]) {
  const [list, setList] = useState(initialBudget);

  const getBudget = async () => {
    const { data } = await api.get("budget");
    return data;
  };

  const addRegister = async (newItem: BudgetProps) => {
    try {
      const { data } = await api.post("budget", newItem);
      setList([...list, data]);
    } catch {
      console.error("Um erro ocorreu ao adicionar novo registro no orçamento.");
    }
  };

  const removeRegister = async (itemRemove: BudgetProps) => {
    try {
      await api.delete(`budget/${itemRemove.id}`);
      console.log("Item removido com sucesso!");

      const index = list.findIndex((item) => item.id === itemRemove.id);
      const newList = [...list];
      newList.splice(index, 1);

      return newList;
    } catch {
      console.error("Um erro ocorreu ao remover item do orçamento.");
    }
  };

  return {
    list,
    getBudget,
    addRegister,
    removeRegister,
  };
}
