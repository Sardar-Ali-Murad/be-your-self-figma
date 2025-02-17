import React from "react";
import Card from "../common/card";
import download from "../../assets/download.svg";
import filter from "../../assets/light-filter.svg";
import share from "../../assets/share.svg";
import manage from "../../assets/manage.svg";
import event from "../../assets/event.svg";
import revenue from "../../assets/active-revenue.svg";
import ticket from "../../assets/ticket.svg";
import activeEvents from "../../assets/active-events.svg";

const Cards = ({ name }) => {
  return (
    <div>
      <div className="flex  justify-between shadow-[0px_4px_4px_0px_#00000040] px-[12px] py-[14px] rounded-[5px] mb-[34px]">
        <div className="flex items-center gap-[17px]">
          <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={download} />
            <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
              Export Report
            </p>
          </div>{" "}
          <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={share} />
            <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
              Shares Event Page
            </p>
          </div>{" "}
          <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={manage} />
            <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
              Manage Promations
            </p>
          </div>{" "}
        </div>
        <div className="flex gap-[5px] justify-end">
          <div className="bg-[#2654FF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={filter} />
            <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
              Filter
            </p>
          </div>{" "}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-[12px]">
        <Card
          title="Total Event"
          subTitle="24"
          footerTitle="Active Subscribers"
          name={name}
          img={event}
        />
        <Card
          title="Tickets Sold"
          subTitle="1,890"
          footerTitle="Active Subscribers"
          name={name}
          img={ticket}
        />
        <Card
          title="Revenue"
          subTitle="$456"
          footerTitle="Active Subscribers"
          name={name}
          img={revenue}
        />
        <Card
          title="Active Events"
          subTitle="12"
          footerTitle="this month"
          name={name}
          img={activeEvents}
        />
      </div>
    </div>
  );
};

export default Cards;
