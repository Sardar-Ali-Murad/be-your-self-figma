import React from "react";
import img from "../../assets/video-image.svg";
import play from "../../assets/play-icon.svg";
import eye from "../../assets/eye-icon.svg";
import heart from "../../assets/heart.svg";
import dollar from "../../assets/dollar.svg";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Red", value: 1 },
  { name: "Blue", value: 1 },
  { name: "Cyan", value: 1 },
];

const dataSecond = [
  { name: "Red", value: 1 },
  { name: "Blue", value: 1 },
  { name: "Cyan", value: 1 },
];

const COLORS = ["#FA0505", "#4F71F1", "#008B98"];
const COLORSSECOND = ["#1C2D70", "#4F71F1", "#008B98"];

const BottomCards = () => {
  return (
    <div className="grid grid-cols-2 gap-[16px]">
      <div className="px-[16px] py-[8px] shadow-[0px_4px_4px_0px_#00000040]">
        <h1 className="font-poppins text-[14.52px] font-semibold leading-[21.78px] text-[#1C2D70] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          Top performing Content
        </h1>
        <div className="my-[17px] flex flex-col gap-[12px]">
          <div className="flex flex-row gap-[12px] rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[10px] pl-[17px]">
            <div className="relative">
              <img src={img} />
              <img src={play} className="absolute left-[30px] top-[10px]" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-poppins font-semibold text-[11.99px] leading-[17.99px] text-[#1C2D70]">
                How to maximize content reach
              </h1>
              <div className="flex flex-row gap-[14px]">
                <div className="flex flex-row gap-[3px]">
                  <img src={eye} />
                  <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
                <div className="flex flex-row gap-[3px]">
                  <img src={heart} />
                  <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
                <div className="flex flex-row gap-[3px]">
                  <img src={dollar} />
                  <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[12px] rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[10px] pl-[17px]">
            <div className="relative">
              <img src={img} />
              <img src={play} className="absolute left-[30px] top-[10px]" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-poppins font-semibold text-[11.99px] leading-[17.99px] text-[#1C2D70]">
                How to maximize content reach
              </h1>
              <div className="flex flex-row gap-[14px]">
                <div className="flex flex-row gap-[3px]">
                  <img src={eye} />
                  <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
                <div className="flex flex-row gap-[3px]">
                  <img src={heart} />
                  <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
                <div className="flex flex-row gap-[3px]">
                  <img src={dollar} />
                  <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[16px] py-[8px] shadow-[0px_4px_4px_0px_#00000040]">
        <h1 className="font-poppins text-[14.52px] font-semibold leading-[21.78px] text-[#1C2D70] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          Audience Insights
        </h1>
        <div className="mt-[25px] grid gap-[8px] grid-cols-2">
          <div className="shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)] py-[11px] px-[7px] rounded-[9px]">
            <h1 className="font-poppins text-[14.52px] font-semibold ml-[20px] leading-[21.78px] text-[#1C2D70] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              Demo
            </h1>
            <div className="flex flex-row items-center">
              <PieChart width={270} height={200}>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={100}
                  fill="#8884d8"
                  startAngle={90}
                  endAngle={450}
                  paddingAngle={0}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-row gap-[2px] items-center">
                  <div
                    className="h-[8px] w-[8px] bg-[#FA0505]"
                    style={{ borderRadius: "50%" }}
                  ></div>
                  <p
                    const
                    className="font-poppins font-semibold text-[7.53px] leading-[11.29px] tracking-[0] text-[#FA0505]"
                  >
                    Demo
                  </p>
                </div>
                <div className="flex flex-row gap-[2px] items-center">
                  <div
                    className="h-[8px] w-[8px] bg-[#4F71F1]"
                    style={{ borderRadius: "50%" }}
                  ></div>
                  <p
                    const
                    className="font-poppins font-semibold text-[7.53px] leading-[11.29px] tracking-[0] text-[#4F71F1]"
                  >
                    Demo
                  </p>
                </div>
                <div className="flex flex-row gap-[2px] items-center">
                  <div
                    className="h-[8px] w-[8px] bg-[#008B98]"
                    style={{ borderRadius: "50%" }}
                  ></div>
                  <p
                    const
                    className="font-poppins font-semibold text-[7.53px] leading-[11.29px] tracking-[0] text-[#008B98]"
                  >
                    Demo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)] py-[11px] px-[7px] rounded-[9px]">
            <h1 className="font-poppins text-[14.52px] font-semibold ml-[20px] leading-[21.78px] text-[#1C2D70] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              Devices
            </h1>
            <div className="flex flex-row items-center">
              <PieChart width={270} height={200}>
                <Pie
                  data={dataSecond}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={100}
                  fill="#8884d8"
                  startAngle={90}
                  endAngle={450}
                  paddingAngle={0}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORSSECOND[index % COLORSSECOND.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-row gap-[2px] items-center">
                  <div
                    className="h-[8px] w-[8px] bg-[#1C2D70]"
                    style={{ borderRadius: "50%" }}
                  ></div>
                  <p
                    const
                    className="font-poppins font-semibold text-[7.53px] leading-[11.29px] tracking-[0] text-[#1C2D70]"
                  >
                    Demo
                  </p>
                </div>
                <div className="flex flex-row gap-[2px] items-center">
                  <div
                    className="h-[8px] w-[8px] bg-[#4F71F1]"
                    style={{ borderRadius: "50%" }}
                  ></div>
                  <p
                    const
                    className="font-poppins font-semibold text-[7.53px] leading-[11.29px] tracking-[0] text-[#4F71F1]"
                  >
                    Demo
                  </p>
                </div>
                <div className="flex flex-row gap-[2px] items-center">
                  <div
                    className="h-[8px] w-[8px] bg-[#008B98]"
                    style={{ borderRadius: "50%" }}
                  ></div>
                  <p
                    const
                    className="font-poppins font-semibold text-[7.53px] leading-[11.29px] tracking-[0] text-[#008B98]"
                  >
                    Demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;
