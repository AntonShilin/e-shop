import firebase from "firebase";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { toggleLoggedBox } from "../../Actions/LoggedBoxActions";
import { IApplicationState } from "../../Store/Store";
import lb from "./LoggedBox.module.scss";

export interface ILoggedBoxProps {
  isLoggedBoxOpen: boolean;
  toggleLoggedBox: typeof toggleLoggedBox;
}

export interface ILoggedBoxState {
  password: string;
  email: string;
  error: boolean;
  signIn: boolean;
  errorMessage: string;
}

class LoggedBox extends React.Component<ILoggedBoxProps, ILoggedBoxState> {
  constructor(props: ILoggedBoxProps) {
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
        console.log(userCredential);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        this.setState({ signIn: false, errorMessage });
      });
  };

  render() {
    const { isLoggedBoxOpen } = this.props;
    const { email, password, error, signIn, errorMessage } = this.state;

    if (signIn) {
      return <Redirect to="/my-account" />;
    }

    return (
      isLoggedBoxOpen && (
        <div
          className={`${lb.logged_box_bg}`}
          // onClick={()=>this.props.toggleLoggedBox(false)}
        >
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={this.handleChangeEmail}
            />
            {
              <p>
                {error && "Please enter valid email for example data17@ya.com"}
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
            {errorMessage && (
              <NavLink
                to="/create"
                onClick={() => this.props.toggleLoggedBox(false)}
              >
                SignUp
              </NavLink>
            )}
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isLoggedBoxOpen: state.loggedBox.isLoggedBoxOpen,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleLoggedBox: (value: boolean) => dispatch(toggleLoggedBox(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedBox);
