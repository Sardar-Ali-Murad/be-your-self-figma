import React from "react";


const Details = () => {
  return (
    <div className="rounded-[6px]  pl-[18px] pt-[13px] pb-[52px] pr-[34px] shadow-[2px_2px_3px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[15px]">
      <h1 className="font-inter font-bold text-[21px leading-[26px] text-[#1B1919]">
        {" "}
        Event Details
      </h1>
      <div>
        <p className="font-inter  text-[17px] leading-[21px] text-[#1B1919]">
          {" "}
          Event Titles (requrid)
        </p>
        <input
          className="h-[28px] rounded-[3px] text-[#1B1919] font-inter  border border-[#0000005C] w-[100%] px-[14px] py-[8px]"
          value="enter your events title {e.g......}"
        />
      </div>
      <div>
        <p className="font-inter  text-[17px] leading-[21px] text-[#1B1919]">
          {" "}
          Description
        </p>
        <textarea
          value="Lorem ipsum dolor sit amet consectetur. Amet malesuada placerat mi sapien. Interdum ac orci venenatis id id tristique integer venenatis. Viverra sed senectus mauris lacus erat. Quis rutrum convallis curabitur dis ac.
Nunc dapibus dignissim diam diam. Sed mi ultrices vulputate sodales fringilla tellus. Odio vel dictumst aliquet nulla lectus montes sit. Nullam nulla mattis quis tincidunt cras."
          className="h-[180px] p-[8px] text-[#1B1919] font-inter rounded-[3px] border border-[#0000005C] w-[100%]"
        ></textarea>
      </div>
    </div>
  );
};

export default Details;
