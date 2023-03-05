import React from "react";
import { Budget } from "../../components/Budget";
import { BudgetProvider } from "../../contexts/BudgetProvider";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8 py-1 p-3 m-2 border border-slate-400 rounded shadow-lg">
        <BudgetProvider>
          <Budget />
        </BudgetProvider>
      </div>
    </div>
  );
}
