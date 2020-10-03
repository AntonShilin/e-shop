import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.module.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Slideshow from "./Components/Slideshow/Slideshow";
import Centerband from "./Components/Centerband/Centerband";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slideshow />
      <Centerband />
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
