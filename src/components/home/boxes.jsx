import React from "react";
import performance from "../../assets/performance.svg";
import content from "../../assets/content.svg";
import community from "../../assets/community.svg";
import audience from "../../assets/audience.svg";
import vector from "../../assets/vector.svg";

const Boxes = () => {
  return (
    <div className="grid grid-cols-4 gap-[16px]">
      <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[16.66px] font-medium leading-[20.17px] text-[#FFFFFF]">
              Performance
            </h1>
            <img src={performance} />
          </div>
          <h1 className="font-inter text-[28.97px] font-medium leading-[35.06px] text-[#FFFFFF] mt-[27px]">
            2,4M{" "}
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="font-inter text-[15.76px] font-medium leading-[19.08px] text-[#44FB0D]">
            +12% v last week{" "}
          </h1>
          <img src={vector} />
        </div>
      </div>
      <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px]  flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[16.66px] font-medium leading-[20.17px] text-[#FFFFFF]">
              Content Management
            </h1>
            <img src={content} />
          </div>
          <h1 className="font-inter text-[28.97px] font-medium leading-[35.06px] text-[#FFFFFF] mt-[27px]">
            2,4M{" "}
          </h1>
        </div>

        <div className="flex items-center justify-between mt-[19px]">
          <h1 className="font-inter text-[15.76px] font-medium leading-[19.08px] text-[#44FB0D]">
            +12% v last week{" "}
          </h1>
          <img src={vector} />
        </div>
      </div>
      <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px]  flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[16.66px] font-medium leading-[20.17px] text-[#FFFFFF]">
              Community & event
            </h1>
            <img src={community} />
          </div>
          <h1 className="font-inter text-[28.97px] font-medium leading-[35.06px] text-[#FFFFFF] mt-[27px]">
            2,4M{" "}
          </h1>
        </div>

        <div className="flex items-center justify-between mt-[19px]">
          <h1 className="font-inter text-[15.76px] font-medium leading-[19.08px] text-[#44FB0D]">
            +12% v last week{" "}
          </h1>
          <img src={vector} />
        </div>
      </div>
      <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px]  flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[16.66px] font-medium leading-[20.17px] text-[#FFFFFF]">
              Audience Analytics
            </h1>
            <img src={audience} />
          </div>
          <h1 className="font-inter text-[28.97px] font-medium leading-[35.06px] text-[#FFFFFF] mt-[27px]">
            2,4M{" "}
          </h1>
        </div>

        <div className="flex items-center justify-between mt-[19px]">
          <h1 className="font-inter text-[15.76px] font-medium leading-[19.08px] text-[#44FB0D]">
            +12% v last week{" "}
          </h1>
          <img src={vector} />
        </div>
      </div>
    </div>
  );
};

export default Boxes;
