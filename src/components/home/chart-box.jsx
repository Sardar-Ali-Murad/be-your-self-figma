import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;

const AreaChart = ({ labels, descriptions, colors, data }) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        <tspan
          x={x}
          y={y - 10}
          className="font-poppins text-[13.05px] font-medium leading-[19.57px] text-[#FFFFFF] drop-shadow-[0px_3.27px_3.27px_#00000040]"
        >
          {labels[index]}
        </tspan>
        <tspan
          x={x}
          y={y + 10}
          className="font-poppins text-[9px] font-medium leading-[10.61px] text-[#FFFFFF] drop-shadow-[0px_1.77px_1.77px_#00000040]"
        >
          {descriptions[index]}
        </tspan>
      </text>
    );
  };

  const COLORS = colors;
  return (
    <>
      <PieChart width={270} height={270}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default AreaChart;
