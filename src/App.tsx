import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.module.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Slideshow from "./Components/Slideshow/Slideshow";
import Centerband from "./Components/Centerband/Centerband";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slideshow />
      <Centerband />
      <Contact/>
    </BrowserRouter>
  );
}

export default App;
