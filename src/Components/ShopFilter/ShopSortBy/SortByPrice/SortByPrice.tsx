import * as React from "react";
import sbp from "./SortByPrice.module.scss";
export interface ISortByPriceProps {}

export interface ISortByPriceState {
  showPriceFilter: boolean;
}

class SortByPrice extends React.Component<
  ISortByPriceProps,
  ISortByPriceState
> {
  constructor(props: ISortByPriceProps) {
    super(props);
    this.state = {
      showPriceFilter: false,
    };
  }

  public toggleFilter = () => {
    this.setState({ showPriceFilter: !this.state.showPriceFilter });
  };

  render() {
    return (
      <div className={sbp.sort_price_main}>
        <p onClick={this.toggleFilter}>Price</p>
        {this.state.showPriceFilter && (
          <div>
            <input type="text" />
            <input type="text" />
          </div>
        )}
      </div>
    );
  }
}

export default SortByPrice;
