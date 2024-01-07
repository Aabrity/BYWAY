import React from "react";
import {Index, SidebarItem} from '@/Components/Sidebar/index';
import {Home, Package, Book, Users } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <div className="h-full w-auto flex flex-col bg-blue-400 border-r shadow-sm">
      <Index>
        <Link href="/admin/blogs">
          <SidebarItem icon={<Home size={20} />} text="Home" />
        </Link>
        <Link href="/admin/packages">
          <SidebarItem icon={<Package size={20} />} text="Packages" />
        </Link>
        <Link href="/admin/blogs">
          <SidebarItem icon={<Book size={20} />} text="Blogs" />
        </Link>
        <Link href="/admin/signup">
          <SidebarItem icon={<Users size={20} />} text="Clients" />
        </Link>
      </Index>
    </div>
  );
}

