import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data.map((stockCard) => (
        <div className="card">
          <h1>{stockCard.title}</h1>
          <p>{stockCard.description}</p>
          <Link to={`/stocks/${stockCard.title}`}>View More</Link>
        </div>
      ))}
    </>
  );
};

export default Card;
