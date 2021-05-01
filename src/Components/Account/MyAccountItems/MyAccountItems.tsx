import * as React from "react";
import AccountItems from "../AccountPages/AccountItems/AccountItems";
import Navigation from "../Navigation/Navigation";
import myacit from "./MyAccountItems.module.scss";

export interface Props {}

export interface State {}

class MyAccountItems extends React.Component<Props, State> {
  render() {
    return (
        <div className={`container-xl ${myacit.my_account_items_bg}`}>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Navigation />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <AccountItems />
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccountItems;
