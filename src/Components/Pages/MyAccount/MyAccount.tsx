import * as React from "react";
import mya from "./MyAccount.module.scss";

export interface Props {}

export interface State {}

class MyAccount extends React.Component<Props, State> {
  render() {
    return (
      <div className={`container-xl ${mya.my_account_bg}`}>
        <div className="row">
          <div className="col">
            <div>Logo</div>
            <p>Name</p>
          </div>
          <div className="col">
            <div>Account Setting</div>
            <form action="#">
              <input type="text" />
              <input type="text" />
              <input type="email" />
              <input type="password" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
