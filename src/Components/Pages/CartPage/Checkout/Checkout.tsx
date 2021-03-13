import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../../Store/Store";
import { IBookInfo } from "../../../../Types/CartTypes";
import ch from "./Checkout.module.scss";

export interface ICheckoutProps {
    cart: IBookInfo[];
}

export interface ICheckoutState {}

class Checkout extends React.Component<ICheckoutProps, ICheckoutState> {
  render() {
    const { cart } = this.props;
    return (
      cart.length > 0 && (
        <NavLink to="/checkout-page" className={ch.checkout_btn}>Checkout to Continue</NavLink>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  cart: state.cartContainer.cart,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
