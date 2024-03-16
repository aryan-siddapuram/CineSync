"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid,
  Legend,
} from "recharts";

const gradientColor = {
  "0%": "#AED6F1",
  "100%": "#2471A3",
};

export function Languages({data}:any) {
  return (
    <ResponsiveContainer width="100%" height={425}>
      <BarChart width={500} height={300} data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill={`url(#colorGradient)`}
          radius={[4, 4, 0, 0]}
        />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="1">
            {Object.entries(gradientColor).map(([percent, color]) => (
              <stop key={percent} offset={percent} stopColor={color} />
            ))}
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}
