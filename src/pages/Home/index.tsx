import React from "react";
import { Budget } from "../../components/Budget";
import SideBar from "../../components/SideFunctions";

export default function Home() {
  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-8">
        <Budget />
      </div>
    </div>
  );
}
