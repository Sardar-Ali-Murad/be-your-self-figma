import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const AreaChart = () => {
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

    const labels = ["23 %", "25 %", "25 %", "27 %"];
    const descriptions = [
      "Event Ticking Soles",
      "Product Sales",
      "Subscription Plan",
      "Ad managements",
    ];

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
          className="font-poppins text-[7.07px] font-medium leading-[10.61px] text-[#FFFFFF] drop-shadow-[0px_1.77px_1.77px_#00000040]"
        >
          {descriptions[index]}
        </tspan>
      </text>
    );
  };

  const data = [
    {
      name: "Medium",
      value: 23,
    },
    { name: "High", value: 25 },
    { name: "High", value: 25 },
    { name: "High", value: 27 },
  ];

  const COLORS = ["#21EDFF", "#34C832", "#D60D28", "#FFB800"];
  return (
    <>
      <PieChart width={270} height={270}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          //   label={renderCustomizedLabel}
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
