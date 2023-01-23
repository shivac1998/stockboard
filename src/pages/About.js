import React from "react";

function About() {
  return (
    <section className="aboutSection">
      <div className="containerAboutTitle">
        <div className="aboutTitle">
          <h1>Stockboard Use Directions </h1>
        </div>
      </div>
      <div className="containerAbout">
        <h2 className="abouth2">Purpose</h2>
        <p className="aboutp">
          The purpose of this application is to allow you to easily compare the
          pricing data of a variety of companies in a user-friendly format.{" "}
        </p>
      </div>
      <div className="containerAbout">
        <h2 className="abouth2">How to Use Stockboard</h2>
        <p className="aboutp">
          Simply enter the stock symbol of your company of interest in the
          search bar on the home page. This will present the pricing data for a
          given company.
        </p>
        <p className="aboutp">
          If you do not know the stock symbol of a company you would like to
          search for, navigate to the companies page and search for it. You can
          use Command+F or Ctrl+F and enter a company name to easily find a
          company.
        </p>
        <p className="aboutp">
          Hit the Add To Watchlist button and a company card will be added to
          the home page. You can add and remove stocks of interest from this
          page.
        </p>
      </div>
      <div className="containerAbout">
        <h2 className="abouth2">*Warning*</h2>
        <p className="aboutp">
          Refrain from hitting the refresh button. This will eliminate all of
          your favorited stocks from the home page.
        </p>
      </div>
    </section>
  );
}

export default About;
