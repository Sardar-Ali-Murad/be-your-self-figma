import React from "react";
import Boxes from "../components/home/boxes";
import Trends from "../components/home/trends";
import Graphs from "../components/home/graphs";

const Home = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Boxes />
      <Trends />
      <Graphs />
    </div>
  );
};

export default Home;
