import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext, useRef, useCallback } from "react";
import ErrorPage from "../pages/ErrorPage";
import FavoritesContext from "../store/FavoritesContext";
import Bar from "./Bar";

const FullStock = (stock) => {
  const { title } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stockInfo, setStockInfo] = useState(null);
  const stockIsFavorite = useRef(false);

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addToFavorites = () => {
    if (!favorites.includes(title)) {
      setFavorites(favorites.concat(title));
      stockIsFavorite.current = true;
    }
  };

  const removeFavorites = (symbol) => {
    if (stockIsFavorite.current) {
      const newList = favorites.filter((favorite) => favorite !== symbol);
      setFavorites(newList);
      stockIsFavorite.current = false;
    }
  };

  const favoriteHandler = () => {
    if (!stockIsFavorite.current) {
      addToFavorites();
    } else {
      if (stockIsFavorite.current) {
        removeFavorites(title);
      }
    }
  };

  // useEffect(() => {
  //   if (!isLoaded) {
  //     fetch(
  //       `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${title}&apikey=R9RQMHGJCJ3RRDVD`
  //     )
  //       .then((res) => res.json())
  //       .then(
  //         (res) => {
  //           setIsLoaded(true);
  //           setStockInfo(res);
  //           if (favorites.includes(title)) {
  //             stockIsFavorite.current = true;
  //           } else {
  //             stockIsFavorite.current = false;
  //           }
  //         },
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       );
  //   }
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${title}&apikey=R9RQMHGJCJ3RRDVD`
        );
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        setIsLoaded(true);
        setStockInfo(json);
        setIsLoaded(true);
        if (favorites.includes(title)) {
          stockIsFavorite.current = true;
        } else {
          stockIsFavorite.current = false;
        }
      } catch (error) {
        setError(error);
      }
    }
    if (!isLoaded) {
      fetchData();
    }
  }, []);

  if (stockInfo && stockInfo["Global Quote"]) {
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
          <div className="fullStock">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className="info">
              <>Price: ${price} | </>
              <>Open: ${open} | </>
              <>Change: {change} </>
            </div>
            <div className="info">
              <>Volume: {volume} </>
              <> | </>
              <>High: ${high} </>
              <> | Low: ${low} </>
            </div>
          </div>
          <div>
            <button className="button" onClick={favoriteHandler} value={title}>
              {stockIsFavorite.current
                ? "Remove From Watchlist"
                : "Add To Watchlist"}
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return <ErrorPage />;
  }
};

export default FullStock;
