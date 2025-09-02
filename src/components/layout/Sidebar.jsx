import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import logo from "../../assets/logoipsum-382.svg";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { CgMoreVertical } from "react-icons/cg";
import { FiMoreVertical } from "react-icons/fi";

const SidebarContext = createContext();

export const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    axios
      .get("/api/user") //  !!!
      .then((res) => setUser({ name: res.data.name, email: res.data.email }))
      .catch((err) =>
        console.error("Помилка при отриманні користувача: " + err)
      );
  }, []);

  return (
    <aside className="h-screen flex">
      <nav className="h-full flex flex-col bg-white border-r border-r-gray-200 shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-45" : "w-0"
            }`}
            alt="logo"
          />

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t border-t-gray-200 flex p-3">
          <img
            src="https://ui-avatars.com/api/?format=svg"
            alt=""
            className="w-10 h-10 rounded-md"
          ></img>

          <div
            className={`
          flex justify-between items-center
          overflow-hidden transition-all 
          ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{user.name || "Default User"}</h4>
              <span className="text-xs text-gray-600">
                {user.email || "default@viti.edu.ua"}
              </span>
            </div>
            <FiMoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      onClick={onClick}
      className={`relative flex items-center py-2 px-3 my-1 
        font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
            ? "bg-gray-100 text-gray-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-1.5"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
export default Sidebar;
