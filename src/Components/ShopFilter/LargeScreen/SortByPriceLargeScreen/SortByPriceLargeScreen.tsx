import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  getMaxPrice,
  getMinPrice,
} from "../../../../Actions/FilterByPriceActions";
import { IApplicationState } from "../../../../Store/Store";
import sbp from "./SortByPriceLargeScreen.module.scss";

export interface ISortByPriceLargeScreenProps extends RouteComponentProps{
  allGenresData: any[];
  minPrice: number;
  maxPrice: number;
  getMinPrice: typeof getMinPrice;
  getMaxPrice: typeof getMaxPrice;
}

export interface State {}

class SortByPriceLargeScreen extends React.Component<
  ISortByPriceLargeScreenProps,
  State
> {
  render() {
    const { maxPrice, minPrice } = this.props;

    return (
      <div className={sbp.sort_price_large_main}>
        <p>Price</p>
        <div>
          <input
            type="text"
            value={minPrice > 0 ? minPrice : ""}
            placeholder={minPrice.toString()}
            onChange={(e) => this.props.getMinPrice(+e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.props.history.push("/filterby");
              }
            }}
          />
          <input
            type="text"
            value={maxPrice > 0 ? maxPrice : ""}
            placeholder={maxPrice.toString()}
            onChange={(e) => this.props.getMaxPrice(+e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.props.history.push("/filterby");
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
  minPrice: state.filterByPrice.minPrice,
  maxPrice: state.filterByPrice.maxPrice,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMinPrice: (num: number) => dispatch(getMinPrice(num)),
    getMaxPrice: (num: number) => dispatch(getMaxPrice(num)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SortByPriceLargeScreen));
