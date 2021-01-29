import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage/HomePage";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import ShopPage from "../Components/Pages/ShopPage/ShopPage";
import ShopWithFilterByPrice from "../Components/Pages/ShopWithFilterByPrice/ShopWithFilterByPrice";
import LoggedBoxSmDevices from "../Components/LoggedBoxSmDevices/LoggedBoxSmDevices";
import ShopWithFilterByYear from "../Components/Pages/ShopWithFilterByYear/ShopWithFilterByYear";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/home" component={HomePage} />
        <Redirect exact={true} from="/" to="/home" />
        <Route exact={true} path="/shop" component={ShopPage} />
        <Route exact={true} path="/filter-by-price" component={ShopWithFilterByPrice} />
        <Route exact={true} path="/filter-by-year" component={ShopWithFilterByYear} />
        <Route exact={true} path="/logged" component={LoggedBoxSmDevices} />
        <Route exact={true} component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;