import React from "react";
import Cards from "../components/product-sales/cards";
import Graphs from "../components/product-sales/graph";
import Products from "../components/product-sales/products";
import Body from "../components/product-sales/body";

const ProductSales = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Cards />
      <Graphs />
      <Products />
      <Body />
    </div>
  );
};

export default ProductSales;
