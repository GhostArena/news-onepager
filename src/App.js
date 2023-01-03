import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Home, Hero, HomeSide, LowerArticles } from "./routes";

function App() {
  const HomeContent = () => {
    return (
      <div className="grid grid-cols-1 md:flex">
        <Hero />
        <HomeSide />
      </div>
    );
  };

  // const LowerArticles = () => {
  //   return <div>
  //     <img src="" alt="" />
  //   </div>;
  // };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Navbar />
              <HomeContent />
              <LowerArticles />
            </Home>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
