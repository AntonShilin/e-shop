import firebase from "firebase";
import * as React from "react";
import { NavLink } from "react-router-dom";
import as from "./AccountSetting.module.scss";

export interface Props {}

export interface State {
  email: string;
  profileName: string;
}

class AccountSetting extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      profileName: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((profile: any) => {
      if (profile) {
        this.setState({
          email: profile.email,
          profileName: profile.displayName,
        });
      }
    });
  }

  render() {
    const { email, profileName } = this.state;
    return (
      <div className={as.account_setting_bg}>
        <div>
          <NavLink to="/home" className={as.close}>
            &#10799;
          </NavLink>
          <h3>Account Setting</h3>
        </div>
        <div>
          <span>Personal Information</span>
          <input type="text" defaultValue={profileName} />
          <input type="email" defaultValue={email} />
        </div>
      </div>
    );
  }
}

export default AccountSetting;
