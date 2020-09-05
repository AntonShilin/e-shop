import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Store } from "redux";
import configureStore, { IApplicationState } from "./Store/Store";
import { Provider } from "react-redux";

interface IProps {
  store: Store<IApplicationState>
}

export const Root: React.SFC<IProps> = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
