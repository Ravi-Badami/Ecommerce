import "./App.css";
import Header from "./components/layouts/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import webfont from "webfontloader";
import React from "react";
import Footer from "./components/layouts/Footer/Footer";
import Home from "./components/Home/Home.jsx";

function App() {
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    });
  });

  return (
    <Router>
      <Header />
      <Route extact path="/" Component={home} />
      <Footer />
    </Router>
  );
}

export default App;
