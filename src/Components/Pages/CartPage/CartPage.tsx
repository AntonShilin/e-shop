import * as React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import BookForSale from "./BookForSale/BookForSale";
import cp from "./CartPage.module.scss";

export interface ICartProps {
}

export interface ICartState {}

class CartPage extends React.Component<ICartProps, ICartState> {
  render() {

    return (
      <div className={`container-xl ${cp.cart_page_bg}`}>
        <div className="row">
          <div className="col">
            <div>
              <h2>Your Cart</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NavLink to="/">
              <FiArrowLeft /> Back to Shopping
            </NavLink>
          </div>
            </div>
            <div className="row">
                <div className="col">
                    <BookForSale/>
                </div>
                <div className="col"></div>
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
