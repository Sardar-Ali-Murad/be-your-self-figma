import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Header />
      </div>
    </div>
  );
};

export default Home;
