import * as React from "react";
import { FiArrowLeft } from "react-icons/fi";
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
              <Link to="/"> <FiArrowLeft/> Back to Shopping</Link>
              <h1>Oops! That page doesn't exists</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
