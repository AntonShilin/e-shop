import * as React from "react";
import logbox from "./LoggedBoxSmDevices.module.scss";

export interface Props {}

export interface State {}

class LoggedBoxSmDevices extends React.Component<Props, State> {
  render() {
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12">
            <div
              className={`${logbox.logged_box_sm_bg}`}
            >
                <form action="#">
                  <input type="email" placeholder="Enter your email" />
                  <button>Continue</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default LoggedBoxSmDevices;
