import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import { SidebarItem }  from "./components/layout/Sidebar";

import { LuInfo, LuReceipt, LuBoxes, LuPackage, LuUserCheck, LuSettings, LuServer, LuHouse, LuChartColumn } from "react-icons/lu";
function App() {
  return (
    <>
      <Sidebar>
        <SidebarItem icon={<LuHouse size={20}/>} text="Головна" />
        <SidebarItem icon={<LuChartColumn size={20}/>} text="Статистика" />
        <SidebarItem icon={<LuReceipt size={20}/>} text="Користувачі" alert/>
        <SidebarItem icon={<LuBoxes size={20}/>} text="Склад" />
        <SidebarItem icon={<LuPackage size={20}/>} text="Замовлення" alert/>
        <SidebarItem icon={<LuUserCheck size={20}/>} text="Люди" />
        <hr className="my-3 border-gray-200"/>
        <SidebarItem icon={<LuSettings size={20}/>} text="Налаштування" />
        <SidebarItem icon={<LuInfo size={20}/>} text="Допомога" />
      </Sidebar>
    </>
  );
}

export default App;
