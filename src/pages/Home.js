import React from "react";
import Card from "../components/Card";

function Home({ data }) {
  return (
    <section className="home">
      <div className="title">
        <h1>Stockboard</h1>
      </div>
      <div className="container">
        <Card data={data} />
      </div>
    </section>
  );
}

export default Home;
