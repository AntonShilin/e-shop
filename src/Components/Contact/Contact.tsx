import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";
import c from "./Contact.module.scss";

export interface IContactProps {
  isHiddenContainer: boolean;
}

export interface State {}

class Contact extends React.Component<IContactProps, State> {
  render() {
    const { isHiddenContainer } = this.props;
    return (
      isHiddenContainer&&
      <div className="container-xl">
        <div className={`row ${c.contact_item}`}>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h1>Our store</h1>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h3>Woodfield Mall</h3>
            <p>5 Woodfield Mall G120,</p>
            <p>Schaumburg, IL 60173</p>
            <p>
              <b>&#9743; </b>
              (224) 520-8414
            </p>
            <p>
              <strong>Hours of Operation</strong>
            </p>
            <p>Monday - Saturday</p>
            <p>10AM - 9PM</p>
            <p>Sunday</p>
            <p>11AM - 6PM</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isHiddenContainer: state.shopContainer.isHiddenContainer,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
