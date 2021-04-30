import * as React from "react";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import mya from "./MyAccount.module.scss";
import firebase from "firebase";
import { IApplicationState } from "../../../Store/Store";
import { setAccountCreatePosition } from "../../../Actions/LoggedBoxActions";
import { connect } from "react-redux";

export interface Props {
  setAccountCreatePosition: typeof setAccountCreatePosition;
}

export interface State {
  password: string;
  email: string;
  profileName: string;
}

class MyAccount extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      profileName: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((profile: any) => {
      if (profile) {
        console.log("profile", profile);
        this.setState({
          email: profile.email,
          profileName: profile.displayName,
        });
      }
    });
  }

  deleteAccount = () => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      user
        .delete()
        .then(() => {
          console.log("delete account success");
        })
        .catch((error) => {
          console.log("delete account error");
        });
    }
  };

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
    const { password, email, profileName } = this.state;

    return (
      <div className={`container-xl ${mya.my_account_bg}`}>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div>
              <MdAccountCircle />
              <p>{profileName}</p>
            </div>
            <NavLink to="#">Account Setting</NavLink>
            <NavLink to="#">My Items</NavLink>
            <NavLink to="/home" onClick={this.signOut}>
              Log Out
            </NavLink>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div>
              <NavLink to="/home" className={mya.close}>
                &#10799;
              </NavLink>
              <h3>Account Setting</h3>
            </div>
            <div>
              <span>Personal information</span>
              <input type="text" defaultValue={profileName} />
              <input type="email" defaultValue={email} />
            </div>
            <NavLink
              to="/home"
              className="btn btn-danger"
              onClick={this.deleteAccount}
            >
              Delete Account
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAccountCreatePosition: (value: boolean) =>
      dispatch(setAccountCreatePosition(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
