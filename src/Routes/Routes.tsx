import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import App from "../App";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/home" component={App} />
        <Redirect exact={true} from="/" to="/home" />
        {/* <Route exact={true} path="/404" component={NotFoundPage} /> */}
      </Switch>
    );
  }
}

export default Routes;