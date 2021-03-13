import * as React from "react";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import { IBookInfo } from "../../../Types/CartTypes";
import BookForSale from "./BookForSale/BookForSale";
import cp from "./CartPage.module.scss";
import Checkout from "./Checkout/Checkout";
import OrderSummary from "./OrderSummary/OrderSummary";

export interface ICartProps {
  cart: IBookInfo[];
}

export interface ICartState {
  isHidden: boolean;
}

class CartPage extends React.Component<ICartProps, ICartState> {
  constructor(props: ICartProps) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }

  toggleCartVisible = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    const { cart } = this.props;
    const { isHidden } = this.state;

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
          <div className="col-10">
            {cart.length > 0 && (
              <p>
                {cart.reduce(
                  (quantity, book) => quantity + +book.quantityToPurchase,
                  0
                )}{" "}
                Item(s) in your cart
              </p>
            )}
          </div>
          <div className="col-2">
            {cart.length > 0 && (
              <div className={cp.btn_cart} onClick={this.toggleCartVisible}>
                {isHidden ? <FiMinus /> : <FiPlus />}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={
              isHidden
                ? {
                    height: "0rem",
                  }
                : {}
            }
          >
            <BookForSale />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <OrderSummary />
            <Checkout />
          </div>
        </div>
        <div className="row">
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
