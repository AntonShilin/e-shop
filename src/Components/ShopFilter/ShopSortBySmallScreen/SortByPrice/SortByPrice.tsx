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
import sbprice from "./SortByPrice.module.scss";

export interface ISortByPriceProps extends RouteComponentProps {
  allGenresData: any[];
  shopID: number;
  minPrice: number;
  maxPrice: number;
  getMinPrice: typeof getMinPrice;
  getMaxPrice: typeof getMaxPrice;
  enableFilterByPrice: typeof enableFilterByPrice;
  toggleEnableFilter: typeof toggleEnableFilter;
}

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

  maxDataEntryValidation = (e: { target: { value: number | string } }) => {
    const val = e.target.value.toString().match(/\D/g);
    if (val === null) {
      this.props.getMaxPrice(+e.target.value);
    }
  };

  minDataEntryValidation = (e: { target: { value: number | string } }) => {
    const val = e.target.value.toString().match(/\D/g);
    if (val === null) {
      this.props.getMinPrice(+e.target.value);
    }
  };

  filteredBooksByPrice = () => {
    const { maxPrice, minPrice } = this.props;
    this.props.history.push("/filter-by-price");
    this.props.enableFilterByPrice(minPrice, maxPrice);
    this.props.toggleEnableFilter(true);
  };

  public toggleFilter = () => {
    this.setState({ showPriceFilter: !this.state.showPriceFilter });
  };

  render() {
    const { maxPrice, minPrice } = this.props;

    return (
      <div className={sbprice.sort_price_main}>
        <p onClick={this.toggleFilter}>Price</p>
        {this.state.showPriceFilter && (
          <div>
            <input
              type="text"
              value={minPrice}
              placeholder="min"
              onChange={(e) => {
                this.minDataEntryValidation(e);
              }}
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
  shopID: state.shopContainer.shopID,
  minPrice: state.filterByPrice.minPrice,
  maxPrice: state.filterByPrice.maxPrice,
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
  connect(mapStateToProps, mapDispatchToProps)(SortByPrice)
);
