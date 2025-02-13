import React from "react";
import Header from "../components/fan-forum/header";
import Body from "../components/fan-forum/body";

const FanForums = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Header />
      <Body />
    </div>
  );
};

export default FanForums;
