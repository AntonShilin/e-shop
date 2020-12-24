import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.module.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Routes from "./Routes/Routes";

export interface IAppProps {}

export interface State {}

class App extends React.Component<IAppProps, State> {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
