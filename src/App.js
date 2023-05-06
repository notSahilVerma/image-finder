import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/about" Component={About} />
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
