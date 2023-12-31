import React, { createContext, useContext, useState } from "react";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-black border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img src={'/assets/logos/logo.png'} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="Logo" />
            <button onClick={() => setExpanded((curr) => !curr)} className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img src={'/images/coverimage.jpg'} className="w-10 h-10 rounded-md" alt="Profile" />
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
              <div className="leading-4">
                <h4 className="font-semibold text-green-400">Haseena</h4>
                <span className="text-xs text-gray-600">rkc697418@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-green-200 to-green-400 text-green-800" : "hover:bg-green-200 text-gray-600"}`}>
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-green-200 ${expanded ? "" : "top-2"}`} />
      )}

      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-400 text-green-900 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </li>
  );
}
