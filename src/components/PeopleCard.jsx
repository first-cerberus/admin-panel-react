import React from "react";
import { LuPlus, LuArrowUp, LuArrowDown } from "react-icons/lu";

const PeopleCard = () => {
  return (
    <div className="bg-white rounded-lg shadow p-5 max-w-xl">

      <div className="flex items-center justify-between">
        <span className="text-lg text-gray-700">Люди</span>
        <span className="text-red-700 bg-red-100 text-sm font-medium px-2 py-1 rounded-md flex items-center">
          <LuArrowDown size={20} /> 15%
        </span>
      </div>

      <div className="mt-3 text-3xl font-semibold text-gray-800">- 247 чол.</div>
      
      <div className="mt-4 text-gray-600">
        Загальний приріст людей за останній місяць. Порівняно із попереднім місяцем, кількість людей зменшилась на 15%</div>
    </div>
  );
};

export default PeopleCard;
