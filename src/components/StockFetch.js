import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function StockFetch() {
  let { symbol } = useParams();
  const [stock, setStock] = useState(null);

  useEffect(() => {
    console.log(symbol);
    Axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=R9RQMHGJCJ3RRDVD`
    ).then((response) => {
      console.log(response.data);
      setStock(response.data);
    });
  }, []);
}

export default StockFetch;

// API key: R9RQMHGJCJ3RRDVD

// Search Endpoint API
// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=R9RQMHGJCJ3RRDVD

// Quote Endpoint: Returns Price and Volume for stock of choice
// https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=R9RQMHGJCJ3RRDVD

{
  /* https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=R9RQMHGJCJ3RRDVD */
}

// Marketstack API key: 6f656e6ff77b1e350ba70a4e0e8932a1

// https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR

// https://jsonplaceholder.typicode.com/users

// e4e8731b-8ff2-40da-9295-8f58a0fdd1ff

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/category

// APILayer Key: N6SkZv0bXweHOjm9807nbb0TxAYFfUFh
