import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FullStock from "./components/FullStock";
import Favorites from "./pages/Favorites";
import FavoritesContext from "./store/FavoritesContext";
import { useState } from "react";

const App = () => {
  const [favorites, setFavorites] = useState([
    "AAPL",
    "GOOGL",
    "IBM",
    "AMZN",
    "TSLA",
  ]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <Router>
        <nav className="navBar">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/favorites"> Favorites </Link>
          {/* <Link to="/stocks"> Stocks </Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="/stocks/:title" element={<FullStock />} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </FavoritesContext.Provider>
  );
};

export default App;
