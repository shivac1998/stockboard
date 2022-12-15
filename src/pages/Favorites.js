import React from "react";
import StockFetch from "../components/StockFetch";
import Bar from "../components/Bar";

function Favorites() {
  // const favoritesCtx = useContext(FavoritesContext);
  return (
    <div>
      {" "}
      <div>
        <Bar />;
      </div>
      <div>
        <StockFetch />
      </div>
    </div>
  );
}
export default Favorites;
