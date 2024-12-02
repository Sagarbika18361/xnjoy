import React from "react";
import History from "./History";
import Navbar from "../_components/Layout/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mt-28 sm:mt-20">
        <History />
      </div>
    </>
  );
}
