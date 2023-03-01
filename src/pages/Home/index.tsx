import React from "react";
import Budget from "../../components/Budget";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6 p-2 m-2 rounded bg-slate-600">
        <Budget />
      </div>
    </div>
  );
}
