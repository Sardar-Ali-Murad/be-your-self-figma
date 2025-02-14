import React from "react";
import PieChartComponent from "../common/pie-chart";
import red from "../../assets/red.svg";
import blue from "../../assets/blue.svg";
import yellow from "../../assets/yellow.svg";
import bell from "../../assets/dark-bell.svg";
import email from "../../assets/dark-email.svg";
import star from "../../assets/star.svg";
import Progress from "../common/progress";

const Body = () => {
  return (
    <div className="flex flex-col gap-[27px] ">
      {/* First */}
      <div className="grid grid-cols-2 gap-[17px]">
        <div className="border border-[1px] border-[#0000005E] border-opacity-37 rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] pt-[11px] pl-[11px] pr-[11px] pb-[35px]">
          <h1 className="text-[23px] leading-[34px] font-istok text-[#1D345C]">
            Subscriber Growth Trends
          </h1>

          <div className="mt-[44px] flex flex-row gap-[10px] items-center">
            <PieChartComponent
              colors={["#21EDFF", "#FA0505", "#FFB800"]}
              labels={["20 %", "45 %", "25 %"]}
              descriptions={["Direct", "YouTube", "Social Media"]}
              data={[
                {
                  name: "Medium",
                  value: 20,
                },
                { name: "High", value: 45 },
                { name: "High", value: 25 },
              ]}
            />
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row gap-[6px]">
                <img src={red} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  YouTube 45%
                </p>
              </div>
              <div className="flex flex-row gap-[6px]">
                <img src={blue} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  Direct 25%
                </p>
              </div>

              <div className="flex flex-row gap-[6px]">
                <img src={yellow} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  Social Media 20%{" "}
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="mt-[16px] flex flex-col gap-[7px]">
            <Progress
              bgColor="bg-[#FB0F0F96]"
              width="w-[80%]"
              title="YouTube"
              percentage="45%"
              opacity={80}
            />
            <Progress
              bgColor="bg-[#21EDFF]"
              width="w-[60%]"
              title="Direct"
              percentage="25%"
              opacity={60}
            />
            <Progress
              bgColor="bg-[#FFB800]"
              width="w-[50%]"
              title="Social Media"
              percentage="20%"
              opacity={50}
            />
          </div>
        </div>
        <div className="border border-[1px] border-[#0000005E] border-opacity-37 rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] pt-[11px] pl-[11px] pr-[11px] pb-[35px]">
          <h1 className="text-[23px] leading-[34px] font-istok text-[#1D345C]">
            Subscriber Growth Trends
          </h1>

          <div className="mt-[44px] flex flex-row gap-[10px] items-center">
            <PieChartComponent
              colors={["#21EDFF", "#FA0505", "#FFB800"]}
              labels={["20 %", "45 %", "25 %"]}
              descriptions={["Direct", "YouTube", "Social Media"]}
              data={[
                {
                  name: "Medium",
                  value: 20,
                },
                { name: "High", value: 45 },
                { name: "High", value: 25 },
              ]}
            />
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row gap-[6px]">
                <img src={red} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  YouTube 45%
                </p>
              </div>
              <div className="flex flex-row gap-[6px]">
                <img src={blue} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  Direct 25%
                </p>
              </div>

              <div className="flex flex-row gap-[6px]">
                <img src={yellow} />
                <p className="font-poppins text-[16px] font-medium leading-[13.69px] text-[#000000]">
                  Social Media 20%{" "}
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="mt-[16px] flex flex-col gap-[7px]">
            <Progress
              bgColor="bg-[#4F71F1]"
              width="w-[80%]"
              title="Price too high"
              percentage="45%"
              opacity={80}
            />
            <Progress
              bgColor="bg-[#4F71F1]"
              width="w-[60%]"
              title="Content quality"
              percentage="25%"
              opacity={60}
            />
            <Progress
              bgColor="bg-[#4F71F1]"
              width="w-[50%]"
              title="Technical issues "
              percentage="20%"
              opacity={50}
            />
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="grid grid-cols-2 gap-[17px]">
        <div className="border border-[1px] border-[#0000005E] border-opacity-37 rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] pt-[11px] pl-[11px] pr-[11px] pb-[35px]">
          <h1 className="text-[23px] leading-[34px] font-istok text-[#1D345C]">
            Retention Matrix
          </h1>
        </div>
        <div className="border border-[1px] border-[#0000005E] border-opacity-37 rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] pt-[11px] pl-[11px] pr-[11px] pb-[35px]">
          <h1 className="text-[23px] leading-[34px] font-istok text-[#1D345C]">
            Recommended Action
          </h1>
          <div className="mt-[17px] flex flex-col gap-[8px]">
            <div className="h-[39px] rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] px-[12px] py-[9px] flex items-center gap-[16px]">
              <img src={bell} />
              <h1 className="font-poppins text-[16px leading-[24px] text-[#000000]">
                Set up churn prevention alerts
              </h1>
            </div>
            <div className="h-[39px] rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] px-[12px] py-[9px] flex items-center gap-[16px]">
              <img src={email} />
              <h1 className="font-poppins text-[16px leading-[24px] text-[#000000]">
                Create re-engagement campaign
              </h1>
            </div>
            <div className="h-[39px] rounded-[5px] shadow-[0px_4px_4px_0px_#00000040] px-[12px] py-[9px] flex items-center gap-[16px]">
              <img src={star} />
              <h1 className="font-poppins text-[16px leading-[24px] text-[#000000]">
                Review pricing strategy
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
