import React from "react";

export default function ModuleCard({ module ,handleModuleClick}) {
  return (
    <div className="shadow-lg bg-white rounded-lg p-4 cursor-pointer" onClick={()=>handleModuleClick(module)}>
      <span className="text-black font-semibold">{module?.name}</span>
    </div>
  );
}
