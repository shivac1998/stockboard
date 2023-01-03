import React from "react";
import StockFetch from "../components/StockFetch";
import FullStock from "../components/FullStock";
import Bar from "../components/Bar";
import { useContext } from "react";
import FavoritesContext from "../store/FavoritesContext";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p>
        You are not watching any stocks. Click the "Add to Watchlist" button to
        begin your Watchlist.
      </p>
    );
  } else {
    content = <FullStock favorites={favoritesCtx.favorites} />;
  }

  return (
    <section className="container">
      <div>
        <h1>Watchlist</h1>
      </div>
      <div>{content} </div>
    </section>
  );
}
export default Favorites;
