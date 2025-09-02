import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Січ', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Лют', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Бер', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Кві', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Тра', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Чер', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Лип', uv: 3490, pv: 4300, amt: 2100 },
];

function TestChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" /> {/* Сітка */}
        <XAxis dataKey="name" /> {/* Вісь X, використовуємо 'name' з даних */}
        <YAxis /> {/* Вісь Y */}
        <Tooltip /> {/* Підказки при наведенні курсору */}
        <Legend /> {/* Легенда (назви ліній) */}
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> {/* Перша лінія */}
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> {/* Друга лінія */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TestChart;