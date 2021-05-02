import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../Store/Store";
import { IBookInfo } from "../../../Types/CartTypes";
import OrderSummary from "../CartPage/OrderSummary/OrderSummary";
import chp from "./CheckoutPage.module.scss";

export interface ICheckoutPageProps {
  cart: IBookInfo[];
}

export interface ICheckoutPageState {}

class CheckoutPage extends React.Component<
  ICheckoutPageProps,
  ICheckoutPageState
> {
  render() {
    const { cart } = this.props;

    return (
      <div className={chp.checkout_page_bg}>
        <div className="container-xl">
          <div>
            <hr />
            <div>
              <span>1</span>
              <p>your cart</p>
              <p>
                {cart.length > 0 &&
                  "$ " +
                    cart
                      .reduce(
                        (quantity, book) => quantity + +book.total,
                        0
                      )
                      .toFixed(2)}
              </p>
            </div>
            <div>
              <span>2</span>
              <p>shipping</p>
            </div>
            <div>
              <span>3</span>
              <p>payment</p>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
