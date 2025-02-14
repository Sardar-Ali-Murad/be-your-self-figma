import React from "react";
import Cards from "../components/subscriber-growth/cards";
import Graph from "../components/subscriber-growth/graph";
import Body from "../components/subscriber-growth/body";


const SubscriberGrowth = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Cards/>
      <Graph/>
      <Body/>
    </div>
  );
};

export default SubscriberGrowth;
