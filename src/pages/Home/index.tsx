import React from "react";
import SideBar from "../../components/SideFunctions";

export default function Home() {
  return (
    <div className="grid grid-cols-10 gap-4">
      <SideBar />
      <div className="p-4">
        <h2>Content</h2>
      </div>
    </div>
  );
}
