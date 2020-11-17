import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.module.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Slideshow from "./Components/Slideshow/Slideshow";
import Centerband from "./Components/Centerband/Centerband";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ShopAll from "./Components/ShopAll/ShopAll";



export interface IAppProps {}

export interface State {}

class App extends React.Component<IAppProps, State> {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <ShopAll />
      <Slideshow />
      <Centerband />
      <Contact/>
      <Footer/>
    </BrowserRouter>
    );
  }
}


export default App;
