"use client"
import {Sidebar} from "@/Components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
