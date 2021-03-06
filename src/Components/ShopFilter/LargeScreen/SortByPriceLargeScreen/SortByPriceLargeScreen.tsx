import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  enableFilterByPrice,
  getMaxPrice,
  getMinPrice,
  toggleEnableFilter,
} from "../../../../Actions/FilterByPriceActions";
import { IApplicationState } from "../../../../Store/Store";
import sbp from "./SortByPriceLargeScreen.module.scss";

export interface ISortByPriceLargeScreenProps extends RouteComponentProps {
  allGenresData: any[];
  minPrice: number;
  maxPrice: number;
  getMinPrice: typeof getMinPrice;
  getMaxPrice: typeof getMaxPrice;
  enableFilterByPrice: typeof enableFilterByPrice;
  toggleEnableFilter: typeof toggleEnableFilter;
  filterPriceEnable: boolean;
  filterYearEnable: boolean;
}

export interface ISortByPriceLargeScreenState {
}

class SortByPriceLargeScreen extends React.Component<
  ISortByPriceLargeScreenProps,
  ISortByPriceLargeScreenState
  > {
  
  maxDataEntryValidation = (e: { target: { value: number | string } }) => {
    const maxVal = e.target.value.toString().match(/\D/g);
    if (maxVal === null) {
      this.props.getMaxPrice(+e.target.value);
    } 
  };

  minDataEntryValidation = (e: { target: { value: number | string } }) => {
    const minVal = e.target.value.toString().match(/\D/g);
    if (minVal === null) {
      this.props.getMinPrice(+e.target.value);
    } 
  };

  filteredBooksByPrice = () => {
    const { maxPrice, minPrice,filterPriceEnable,
      filterYearEnable } = this.props;
      this.props.enableFilterByPrice(minPrice, maxPrice);
    this.props.toggleEnableFilter(true);
    if (!filterYearEnable) {
      this.props.history.push("/filter-by-price");
    } else if (filterYearEnable) {
      this.props.history.push("/filter-by-price-and-year");
    }
  };

  render() {
    const { maxPrice, minPrice } = this.props;

    return (
      <div className={sbp.sort_price_large_main}>
        <p>Price</p>
        <div>
          <input
            type="text"
            value={minPrice}
            placeholder="min"
            onChange={(e) => this.minDataEntryValidation(e)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.filteredBooksByPrice();
              }
            }}
          />
          <input
            type="text"
            value={maxPrice}
            placeholder="max"
            onChange={(e) => this.maxDataEntryValidation(e)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.filteredBooksByPrice();
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
  filterPriceEnable: state.filterByPrice.filterPriceEnable,
  filterYearEnable: state.filterByYear.filterYearEnable,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMinPrice: (num: number) => dispatch(getMinPrice(num)),
    getMaxPrice: (num: number) => dispatch(getMaxPrice(num)),
    enableFilterByPrice: (min: number, max: number) => dispatch(enableFilterByPrice(min, max)),
    toggleEnableFilter: (value: boolean) => dispatch(toggleEnableFilter(value)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SortByPriceLargeScreen)
);
