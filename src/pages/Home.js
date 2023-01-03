import React from "react";
import Card from "../components/Card";
import Bar from "../components/Bar";
import FavoritesContext from "../store/FavoritesContext";
import { useContext } from "react";
// import SearchClass from "../components/SearchClass";

function Home() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <section className="home">
      <div className="title">
        <h1>Stockboard</h1>
        <Bar />
      </div>
      <div className="container">
        <Card favorites={favorites} />
      </div>
    </section>
  );
}

export default Home;
