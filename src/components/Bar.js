import React from "react";
import FullStock from "./FullStock";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Bar = () => {
  const [stockSymbol, setStockSymbol] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStockSymbol(e.target.value);
    console.log(stockSymbol);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    navigate(`/stocks/${stockSymbol}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          name="searchbar"
          placeholder="Enter Stock Symbol"
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Bar;
