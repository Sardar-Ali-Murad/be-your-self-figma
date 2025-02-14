import React from "react";
import yellow from "../../assets/big-yellow.svg";
import brown from "../../assets/brown.svg";
import indigo from "../../assets/indigo.svg";
import PieChartComponent from "../common/pie-chart";
import download from "../../assets/download.svg";
import filter from "../../assets/light-filter.svg";
import share from "../../assets/share.svg";

const body = () => {
  return (
    <div className="grid grid-cols-2 gap-[17px]">
      {/* First */}
      <div className="border border-[1px] border-[#0000005E] border-opacity-37 rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] pt-[11px] pl-[11px] pr-[11px] pb-[35px]">
        <h1 className="font-istok text-[23px] leading-[34px] font-bold text-[#1D345C]">
          Subscription Insights
        </h1>
        <div className="mt-[44px] flex flex-col flex-start  gap-[10px]">
          <PieChartComponent
            colors={["#C95200", "#9948C9", "#FFB800"]}
            labels={["50 %", "30 %", "20 %"]}
            descriptions={["", "", ""]}
            data={[
              {
                name: "Medium",
                value: 50,
              },
              { name: "High", value: 30 },
              { name: "High", value: 20 },
            ]}
          />
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[6px] item-center">
              <img src={brown} />
              <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                Subscriber Plan Breakdown
              </p>
            </div>
            <div className="flex flex-row gap-[6px] items-center">
              <img src={indigo} />
              <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                Average Revenue Per User{" "}
              </p>
            </div>
            <div className="flex flex-row gap-[6px] items-center">
              <img src={yellow} />
              <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                Churned Subscriber Revenue Loss{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex justify-evenly">
          <div className="bg-[#1D345C] rounded-[2px] flex flex-col gap-[2px] flex py-[11px] px-[33px] justify-center items-center">
            <p className="font-poppins text-[11px] leading-[17px] text-[#FFFFFF]">
              Active Subscribers
            </p>
            <p className="font-poppins text-[20px] leading-[17px] text-[#FFFFFF] ">
              8,547
            </p>
          </div>
          <div className="bg-[#1D345C] rounded-[2px] flex flex-col gap-[2px] flex py-[11px] px-[33px] justify-center items-center">
            <p className="font-poppins text-[11px] leading-[17px] text-[#FFFFFF]">
              Churn Rate
            </p>
            <p className="font-poppins text-[20px] leading-[17px] text-[#FFFFFF] ">
              2.5%
            </p>
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="border border-[1px] border-[#0000005E] border-opacity-37 rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] pt-[11px] pl-[11px] pr-[11px] pb-[35px]">
        <h1 className="font-istok text-[23px] leading-[34px] font-bold text-[#1D345C]">
          Top Events
        </h1>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="mt-[23px] flex flex-col gap-[13px]">
            <div className="rounded-[4px] flex justify-between items-center shadow-[0px_4px_4px_0px_#00000040] pt-[8px] pl-[22px] pb-[18px] pr-[18px]">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium font-poppins text-[16px] leading-[24px] text-[#000000]">
                  Creator Summit 2025
                </p>
                <p className="font-medium font-poppins text-[12px] leading-[18px] text-[#000000]">
                  mar 15-12 2025
                </p>
              </div>
              <p className="font-bold font-poppins text-[22px] leading-[33px] font-istok text-[#000000]">
                $12,450
              </p>
            </div>
            <div className="rounded-[4px] flex justify-between items-center shadow-[0px_4px_4px_0px_#00000040] pt-[8px] pl-[22px] pb-[18px] pr-[18px]">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium font-poppins text-[16px] leading-[24px] text-[#000000]">
                  Masterclass Series
                </p>
                <p className="font-medium font-poppins text-[12px] leading-[18px] text-[#000000]">
                  Weekly
                </p>
              </div>
              <p className="font-bold font-poppins text-[22px] leading-[33px] font-istok text-[#000000]">
                $12,450
              </p>
            </div>
            <div className="rounded-[4px] flex justify-between items-center shadow-[0px_4px_4px_0px_#00000040] pt-[8px] pl-[22px] pb-[18px] pr-[18px]">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium font-poppins text-[16px] leading-[24px] text-[#000000]">
                  Workshop Bundle
                </p>
                <p className="font-medium font-poppins text-[12px] leading-[18px] text-[#000000]">
                  Monthly
                </p>
              </div>
              <p className="font-bold font-poppins text-[22px] leading-[33px] font-istok text-[#000000]">
                $12,450
              </p>
            </div>
          </div>
          <div className="flex gap-[5px] justify-end  mb-[20px]">
            <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
              <img src={download} />
              <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
                Export
              </p>
            </div>{" "}
            <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
              <img src={share} />
              <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
                Shares
              </p>
            </div>{" "}
            <div className="bg-[#2654FF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
              <img src={filter} />
              <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
                Filter
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default body;
