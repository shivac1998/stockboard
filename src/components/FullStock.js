import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ErrorPage from "../pages/ErrorPage";

const FullStock = () => {
  const { title } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stockInfo, setStockInfo] = useState(null);

  useEffect(() => {
    if (!isLoaded) {
      fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${title}&apikey=R9RQMHGJCJ3RRDVD`
      )
        .then((res) => res.json())
        .then(
          (res) => {
            setIsLoaded(true);
            setStockInfo(res);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);

  console.log(stockInfo);
  if (stockInfo) {
    const open = stockInfo["Global Quote"]["02. open"];
    const high = stockInfo["Global Quote"]["03. high"];
    const price = stockInfo["Global Quote"]["05. price"];
    const change = stockInfo["Global Quote"]["09. change"];
    const volume = stockInfo["Global Quote"]["06. volume"];
    const low = stockInfo["Global Quote"]["04. low"];

    return (
      <section className="full">
        <div className="container">
          <div className="fullStock">
            <div>
              <h1>{title}</h1>{" "}
            </div>
            <div>
              Price: ${price}
              Open: ${open}
              Change: {change}
            </div>
            Volume: {volume}
            High: ${high}
            Low: ${low}
          </div>
        </div>
      </section>
    );
  } else {
    return <ErrorPage />;
  }
};

export default FullStock;
