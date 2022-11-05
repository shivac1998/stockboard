import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";

const FullCard = ({ data }) => {
  const { title } = useParams();

  <section className="full">
    <div className="container">
      {data
        .filter((stockCard) => stockCard.title === title)
        .map((stockCard, index) => (
          <div key={index} className="FullCard">
            <h1>{stockCard.title}</h1>
            <p>{stockCard.description}</p>
          </div>
        ))}
    </div>
  </section>;
};

export default FullCard;
