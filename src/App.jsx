import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Stats from "./components/pages/Stats";
import Users from "./components/pages/Users";
import Warehouse from "./components/pages/Warehouse";
import Orders from "./components/pages/Orders";
import People from "./components/pages/People";
import Settings from "./components/pages/Settings";
import Help from "./components/pages/Help";
import { SidebarItem } from "./components/layout/Sidebar";
import Home from "./components/pages/Home";

import {
  LuInfo,
  LuReceipt,
  LuBoxes,
  LuPackage,
  LuUserCheck,
  LuSettings,
  LuHouse,
  LuChartColumn,
} from "react-icons/lu";

function App() {
  const [activePage, setActivePage] = useState("Головна");
  const pageComponents = {
    Головна: <Home />,
    Статистика: <Stats />,
    Користувачі: <Users />,
    Склад: <Warehouse />,
    Замовлення: <Orders />,
    Люди: <People />,
    Налаштування: <Settings />,
    Допомога: <Help />,
  };
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarItem
          icon={<LuHouse size={20} />}
          text="Головна"
          active={activePage === "Головна"}
          onClick={() => setActivePage("Головна")}
        />
        <SidebarItem
          icon={<LuChartColumn size={20} />}
          text="Статистика"
          active={activePage === "Статистика"}
          onClick={() => setActivePage("Статистика")}
        />
        <SidebarItem
          icon={<LuReceipt size={20} />}
          text="Користувачі"
          active={activePage === "Користувачі"}
          onClick={() => setActivePage("Користувачі")}
          alert
        />
        <SidebarItem
          icon={<LuBoxes size={20} />}
          text="Склад"
          active={activePage === "Склад"}
          onClick={() => setActivePage("Склад")}
        />
        <SidebarItem
          icon={<LuPackage size={20} />}
          text="Замовлення"
          active={activePage === "Замовлення"}
          onClick={() => setActivePage("Замовлення")}
          alert
        />
        <SidebarItem
          icon={<LuUserCheck size={20} />}
          text="Люди"
          active={activePage === "Люди"}
          onClick={() => setActivePage("Люди")}
        />
        <hr className="my-3 border-gray-200" />
        <SidebarItem
          icon={<LuSettings size={20} />}
          text="Налаштування"
          active={activePage === "Налаштування"}
          onClick={() => setActivePage("Налаштування")}
        />
        <SidebarItem
          icon={<LuInfo size={20} />}
          text="Допомога"
          active={activePage === "Допомога"}
          onClick={() => setActivePage("Допомога")}
        />
      </Sidebar>
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        {pageComponents[activePage]}
      </div>
    </div>
  );
}

export default App;
