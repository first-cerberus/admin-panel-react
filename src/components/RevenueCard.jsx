import React from "react";
import { LuArrowUp } from "react-icons/lu";
const RevenueCard = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-lg">

      <div className="flex items-center justify-between">
        <span className="text-lg text-gray-700">Доходи</span>
        <span className="text-green-700 bg-green-100 text-sm font-medium px-2 py-1 rounded-md flex items-center">
          <LuArrowUp size={20} /> 2.75%
        </span>
      </div>

      <div className="mt-3 text-3xl font-semibold text-gray-800">12,750$</div>
      <div className="mt-4 text-gray-600 ">
        Загальний приріст людей за останній місяць. Порівняно із попереднім місяцем, кількість людей зменшилась на 15%
      </div>

    </div>
  );
};

export default RevenueCard;
