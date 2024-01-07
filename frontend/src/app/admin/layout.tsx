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
      <main className="flex-grow">{children}</main>
    </div>
  );
}
