import firebase from "firebase";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { setAccountSignIn } from "../../Actions/LoggedBoxActions";
import { IApplicationState } from "../../Store/Store";
import logbox from "./LoggedBoxSmDevices.module.scss";

export interface Props {
  isAccountSignIn: boolean;
  setAccountSignIn: typeof setAccountSignIn;
}

export interface State {
  password: string;
  email: string;
  error: boolean;
  errorMessage: string;
}

class LoggedBoxSmDevices extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: false,
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
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.props.setAccountSignIn(true);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        this.props.setAccountSignIn(false);
        this.setState({ errorMessage });
      });
  };

  render() {
    const { email, password, error, errorMessage } = this.state;
    const { isAccountSignIn } = this.props;

    if (isAccountSignIn) {
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

const mapStateToProps = (state: IApplicationState) => ({
  isAccountSignIn: state.loggedBox.isAccountSignIn
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAccountSignIn:(value:boolean)=>dispatch(setAccountSignIn(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedBoxSmDevices);
