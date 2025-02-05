import React from "react";
import down from "../../assets/down.svg";
import red from "../../assets/red.svg";
import green from "../../assets/green.svg";
import blue from "../../assets/blue.svg";
import yellow from "../../assets/yellow.svg";
import ChartBox from "./chart-box";

const Graphs = () => {
  return (
    <div className="grid grid-cols-3 gap-[10px]">
      <div className="border border-[1px] border-[#0000005E] border-opacity-37 rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] pt-[11px] pl-[11px] pr-[11px] pb-[35px]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-istok text-[#1D345C] text-[15.15px] font-bold leading-[21.81px] text-[#1D345C] drop-shadow-[0px_4px_4px_#00000040]">
            Earning&Sales
          </h1>
          <div className="flex flex-row items-center">
            <p className="font-poppins text-[9.33px] font-semibold leading-[13.99px] text-[#000000] drop-shadow-[0px_4px_4px_#00000040]">
              Show : <span className="text-[#4F71F1]">Monthly</span>
            </p>
            <img src={down} className="w-[14px] h-[14px]" />
          </div>
        </div>
        <div className="bg-[#000000] w-[100%] h-[1px] mt-[7px]"></div>
        <div className="mt-[44px] flex flex-row gap-[10px] items-center">
          <ChartBox />
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[6px]">
              <img src={red} />
              <p className="font-poppins text-[9.12px] font-medium leading-[13.69px] text-[#000000]">
                Subscription Plan
              </p>
            </div>
            <div className="flex flex-row gap-[6px]">
              <img src={blue} />
              <p className="font-poppins text-[9.12px] font-medium leading-[13.69px] text-[#000000]">
                Event Ticking Soles{" "}
              </p>
            </div>
            <div className="flex flex-row gap-[6px]">
              <img src={green} />
              <p className="font-poppins text-[9.12px] font-medium leading-[13.69px] text-[#000000]">
                Product Sales{" "}
              </p>
            </div>
            <div className="flex flex-row gap-[6px]">
              <img src={yellow} />
              <p className="font-poppins text-[9.12px] font-medium leading-[13.69px] text-[#000000]">
                Ad managements{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
