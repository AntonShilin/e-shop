import * as React from "react";
import Navigation from "../Navigation/Navigation";
import AccountSetting from "../AccountPages/AccountSetting/AccountSetting";
import myac from "./MyAccount.module.scss";

export interface Props {
}

export interface State {

}

class MyAccount extends React.Component<Props, State> {

  render() {
    return (
      <div className={`container-xl ${myac.my_account_bg}`}>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Navigation />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <AccountSetting />
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
