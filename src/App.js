import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FullStock from "./components/FullStock";
import Favorites from "./pages/Favorites";

const App = () => {
  const data = [
    {
      title: "AAPL",
      description: "Stock pricing data for Apple",
    },
    {
      title: "GOOGL",
      description: "Stock pricing data for Google",
    },
    {
      title: "IBM",
      description: "Stock pricing data for IBM",
    },
    {
      title: "AMZN",
      description: "Stock pricing data for Amazon",
    },
    {
      title: "TSLA",
      description: "Stock pricing data for Tesla",
    },
    {
      title: "MSFT",
      description: "Stock pricing data for Microsoft",
    },
  ];
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/favorites"> Favorites </Link>
        {/* <Link to="/stocks"> Stocks </Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/stocks" element={<Stocks />} /> */}
        <Route path="/stocks/:title" element={<FullStock />} />
        {/* <Route path="/stocks/:title" element={<Searchbar />} /> */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
