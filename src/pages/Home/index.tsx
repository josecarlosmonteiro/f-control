import React from "react";
import Budget from "../../components/Budget";
import MonthControl from "../../components/MonthControl";
// import { SideMenuOptions } from "../../components/SideFunctions";
import { BudgetProvider } from "../../contexts/BudgetProvider";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* <div className="col-span-2">
        <SideMenuOptions />
      </div> */}
      <BudgetProvider>
        <div className="col-span-12 mt-2">
          <div className="grid grid-cols-12 gap-4 mt-2 px-3">
            <div className="col-span-6 p-4 bg-slate-700 rounded">
              <MonthControl />
            </div>
            <div className="col-span-6 p-4 bg-slate-700 rounded">
              <Budget />
            </div>
          </div>
        </div>
      </BudgetProvider>
    </div>
  );
}
