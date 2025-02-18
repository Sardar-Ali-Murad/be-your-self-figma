import React from "react";
import add from "../../assets/add.svg";
import edit from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import sales from "../../assets/sales.svg";
import performance from "../../assets/performance.svg";
import target from "../../assets/target.svg";


const body = () => {
  return (
    <div>
      <div className="shadow-[0px_4px_4px_0px_#00000040] border border-[1px] border-[#00000042] rounded-[9px] pt-[9px] pr-[9px] pl-[9px] pb-[50px]">
        <div className="flex justify-between items-end">
          <h1 className="font-istok text-[#1D345C] font-bold text-[18px] leading-[26px] flex-end">
            Event Management
          </h1>
          <div className="rounded-[9px] bg-[#1D345C] p-[11px] flex justify-between w-[200px] items-center gap-[2px]">
            <img src={add} />
            <p className="font-istok text-[20px] leading-[30px] text-[#FFFFFF]">
              Add New Event
            </p>
          </div>
        </div>
        <div className="w-[100%] h-[1px] bg-[#00000040] mt-[9px] mb-[25px]"></div>
        {/*  */}
        <div className="flex flex-col gap-[9px]">
          <div className="grid grid-cols-5">
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Event Name
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Date
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Capacity
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Status
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Action
            </p>
          </div>
          <div className="w-[100%] h-[1px] bg-[#00000040] mt-[9px] mb-[25px]"></div>

          <div className="grid grid-cols-5 items-center">
            <div className="flex items-center gap-[11px]">
              <p className="font-istok text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
                Summer
              </p>
            </div>
            <p>Aug 15,2025</p>
            <p>5000/10000</p>
            <div className="bg-[#1D345C] w-[100px] h-[25px] px-[12px] rounded-[21px]">
              <p className="font-istok font-bold text-[18px] leading-[26px] text-[#FFFFFF] drop-shadow-[0px_4px_4px_0px_#00000040]">
                Active
              </p>
            </div>
            <div className="flex gap-[20px]">
              <img src={edit} className="h-[25px] w-[25px]" />
              <img src={deleteIcon} className="h-[25px] w-[25px]" />
            </div>
          </div>
        </div>
      </div>
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
