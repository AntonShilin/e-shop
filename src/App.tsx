import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.module.scss';
import Header from "./Components/Header/Header";
import { BrowserRouter } from 'react-router-dom';
import Submenu from './Components/Submenu/Submenu';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Submenu/>
    </BrowserRouter>
  );
}

export default App;
