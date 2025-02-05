import React from "react";
import down from "../../assets/down.svg";
import line from "../../assets/dooted-line.svg";
import graph from "../../assets/graph.svg";

const Trends = () => {
  return (
    <div className="rounded-[3px] border-[1px] border-[#00000026] border-opacity-15 shadow-[0px_26.37px_21.09px_0px_#0000000B] backdrop-blur-[39.455265045166016px] pt-[29px] pl-[29px] pb-[29px] pr-[100px]">
      <div className="flex flex-row justify-between">
        <h1 className="font-poppins text-[21.25px] font-semibold leading-[31.87px]">
          Engagements Trends
        </h1>
        <div className="flex flex-row gap-[2px] items-center">
          <p className="font-poppins text-[16.53px] font-normal leading-[24.79px] text-[#000000]">
            Show : <span className="text-[#4F71F1]">Monthly</span>
          </p>
          <img src={down} />
        </div>
      </div>
      <div className="mt-[17px] w-[100%] h-[1px] bg-[#D9D9D9]"></div>
      <div className="mt-[72px] relative flex flex-col gap-[34px]">
        <img src={graph} className="absolute bottom-0 left-0" />
        <div className="flex flex-row gap-[24px]">
          <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
            250
          </p>
          <img src={line} className="overflow-x-hidden" />
        </div>
        <div className="flex flex-row gap-[24px]">
          <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
            200
          </p>
          <img src={line} className="overflow-x-hidden" />
        </div>
        <div className="flex flex-row gap-[24px]">
          <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
            150
          </p>
          <img src={line} className="overflow-x-hidden" />
        </div>
        <div className="flex flex-row gap-[24px]">
          <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
            100
          </p>
          <img src={line} className="overflow-x-hidden" />
        </div>
        <div className="flex flex-row gap-[24px]">
          <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
            50
          </p>
          <img src={line} className="overflow-x-hidden" />
        </div>
        <div className="flex flex-row gap-[24px]">
          <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
            0
          </p>
          <img src={line} className="overflow-x-hidden" />
        </div>
      </div>
      <div className="mt-[25px] flex flwx-row gap-[90px]">
        <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
          Jun
        </p>
        <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
          Jul
        </p>
        <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
          Aug
        </p>
        <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
          Sep
        </p>
        <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
          Oct
        </p>
        <p className="font-poppins text-[14.17px] font-normal leading-[21.25px] text-[#000000]">
          Nov
        </p>
      </div>
    </div>
  );
};

export default Trends;
