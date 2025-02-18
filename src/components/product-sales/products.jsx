import React from "react";
import headPhones from "../../assets/head-phones.svg";
import mouse from "../../assets/mouse.svg";
import watch from "../../assets/watch.svg";

const products = () => {
  return (
    <div className="shadow-[0px_4px_4px_0px_#00000040] border border-[1px] border-[#00000040] px-[24px] pt-[9px] pb-[23px]">
      <h1 className="mb-[7px] text-[#1D345C] font-bold font-istok text-[23px] leading-[34px]">
        Top selling Product
      </h1>
      <div className="grid grid-cols-3 gap-[18px]">
        <div className="py-[14px] px-[28px] flex flex-col border border-[1px] border-[#00000066] gap-[14px] shadow-[0px_4px_4px_0px_#00000040] rounded-[8px]">
          <img src={headPhones} />
          <div className="flex flex-col gap-[2px]">
            <h1 className="font-bold font-istok text-[17px] leadong-[24px] text-[#1D345C]">
              Premium Headphones
            </h1>
            <p className="font-istok text-[14px] leadong-[20px] text-[#1D345C]">
              Salles 1,234 units
            </p>
            <p className="font-istok text-[14px] leadong-[20px] text-[#1D345C]">
              Revenue $ 4567,00
            </p>
          </div>
        </div>
        <div className="py-[14px] px-[28px] flex flex-col border border-[1px] border-[#00000066]  gap-[14px] shadow-[0px_4px_4px_0px_#00000040] rounded-[8px]">
          <img src={mouse} />
          <div className="flex flex-col gap-[2px]">
            <h1 className="font-bold font-istok text-[17px] leadong-[24px] text-[#1D345C]">
              wireless Mouse
            </h1>
            <p className="font-istok text-[14px] leadong-[20px] text-[#1D345C]">
              Salles 1,234 units
            </p>
            <p className="font-istok text-[14px] leadong-[20px] text-[#1D345C]">
              Revenue $ 4567,00
            </p>
          </div>
        </div>
        <div className="py-[14px] px-[28px] flex flex-col border border-[1px] border-[#00000066]  gap-[14px] shadow-[0px_4px_4px_0px_#00000040] rounded-[8px]">
          <img src={watch} />
          <div className="flex flex-col gap-[2px]">
            <h1 className="font-bold font-istok text-[17px] leadong-[24px] text-[#1D345C]">
              Smart Watch
            </h1>
            <p className="font-istok text-[14px] leadong-[20px] text-[#1D345C]">
              Salles 1,234 units
            </p>
            <p className="font-istok text-[14px] leadong-[20px] text-[#1D345C]">
              Revenue $ 4567,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
