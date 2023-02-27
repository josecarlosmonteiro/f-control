import React from "react";
import Budget from "../../components/Budget";
import SideBar from "../../components/SideFunctions";

export default function Home() {
  return (
    <div className="grid">
      <div className="col-span-8 p-4 m-4 bg-slate-700 rounded-md">
        <Budget />
      </div>
    </div>
  );
}
