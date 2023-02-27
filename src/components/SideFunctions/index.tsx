import React from "react";

export default function SideBar() {
  const sideFunctions: string[] = [
    "Orçamento",
    "Balanço Mensal",
    "Balanço anual",
  ];

  return (
    <aside className="relative p-2 h-screen bg-slate-800 drop-shadow-lg">
      <h1 className="mx-2 p-2 text-3xl italic font-semibold text-center">
        F-Control
      </h1>
      <hr />
      <div className="flex flex-col mt-3">
        {sideFunctions.map((fn) => (
          <div
            key={fn}
            className="p-2 border-b-2 border-b-slate-700 hover:border-b-transparent hover:bg-slate-600 duration-200 hover:px-5 cursor-pointer text-lg"
          >
            {fn}
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 w-full -mx-2 text-center text-sm text-slate-500">
        powered by Monteiro
      </div>
    </aside>
  );
}
