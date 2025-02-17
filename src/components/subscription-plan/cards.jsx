import React from "react";
import Card from "../common/card";

const Cards = ({ name }) => {
  return (
    <div className="grid grid-cols-4 gap-[12px]">
      <Card
        title="Basic Plan"
        subTitle="$124,563.00"
        footerTitle="Active Subscribers"
        name={name}
      />
      <Card
        title="Pro Plan"
        subTitle="1,890"
        footerTitle="Active Subscribers"
        name={name}
      />
      <Card
        title="Enterprise"
        subTitle="780"
        footerTitle="Active Subscribers"
        name={name}
      />
      <Card
        title="Total Revenue"
        subTitle="$128,450"
        footerTitle="this month"
        name={name}
      />
    </div>
  );
};

export default Cards;
