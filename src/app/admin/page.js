'use client'
import React, { useState } from "react";
import ModuleCard from "./components/ModuleCard/ModuleCard";
import AddVideo from "./components/AddVideo/AddVideo";

const modules = [{ name: "Add Video", value: "add_video" }];
export default function Page() {
  const [todo, setTodo] = useState("");
  const handleModuleClick = (module) => {
    setTodo(module.value);
  };
  return (
    <>
      <section className="grid grid-cols-3 gap-4 mt-20 p-6">
        {!todo && modules?.map((module) => (
          <ModuleCard module={module} handleModuleClick={handleModuleClick} />
        ))}
        
      </section>
      <section className="p-6">
      {todo === "add_video" && <AddVideo />}
      </section>
    </>
  );
}
