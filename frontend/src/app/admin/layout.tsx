"use client"
import {Index} from "@/Components/Sidebar/Index";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Index />
      <main className="flex-grow">
        <div className="bg-slate-300 mx-16 rounded-md h-5/6 mt-16">
          {children}
        </div>
      </main>
    </div>
  );
}
