import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./Store/Store";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACSIrEvstJMadoYCa1rhEyypwaL8IM3c8",
  authDomain: "eshop-1f1ea.firebaseapp.com",
  databaseURL: "https://eshop-1f1ea.firebaseio.com",
  projectId: "eshop-1f1ea",
  storageBucket: "eshop-1f1ea.appspot.com",
  messagingSenderId: "980209311766",
  appId: "1:980209311766:web:c8df2601bdd827603a1537",
};

firebase.initializeApp(firebaseConfig);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
