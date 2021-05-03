import firebase from "firebase";
import * as React from "react";
import { MdAccountCircle } from "react-icons/md";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  setAccountSignIn,
  setUserAccountName,
} from "../../../Actions/LoggedBoxActions";
import { IApplicationState } from "../../../Store/Store";
import n from "./Navigation.module.scss";

export interface Props {
  userName: string;
  setUserAccountName: typeof setUserAccountName;
  setAccountSignIn: typeof setAccountSignIn;
}

export interface State {}

class Navigation extends React.Component<Props, State> {
  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this.props.setUserAccountName("");
          this.props.setAccountSignIn(false);
        },
        (error) => {
          console.error("Sign Out Error", error);
        }
      );
  };

  render() {
    const { userName } = this.props;

    return (
      <div className={n.navigation_bg}>
        <div>
          <MdAccountCircle />
          <p>{userName}</p>
        </div>
        <nav>
          <NavLink activeClassName={n.active} to="/my-account">
            Account Setting
          </NavLink>
          <NavLink activeClassName={n.active} to="/items">
            My Items
          </NavLink>
          <NavLink to="/home" onClick={this.signOut}>
            Go Out
          </NavLink>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  userName: state.loggedBox.userName,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserAccountName: (name: string) => dispatch(setUserAccountName(name)),
    setAccountSignIn: (value: boolean) => dispatch(setAccountSignIn(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
