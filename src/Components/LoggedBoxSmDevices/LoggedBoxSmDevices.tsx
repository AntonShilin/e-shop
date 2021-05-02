import firebase from "firebase";
import * as React from "react";
import { NavLink, Redirect } from "react-router-dom";
import logbox from "./LoggedBoxSmDevices.module.scss";

export interface Props {}

export interface State {
  password: string;
  email: string;
  error: boolean;
  signIn: boolean;
  errorMessage: string;
}

class LoggedBoxSmDevices extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: false,
      signIn: false,
      errorMessage: "",
    };
  }

  handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const newEmail = e.currentTarget.value;
    this.setState({
      email: newEmail,
    });
  };

  handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const newPassword = e.currentTarget.value;
    this.setState({
      password: newPassword,
    });
  };

  handleSignIn = () => {
    const { email, password, error, signIn } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.setState({ signIn: true });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        this.setState({ signIn: false, errorMessage });
      });
  };
  render() {
    const { email, password, error, signIn, errorMessage } = this.state;

    if (signIn) {
      return <Redirect to="/my-account" />;
    }
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12">
            <div className={`${logbox.logged_box_sm_bg}`}>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={this.handleChangeEmail}
              />
              {
                <p>
                  {error &&
                    "Please enter valid email for example data17@ya.com"}
                </p>
              }
              <input
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={this.handleChangePassword}
              />
              <p>
                {error &&
                  "Please enter 6 or more numbers, an uppercase letter and an\
              lowercase letter"}
              </p>
              <button onClick={this.handleSignIn}>Continue</button>
              <p>{errorMessage}</p>
              {errorMessage && <NavLink to="/create">SignUp</NavLink>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedBoxSmDevices;
