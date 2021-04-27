import * as React from "react";
import { NavLink, Redirect } from "react-router-dom";
import cra from "./CreateAccount.module.scss";
import firebase from "firebase";

export interface Props {}

export interface State {
  password: string;
  email: string;
  error: boolean;
  createUser: boolean;
}

class CreateAccount extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: false,
      createUser: false,
    };
  }

  componentDidMount() {
    const db = firebase.database();
    console.log(db);
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

  createAccout = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.setState({ createUser: true }))
      .catch((error) => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  render() {
    const { error, createUser } = this.state;

    return createUser ? (
      <Redirect to="/my-account" />
    ) : (
      <div className={cra.create_user_bg}>
        <div>
          <h3>Welcome !</h3>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={this.handleChangeEmail}
          />
          <p>{error && "Please enter valid email"}</p>
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleChangePassword}
          />
          <p>
            {error &&
              "Please enter 6 or more numbers, an uppercase letter and an\
              lowercase letter"}
          </p>
          <NavLink to="#" onClick={this.createAccout}>
            Create Account
          </NavLink>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
