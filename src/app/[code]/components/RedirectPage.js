"use client";
import React, { useEffect } from "react";
import "./RedirectPage.css";
import { useRouter } from "next/navigation";
import AnimeText from "@/app/_components/AnimeText/AnimeText";
import axios from "axios";

export default function RedirectPage({ code }) {
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL;

  const isValidCode = (code) => {
    // Regular expression to validate "afl-xxxx" format
    const regex = /^afl-\d{4}$/;
    return regex.test(code);
  };

  const handleIncrement = async () => {
    if (!isValidCode(code)) {
      console.error("Invalid code format:", code);
      return;
    }

    try {
      await axios.post(`${api}affiliate/upsert`, { code });
    } catch (error) {
      console.error("Error while sending the request:", error);
    }
  };

  useEffect(() => {
    router.push("/");
    handleIncrement();
  }, []);

  return (
    <div className="text-center mt-40">
      <div className="loading-wave mb-6">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
      <div className="pl-2 mt-4">
        <AnimeText text={"Welcome"} />
      </div>
    </div>
  );
}
