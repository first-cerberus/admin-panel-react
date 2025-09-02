import React from 'react';

const RectangularCard = ({ title, value, icon, percent, percentColor, percentBg, description }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-lg flex flex-col justify-between min-h-54 min-w-80">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-lg text-gray-700">{title}</span>
          <span className={`${percentColor} ${percentBg} text-sm font-medium px-2 py-1 rounded-md flex items-center`}>
            {icon} {percent}
          </span>
        </div>
        <div className="mt-3 text-3xl font-semibold text-gray-800">{value}</div>
      </div>
      <div className="mt-4 text-gray-600">
        {description}
      </div>
    </div>
  );
};

export default RectangularCard;