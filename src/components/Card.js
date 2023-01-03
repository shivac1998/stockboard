import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Card = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <div className="card" key={favorite}>
          <h1>{favorite}</h1>
          <Link to={`/stocks/${favorite}`}>View More</Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
