import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookmarks, Home, Movies, TvSeries } from "./pages";
import { useEffect } from "react";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const { changePage } = useStateContext();

  useEffect(() => {
    changePage("home");
  }, []);
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/entertainment-web-app/" element={<Home />} />
          <Route path="/entertainment-web-app/movies" element={<Movies />} />
          <Route path="/entertainment-web-app/tvSeries" element={<TvSeries />} />
          <Route path="/entertainment-web-app/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
