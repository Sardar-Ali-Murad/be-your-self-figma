import React from "react";
import yellow from "../../assets/big-yellow.svg";
import brown from "../../assets/brown.svg";
import indigo from "../../assets/indigo.svg";
import PieChartComponent from "../common/pie-chart";
import buds from "../../assets/buds.svg";
import sales from "../../assets/sales.svg";
import target from "../../assets/target.svg";

const body = () => {
  return (
    <div className="flex flex-col gap-[27px]">
      {/* First */}
      <div className="rounded-[9px] shadow-[0px_4px_4px_0px_#00000040] border border-[1px] border-[#00000040] pl-[11px] pt-[11px] pr-[30px] pb-[30px]">
        <h1 className="font-istok font-bold text-[23px] leading-[34px] text-[#1D345C]">
          Customer Insights
        </h1>
        <div className="grid grid-cols-2 gap-[25px] mt-[10px]">
          <div className="shadow-[0px_4px_4px_0px_#00000040] flex flex-row gap-[20px] items-center   gap-[10px]">
            <PieChartComponent
              colors={["#C95200", "#9948C9", "#FFB800"]}
              labels={["50 %", "30 %", "20 %"]}
              descriptions={["Gender", "Age", "Location"]}
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
                  Gender Male / Female
                </p>
              </div>
              <div className="flex flex-row gap-[6px] items-center">
                <img src={indigo} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  Age 18-45
                </p>
              </div>
              <div className="flex flex-row gap-[6px] items-center">
                <img src={yellow} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  LOcation UK
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9]"></div>
        </div>
      </div>
      {/* Second */}
      <div className="rounded-[9px] shadow-[0px_4px_4px_0px_#00000040] border border-[1px] border-[#00000040] pl-[11px] pt-[11px] pr-[30px] pb-[30px]">
        <div className="flex justify-between items-center">
          <h1 className="font-istok font-bold text-[23px] leading-[34px] text-[#1D345C]">
            Underperforming Products
          </h1>
          <div className="bg-[#1C2D70] rounded-[6px] flex justify-center items-center   px-[22px] py-[10px]">
            <p className="font-istok text-[#FFFFFF] font-[11px] leading-[16px]">
              {" "}
              ALL View Detalis
            </p>
          </div>
        </div>
        <div className="mt-[4px] flex flex-col gap-[2px]">
          <div className="rounded-[8px] flex items-center justify-between pl-[7px] py-[7px] pr-[22px] shadow-[0px_4px_4px_0px_#00000040] border border-[1px] border-[#00000030]">
            <div className="flex items-center gap-[13px]">
              <img src={buds} />
              <div className="flex flex-col gap-[6px]">
                <h1 className="text-[#1D345C] font-bold font-istok text-[14px] leading-[20px]">
                  Basic Earbucts
                </h1>
                <p className="text-[#1D345C]  font-istok text-[11px] leading-[16px]">
                  Sales : 45 unit | Revenue $900
                </p>
              </div>
            </div>
            <div className="bg-[#1C2D70] rounded-[6px] flex justify-center items-center   px-[22px] py-[10px]">
              <p className="font-istok text-[#FFFFFF] font-[11px] leading-[16px]">
                {" "}
                ALL View Detalis
              </p>
            </div>
          </div>
          <div className="rounded-[8px] flex items-center justify-between pl-[7px] py-[7px] pr-[22px] shadow-[0px_4px_4px_0px_#00000040] border border-[1px] border-[#00000030]">
            <div className="flex items-center gap-[13px]">
              <img src={buds} />
              <div className="flex flex-col gap-[6px]">
                <h1 className="text-[#1D345C] font-bold font-istok text-[14px] leading-[20px]">
                  USB Cables
                </h1>
                <p className="text-[#1D345C]  font-istok text-[11px] leading-[16px]">
                  Sales : 45 unit | Revenue $900{" "}
                </p>
              </div>
            </div>
            <div className="bg-[#1C2D70] rounded-[6px] flex justify-center items-center   px-[22px] py-[10px]">
              <p className="font-istok text-[#FFFFFF] font-[11px] leading-[16px]">
                {" "}
                ALL View Detalis
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Third */}
      <div className="mt-[27px] grid grid-cols-3 gap-[7px]">
        <div className="shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[7px] px-[9px] pt-[14px] pb-[30px] border border-[1px] border-[#0000003B] rounded-[9px]">
          <div className="flex gap-[17px]">
            <img src={sales} />
            <h1 className="font-istok font-bold text-[#1D345C] text-[18px] leading-[26px]">
              Sales Strategy
            </h1>
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className="font-istok  text-[#1D345C] text-[15px] leading-[21px] ml-[45px]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque nibh
              curabitur orci pulvinar euismod. Ut ut mauris sed imperdiet
              viverra.
            </p>
          </div>
        </div>
        <div className="shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[7px] px-[9px] pt-[14px] pb-[30px] border border-[1px] border-[#0000003B] rounded-[9px]">
          <div className="flex gap-[17px]">
            <img src={target} />
            <h1 className="font-istok font-bold text-[#1D345C] text-[18px] leading-[26px]">
              Performance Insight
            </h1>
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className="font-istok  text-[#1D345C] text-[15px] leading-[21px] ml-[45px]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque nibh
              curabitur orci pulvinar euismod. Ut ut mauris sed imperdiet
              viverra.
            </p>
          </div>
        </div>
        <div className="shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[7px] px-[9px] pt-[14px] pb-[30px] border border-[1px] border-[#0000003B] rounded-[9px]">
          <div className="flex gap-[17px]">
            <img src={target} />
            <h1 className="font-istok font-bold text-[#1D345C] text-[18px] leading-[26px]">
              Target Achievement
            </h1>
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className="font-istok  text-[#1D345C] text-[15px] leading-[21px] ml-[45px]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque nibh
              curabitur orci pulvinar euismod. Ut ut mauris sed imperdiet
              viverra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default body;
