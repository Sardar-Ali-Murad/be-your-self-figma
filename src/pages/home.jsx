import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";
import Boxes from "../components/home/boxes";
import Trends from "../components/home/trends";
import Graphs from "../components/home/graphs";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Header />
        <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
          <Boxes />
          <Trends />
          <Graphs />
        </div>
      </div>
    </div>
  );
};

export default Home;
