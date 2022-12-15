import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

const StockFetch = () => {
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
    const open = Math.round(stockInfo["Global Quote"]["02. open"] * 100) / 100;
    const high = Math.round(stockInfo["Global Quote"]["03. high"] * 100) / 100;
    const price =
      Math.round(stockInfo["Global Quote"]["05. price"] * 100) / 100;
    const low = Math.round(stockInfo["Global Quote"]["04. low"] * 100) / 100;

    const change = stockInfo["Global Quote"]["10. change percent"];
    const volume = stockInfo["Global Quote"]["06. volume"];

    return (
      <section className="full">
        <div className="container">
          <div className="favoriteStock">
            <div className="title">
              <h1>{title}</h1>{" "}
            </div>
            <div className="favoriteInfo">
              <>Price: ${price} | </>
              <>Open: ${open} | </>
              <>Change: {change} </>
            </div>
            <div className="favoriteInfo">
              <>Volume: {volume} </>
              <> | </>
              <>High: ${high} </>
              <> | Low: ${low} </>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <ErrorPage />;
  }
};

export default StockFetch;

// API key: R9RQMHGJCJ3RRDVD

// Search Endpoint API
// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=R9RQMHGJCJ3RRDVD

// Quote Endpoint: Returns Price and Volume for stock of choice
// https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=R9RQMHGJCJ3RRDVD

/* https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=R9RQMHGJCJ3RRDVD */

// Marketstack API key: 6f656e6ff77b1e350ba70a4e0e8932a1

// https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR

// https://jsonplaceholder.typicode.com/users

// e4e8731b-8ff2-40da-9295-8f58a0fdd1ff

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/category

// APILayer Key: N6SkZv0bXweHOjm9807nbb0TxAYFfUFh
