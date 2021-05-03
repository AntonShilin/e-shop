import * as React from "react";
import { NavLink, Redirect } from "react-router-dom";
import cra from "./CreateAccount.module.scss";
import firebase from "firebase";

export interface Props {}

export interface State {
  password: string;
  email: string;
  error: boolean;
  createAccount: boolean;
  firstName: string;
}

class CreateAccount extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: false,
      createAccount: false,
      firstName: "",
    };
  }

  handleCreateEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const newEmail = e.currentTarget.value;
    this.setState({
      email: newEmail,
    });
  };

  handleCreatePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const newPassword = e.currentTarget.value;
    this.setState({
      password: newPassword,
    });
  };

  handleCreateProfileName = (e: React.FormEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;
    this.setState({
      firstName: newName,
    });
  };

  createAccount = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.setState({ createAccount: true });
        this.updateUserProfile();
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  };

  updateUserProfile = () => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      user
        .updateProfile({
          displayName: this.state.firstName,
        })
        .then(() => {
          console.log("Update successful");
        })
        .catch((error) => {
          console.log("Update error");
        });
    }
  };

  render() {
    const { error, createAccount } = this.state;

    if (createAccount) {
      return <Redirect to="/my-account" />;
    }

    return (
      <div className={cra.create_user_bg}>
        <div>
          <h3>Welcome !</h3>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={this.handleCreateEmail}
          />
          <p>{error && "Please enter valid email for example data17@ya.com"}</p>
          <input
            type="text"
            className={cra.first_name}
            onChange={this.handleCreateProfileName}
            placeholder="Enter name"
          />
          <p>{error && "Please enter name"}</p>
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleCreatePassword}
          />
          <p>
            {error &&
              "Please enter 6 or more numbers, an uppercase letter and an\
              lowercase letter"}
          </p>
          <NavLink to="#" onClick={this.createAccount}>
            Create Account
          </NavLink>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
