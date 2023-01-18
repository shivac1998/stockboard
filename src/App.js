import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FullStock from "./components/FullStock";
import FavoritesContext from "./store/FavoritesContext";
import { useState } from "react";
import PopularStocks from "./pages/PopularStocks";

const App = () => {
  const [favorites, setFavorites] = useState([
    // "AAPL",
    // "GOOGL",
    // "IBM",
    // "AMZN",
    // "TSLA",
  ]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <Router>
        <div className="navBar">
          <nav className="navBar">
            <Link to="/" className="navHeader">
              Home
            </Link>
            <Link to="/about" className="navHeader">
              About
            </Link>
            <Link to="/PopularStocks" className="navHeader"> Companies </Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/popularstocks" element={<PopularStocks />} />

          <Route path="/stocks/:title" element={<FullStock />} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </FavoritesContext.Provider>
  );
};

export default App;
