"use client"
import React from "react";
import { Index } from "@/Components/Sidebar/Index";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Index />
      <main className="flex-grow flex justify-center items-center">
        <div className="bg-slate-300 mx-16 rounded h-5/6 w-[90%] ">
          {children}
        </div>
      </main>
    </div>
  );
}
