import * as React from "react";
import { connect } from "react-redux";
import {  RouteComponentProps, withRouter } from "react-router-dom";
import {
  getMaxPrice,
  getMinPrice,
} from "../../../../Actions/FilterByPriceActions";
import { IApplicationState } from "../../../../Store/Store";
import sbprice from "./SortByPrice.module.scss";

export interface ISortByPriceProps extends RouteComponentProps{
  allGenresData: any[];
  minPrice: number;
  maxPrice: number;
  getMinPrice: typeof getMinPrice;
  getMaxPrice: typeof getMaxPrice;
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
              value={minPrice > 0 ? minPrice : ""}
              placeholder={minPrice.toString()}
              onChange={(e) => this.props.getMinPrice(+e.target.value)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  console.log(this.props)
                  this.props.history.push("/filterby")
                }
              }}
            />
            <input
              type="text"
              value={maxPrice > 0 ? maxPrice : ""}
              placeholder={maxPrice.toString()}
              onChange={(e) => this.props.getMaxPrice(+e.target.value)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  console.log(this.props)
                  this.props.history.push("/filterby")
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
  minPrice: state.filterByPrice.minPrice,
  maxPrice: state.filterByPrice.maxPrice,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMinPrice: (num: number) => dispatch(getMinPrice(num)),
    getMaxPrice: (num: number) => dispatch(getMaxPrice(num)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SortByPrice));
