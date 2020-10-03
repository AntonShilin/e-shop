import * as React from "react";
import { FiArrowRight } from "react-icons/fi";
import s from "./SignUpForm.module.scss";

export interface Props {}

export interface State {}

class SignUpForm extends React.Component<Props, State> {
  render() {
    return (
      <>
        <form action="#" className={s.signup_bg}>
        <h3>Sign up for our Newsletter</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
            <div className="input-group-append">
              <button className="btn">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SignUpForm;
