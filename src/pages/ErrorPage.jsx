import React from "react";

function ErrorPage({ message }) {
  return (
    <section className="full">
      <div className="container">
        <div className="fullStock">
          <div className="error">
            <h2>{message}</h2>
            <h2>ERROR PAGE</h2>
            <h2>INVALID URL ENTERED</h2>
          </div>
          <div className="errorh3">
            <h3>
              Please return to the search bar or web address and enter a valid
              stock symbol.
            </h3>
          </div>
          <div className="errortext">
            <p>Example: http://localhost:3000/stocks/AAPL</p>
            <h4>OR</h4>
            <p>http://localhost:3000/stocks/TSLA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
