import React from "react";
import PieChartComponent from "../common/pie-chart";
import BarChartComponent from "../common/bar-chart";

const Graphs = () => {
  return (
    <div className="grid grid-cols-3 gap-[34px]">
      <div className="shadow-[0px_4px_4px_0px_#00000040] col-span-2  rounded-[2px] px-[12px] pt-[8px] pb-[37px] border border-[1px] border-[#00000033]">
        <div className="flex justify-between items-center">
          <h1 className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C]">
            Ticket Sales Trend
          </h1>
          <div className="grid grid-cols-3 gap-[5px]">
            <div className="py-[4px] h-[20px] bg-[#1D345C] w-[80px] shadow-[0px_2px_2.08px_0px_#00000040] flex justify-center items-center rounded-[4px]">
              <p className="font-poppins font-[8px] text-[#FFFFFF]">Days</p>
            </div>
            <div className="py-[4px] h-[20px] shadow-[0px_2px_2.08px_0px_#00000040] flex justify-center items-center rounded-[4px]">
              <p className="font-poppins font-[8px] text-[#000000]">Weekly</p>
            </div>
            <div className="py-[4px] h-[20px] shadow-[0px_2px_2.08px_0px_#00000040] flex justify-center items-center rounded-[4px]">
              <p className="font-poppins font-[8px] text-[#000000]">Monthly</p>
            </div>
          </div>
        </div>
        <div className="mt-[8px] bg-[#F7F7F7] shadow-[0px_4px_4px_0px_#00000040]  rounded-[2px] flex py-[25px] items-center">
          <BarChartComponent />
        </div>
      </div>
      {/* Second */}
      <div className="shadow-[0px_4px_4px_0px_#00000040] col-span-1 rounded-[2px] px-[12px] pt-[8px] pb-[37px] border border-[1px] border-[#00000033]">
        <h1 className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C]">
          Ticket Type Breakdown
        </h1>
        <div className=" py-[25px] flex flex-row gap-[10px] items-center">
          <PieChartComponent
            colors={["#1D345C", "#9C6DDF"]}
            labels={["65 %", "35 %"]}
            descriptions={["Mobile app", "website ticket Sale"]}
            data={[
              {
                name: "Medium",
                value: 55,
              },
              { name: "High", value: 45 },
            ]}
          />
        </div>
      </div>
      {/* Secoond */}
    </div>
  );
};

export default Graphs;
