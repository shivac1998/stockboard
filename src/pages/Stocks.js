import React from "react";
import { useParams } from "react-router-dom";

function Stocks() {
  let { stock } = useParams();
  return <div>This is the stock information for {stock}</div>;
}

export default Stocks;
