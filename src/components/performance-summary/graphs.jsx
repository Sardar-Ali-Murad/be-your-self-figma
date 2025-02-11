import React from "react";
import graph1 from "../../assets/graph-1.svg";
import graph2 from "../../assets/graph-2.svg";
import down from "../../assets/down.svg";
import line from "../../assets/dooted-line.svg";

const Graphs = () => {
  return (
    <div className="grid grid-cols-2 gap-[16px]">
      {/* First */}
      <div className="rounded-[3px] flex-[1] border-[1px] border-[#00000026] border-opacity-15 shadow-[0px_26.37px_21.09px_0px_#0000000B] backdrop-blur-[39.455265045166016px] pt-[15px] pl-[15px] pb-[15px] pr-[8px]">
        <div className="flex flex-row justify-between">
          <h1 className="font-poppins text-[11.99px] font-semibold leading-[17.99px] text-[#1C2D70]">
            Engagements Trends
          </h1>
          <div className="flex flex-row gap-[2px] items-center">
            <p className="font-poppins text-[9.33px] font-normal leading-[13.99px] text-[#000000]">
              Show : <span className="text-[#4F71F1]">Monthly</span>
            </p>
            <img src={down} />
          </div>
        </div>
        <div className="mt-[10px] w-[100%] h-[1px] bg-[#D9D9D9]"></div>
        <div className="mt-[40px] relative flex flex-col gap-[19px]">
          <img src={graph1} className="absolute bottom-0 left-[28px] w-[93%]" />
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              250
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              200
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              150
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              100
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              50
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              0
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
        </div>
        <div className="mt-[25px] flex flwx-row gap-[50px]">
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Jun
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Jul
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Aug
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Sep
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Oct
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Nov
          </p>
        </div>
      </div>
      {/* Second */}
      <div className="rounded-[3px] flex-[1] border-[1px] border-[#00000026] border-opacity-15 shadow-[0px_26.37px_21.09px_0px_#0000000B] backdrop-blur-[39.455265045166016px] pt-[15px] pl-[15px] pb-[15px] pr-[8px]">
        <div className="flex flex-row justify-between">
          <h1 className="font-poppins text-[11.99px] font-semibold leading-[17.99px] text-[#1C2D70]">
            Revenue Trends
          </h1>
          <div className="flex flex-row gap-[2px] items-center">
            <p className="font-poppins text-[9.33px] font-normal leading-[13.99px] text-[#000000]">
              Show : <span className="text-[#4F71F1]">Monthly</span>
            </p>
            <img src={down} />
          </div>
        </div>
        <div className="mt-[10px] w-[100%] h-[1px] bg-[#D9D9D9]"></div>
        <div className="mt-[40px] relative flex flex-col gap-[19px]">
          <img src={graph2} className="absolute bottom-0 left-[28px] w-[93%]" />
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              250
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              200
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              150
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              100
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              50
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
              0
            </p>
            <img src={line} className="overflow-x-hidden" />
          </div>
        </div>
        <div className="mt-[25px] flex flwx-row gap-[50px]">
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Jun
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Jul
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Aug
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Sep
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Oct
          </p>
          <p className="font-poppins text-[9px] font-normal leading-[21.25px] text-[#000000]">
            Nov
          </p>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
