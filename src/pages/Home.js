import React from "react";
import StockFetch from "../components/StockFetch";
import Card from "../components/Card";

function Home({ data }) {
  return (
    <section className="home">
      <div className="container">
        <Card data={data} />
      </div>
    </section>
  );
}

export default Home;
