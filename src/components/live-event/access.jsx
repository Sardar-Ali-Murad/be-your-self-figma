import React from "react";

const Access = () => {
  return (
    <div className="rounded-[6px] pl-[18px] pt-[13px] pb-[52px] pr-[34px] shadow-[2px_2px_3px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[12px]">
      <h1 className="font-inter font-bold text-[21px leading-[26px] text-[#1B1919]">
        Event Access
      </h1>
      <div>
        <p className="font-inter  text-[17px] leading-[21px] text-[#1B1919]">
          Event lins
        </p>
        <div className="flex gap-[28px] items-center">
          <input
            className="h-[28px] rounded-[3px] border border-[#0000005C] w-[100%]  p-[8px]"
            placeholder="https://www.figma.com/design/o70fOmImVWOdiHnllYTJ77/saas-dashboard?node-id=36-227&t=X3VQtUODQ41Ddfse-0"
          />
          <div className="h-[28px] rounded-[3px] bg-[#014CB1]">
            <p className="font-inter text-[17px] leading-[21px] text-[#FFFFFF] px-[37px] py-[3px]">
              customize
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-[46px] w-[90%]">
        <div className="relative flex-[1]">
          <h1 className="font-inter font-medium text-[17px] leading-[20px] text-[#1B1919] mb-[6px]">
            max Attendess
          </h1>
          <input className="h-[32px] w-[100%] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[6px] font-inter text-[#908888] font-medium p-[14px]" />
        </div>
        <div className="relative flex-[1]">
          <h1 className="font-inter font-medium text-[17px] leading-[20px] text-[#1B1919] mb-[6px]">
            Ticketprices ($)
          </h1>
          <input className="h-[32px] w-[100%] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[6px] font-inter text-[#908888] font-medium p-[14px]" />
        </div>
      </div>
    </div>
  );
};

export default Access;
