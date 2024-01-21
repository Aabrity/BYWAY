import React from "react";
import { Sidebar, SidebarItem } from "@/Components/Sidebar/Sidebar";
import { Home, Package, Book, Users, Lock } from "lucide-react";
import Link from "next/link";
import axios from "axios";

 const HandleLogout = async () => {
  try {
     await axios.get("http://localhost:8081/auth/logout");
     localStorage.removeItem("token")
    } catch (err) {
     console.error(err);
   }
 };
export const Index = () => {
  return (
    <div className="h-full w-auto flex flex-col bg-blue-400 border-r shadow-sm">
      <Sidebar>
        <Link href="/admin/dash">
          <SidebarItem icon={<Home size={20} />} text="Home" />
        </Link>
        <Link href="/admin/packages">
          <SidebarItem icon={<Package size={20} />} text="Packages" />
        </Link>
        <Link href="/admin/blogs">
          <SidebarItem icon={<Book size={20} />} text="Blogs" />
        </Link>
        <Link href="/auth/signup">
          <SidebarItem icon={<Users size={20} />} text="Clients" />
        </Link>
        <div className="mt-78">
          <Link href={"/auth"} onClick={HandleLogout}>
            <SidebarItem icon={<Lock size={20} />} text="Logout" />
          </Link>
        </div>
      </Sidebar>
    </div>
  );
};
