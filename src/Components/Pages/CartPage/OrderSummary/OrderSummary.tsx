import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../../Store/Store";
import { IBookInfo } from "../../../../Types/CartTypes";
import os from "./OrderSummary.module.scss";

export interface IOrderSummaryProps {
  cart: IBookInfo[];
}

export interface IOrderSummaryState {
}

class OrderSummary extends React.Component<
  IOrderSummaryProps,
  IOrderSummaryState
> {

  render() {
    const { cart } = this.props;

    return (
      cart.length > 0 && (
        <div className={os.order_summary}>
          <div>
            <h5>Order Summary</h5>
          </div>
          <div>
            <span>Subtotal</span>
            <span>
              $ {cart.reduce((total, book) => total + +book.totalPrice, 0).toFixed(2)}
            </span>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
