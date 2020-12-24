import * as React from "react";
import { Link } from "react-router-dom";
import nf from "./NotFoundPage.module.scss";

export interface Props {}

export interface State {}

class NotFoundPage extends React.Component<Props, State> {
  render() {
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <div className={`${nf.not_found_page}`}>
              <h1>404 - Not Found!</h1>
              <Link to="/">Go Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
