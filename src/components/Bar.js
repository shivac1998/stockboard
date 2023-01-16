import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit} className="searchBar-Container">
        <input
          type="text"
          id="search"
          name="searchbar"
          placeholder="Enter Stock Symbol"
          onChange={handleChange}
          className="search-input"
        ></input>
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
};

export default Bar;
