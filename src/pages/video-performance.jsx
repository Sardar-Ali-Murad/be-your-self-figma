import React from "react";
import Cards from "../components/video-performance/cards";
import Graph from "../components/video-performance/graph";
import Body from "../components/video-performance/body";

const VideoPerformance = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Cards name="video" />
      <Graph />
      <Body />
    </div>
  );
};

export default VideoPerformance;
