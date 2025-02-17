import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 600 },
];

const COLORS = [];

const BarChartComponent = () => {
  return (
    <BarChart data={data} width={400} height={270} fill="#F7F7F7">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" fill="#F7F7F7">
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill="#9C6DDF" />
        ))}
      </Bar>
    </BarChart>
  );
};

export default BarChartComponent;
