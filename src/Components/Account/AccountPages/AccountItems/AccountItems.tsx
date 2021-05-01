import * as React from "react";
import { NavLink } from "react-router-dom";
import ai from "./AccountItems.module.scss";

export interface Props {}

export interface State {}

class AccountItems extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      profileName: "",
    };
  }

  render() {
    return (
      <div className={ai.account_items_bg}>
        <div>
          <NavLink to="/home" className={ai.close}>
            &#10799;
          </NavLink>
          <h3>My Items</h3>
        </div>
        <div>
          <h5>You have placed no orders.</h5>
        </div>
      </div>
    );
  }
}

export default AccountItems;
