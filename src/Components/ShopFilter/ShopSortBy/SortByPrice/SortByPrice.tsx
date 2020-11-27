import * as React from "react";
import sbp from "./SortByPrice.module.scss";
export interface ISortByPriceProps {}

export interface State {}

class SortByPrice extends React.Component<ISortByPriceProps, State> {
  render() {
    return (
      <div className={sbp.sort_price_main}>
            <p>Price</p>
                <input type="text"/>
                <input type="text"/>
      </div>
    );
  }
}

export default SortByPrice;
