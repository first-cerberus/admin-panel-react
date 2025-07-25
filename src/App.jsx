import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
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
  return (
    <>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarItem icon={<LuHouse size={20} />} text="Головна" />
          <SidebarItem icon={<LuChartColumn size={20} />} text="Статистика" />
          <SidebarItem icon={<LuReceipt size={20} />}text="Користувачі" alert/>
          <SidebarItem icon={<LuBoxes size={20} />} text="Склад" />
          <SidebarItem icon={<LuPackage size={20} />} text="Замовлення" alert />
          <SidebarItem icon={<LuUserCheck size={20} />} text="Люди" />
          <hr className="my-3 border-gray-200" />
          <SidebarItem icon={<LuSettings size={20} />} text="Налаштування" />
          <SidebarItem icon={<LuInfo size={20} />} text="Допомога" />
        </Sidebar>
    
        <div className="flex-1 p-6 bg-gray-50 overflow-auto">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
