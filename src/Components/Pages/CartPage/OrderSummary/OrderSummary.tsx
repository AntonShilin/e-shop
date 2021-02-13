import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../../Store/Store";
import { IBookInfo } from "../../../../Types/CartTypes";
import os from "./OrderSummary.module.scss";

export interface IOrderSummaryProps {
  cart: IBookInfo[];
}

export interface IOrderSummaryState {
  summaryPrice: number;
}

class OrderSummary extends React.Component<
  IOrderSummaryProps,
  IOrderSummaryState
> {
  constructor(props: IOrderSummaryProps) {
    super(props);
    this.state = {
      summaryPrice: 0,
    };
  }

  componentDidMount() {
    let sum = 0;
    this.props.cart.map((book, i) => {
      sum += +book.totalPrice;
      this.setState({ summaryPrice: sum });
    });
  }

  render() {
    const { cart } = this.props;
    const { summaryPrice } = this.state;

    return (
      cart.length > 0 && (
        <div className={os.order_summary}>
          <div>
            <h5>Order Summary</h5>
          </div>
          <div>
            <span>Subtotal</span>
            <span>$ {summaryPrice.toFixed(2)}</span>
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
