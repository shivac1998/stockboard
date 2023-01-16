import React from "react";
import Card from "../components/Card";
import Bar from "../components/Bar";
import FavoritesContext from "../store/FavoritesContext";
import { useContext } from "react";

function Home() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <section className="home">
      <div className="container">
        <div className="title">
          <h1>Stockboard Watchlist</h1>
          <div>
            <Bar />
          </div>
        </div>
        <Card favorites={favorites} />
      </div>
    </section>
  );
}

export default Home;
