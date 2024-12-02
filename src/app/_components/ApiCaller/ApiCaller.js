"use client";
import { handleUserVisits } from "@/utils/handleVisits";
import React, { useEffect } from "react";

export default function ApiCaller() {
  useEffect(() => {
    handleUserVisits();
  }, []);
  return <></>;
}
