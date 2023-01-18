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

  const toggle = useCallback(() => setFavorites(!stockIsFavorite));

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addToFavorites = (e) => {
    setFavorites(favorites.concat(e.target.value));
    return !stockIsFavorite;
  };

  const addFavorite = (favorites) => {
    setFavorites((prevFavorites) => {
      return [favorites, ...prevFavorites];
    });
  };

  const removeFavorites = (e) => {
    if (!stockIsFavorite) {
      const newList = favorites.filter((e) => e.target.value !== e);
      setFavorites(newList);
    }

    // console.log(e.target.value);
  };

  const favoriteHandler = () => {
    if (stockIsFavorite) {
      return addToFavorites && toggle();
    } else {
      return removeFavorites;
    }
  };

  // const stockIsFavorite = false;

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
            <button className="button" onClick={addToFavorites} value={title}>
              {stockIsFavorite ? "Add To Watchlist" : "Remove From Watchlist"}
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
