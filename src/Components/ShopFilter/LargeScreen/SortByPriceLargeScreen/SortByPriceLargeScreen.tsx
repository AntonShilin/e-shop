import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  enableFilterByPrice,
  getMaxPrice,
  getMinPrice,
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
    const { maxPrice, minPrice } = this.props;
    this.props.history.push("/filterby");
    this.props.enableFilterByPrice(minPrice, maxPrice);
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
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMinPrice: (num: number) => dispatch(getMinPrice(num)),
    getMaxPrice: (num: number) => dispatch(getMaxPrice(num)),
    enableFilterByPrice:(min:number,max:number)=>dispatch(enableFilterByPrice(min,max))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SortByPriceLargeScreen)
);
