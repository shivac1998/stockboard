import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Card = ({ favorites }) => {
  return (
    <>
      {favorites.map((stock) => (
        <div className="card" key={stock}>
          <h1>{stock}</h1>
          <Link to={`/stocks/${stock}`}>View More</Link>
        </div>
      ))}
    </>
  );
};

export default Card;
