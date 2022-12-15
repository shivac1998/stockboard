import React from "react";
import Card from "../components/Card";
import Bar from "../components/Bar";
// import SearchClass from "../components/SearchClass";

function Home({ data }) {
  return (
    <section className="home">
      <div className="title">
        <h1>Stockboard</h1>
        <Bar />
      </div>
      <div className="container">
        <Card data={data} />
      </div>
    </section>
  );
}

export default Home;
