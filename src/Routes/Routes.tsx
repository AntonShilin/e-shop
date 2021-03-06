import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage/HomePage";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import ShopPage from "../Components/Pages/ShopPage/ShopPage";
import ShopWithFilterByPrice from "../Components/Pages/ShopWithFilterByPrice/ShopWithFilterByPrice";
import LoggedBoxSmDevices from "../Components/LoggedBoxSmDevices/LoggedBoxSmDevices";
import ShopWithFilterByYear from "../Components/Pages/ShopWithFilterByYear/ShopWithFilterByYear";
import ShopWithFilterByPriceAndYear from "../Components/Pages/ShopWithFilterByPriceAndYear/ShopWithFilterByPriceAndYear";
import BookView from "../Components/Pages/BookView/BookView";
import CartPage from "../Components/Pages/CartPage/CartPage";
import CheckoutPage from "../Components/Pages/CheckoutPage/CheckoutPage";
import SearchBookView from "../Components/Pages/SearchBookView/SearchBookView";
import CreateAccount from "../Components/Account/CreateAccount/CreateAccount";
import MyAccount from "../Components/Account/MyAccount/MyAccount";
import MyAccountItems from "../Components/Account/MyAccountItems/MyAccountItems";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route exact={true} path="/home" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
        <Route
          exact={true}
          path="/filter-by-price"
          component={ShopWithFilterByPrice}
        />
        <Route
          exact={true}
          path="/filter-by-year"
          component={ShopWithFilterByYear}
        />
        <Route
          exact={true}
          path="/filter-by-price-and-year"
          component={ShopWithFilterByPriceAndYear}
        />
        <Route exact={true} path="/book-view" component={BookView} />
        <Route exact={true} path="/cart" component={CartPage} />
        <Route exact={true} path="/checkout-page" component={CheckoutPage} />
        <Route
          exact={true}
          path="/search-book-view"
          component={SearchBookView}
        />
        <Route exact={true} path="/login" component={LoggedBoxSmDevices} />
        <Route exact={true} path="/create" component={CreateAccount} />
        <Route exact={true} path="/my-account" component={MyAccount} />
        <Route exact={true} path="/items" component={MyAccountItems} />
        <Route exact={true} component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
