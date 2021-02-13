import * as React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import { IBookInfo } from "../../../Types/CartTypes";
import BookForSale from "./BookForSale/BookForSale";
import cp from "./CartPage.module.scss";
import OrderSummary from "./OrderSummary/OrderSummary";

export interface ICartProps {
  cart: IBookInfo[];
}

export interface ICartState {}

class CartPage extends React.Component<ICartProps, ICartState> {
  render() {
    const { cart } = this.props;

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
            <NavLink to="/shop">
              <FiArrowLeft /> Back to Shopping
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <BookForSale />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <OrderSummary />
          </div>
          {cart.length === 0 && (
            <div className="col-12">
              <h2>Your cart is empty</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  cart: state.cartContainer.cart,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
