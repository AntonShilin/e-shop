import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.module.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import LargeScreenSubmenu from "./Components/LargeScreenSubmenu/LargeScreenSubmenu";
import Slideshow from "./Components/Slideshow/Slideshow";
import Centerband from "./Components/Centerband/Centerband";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LargeScreenSubmenu />
      <Slideshow />
      <Centerband/>
    </BrowserRouter>
  );
}

export default App;
