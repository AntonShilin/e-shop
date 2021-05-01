import firebase from "firebase";
import * as React from "react";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import n from "./Navigation.module.scss";

export interface Props {}

export interface State {
  profileName: string;
}

class Navigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      profileName: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((profile: any) => {
      if (profile) {
        this.setState({
          profileName: profile.displayName,
        });
      }
    });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("Signed Out");
        },
        (error) => {
          console.error("Sign Out Error", error);
        }
      );
  };

  render() {
    const { profileName } = this.state;

    return (
      <div className={n.navigation_bg}>
        <div>
          <MdAccountCircle />
          <p>{profileName}</p>
        </div>
        <nav>
          <NavLink activeClassName={n.active} to="/my-account">Account Setting</NavLink>
          <NavLink activeClassName={n.active} to="/items">My Items</NavLink>
          <NavLink to="/home" onClick={this.signOut}>
            Go Out
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;
