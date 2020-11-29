import * as React from "react";
import sort_by_price from "./SortByPriceLargeScreen.module.scss";

export interface Props {}

export interface State {}

class SortByPriceLargeScreen extends React.Component<Props, State> {
  render() {
    return (
      <div className={sort_by_price.large_main}>
        <p>Price</p>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default SortByPriceLargeScreen;
