import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  addYearToFilter,
  deleteYearFromFilter,
  onYearEnableFilter,
} from "../../../../Actions/FilterByYearActions";
import { IApplicationState } from "../../../../Store/Store";
import large from "./SortByYearLargeScreen.module.scss";

export interface ISortByYearLargeScreenProps extends RouteComponentProps {
  allGenresData: any[];
  shopID: number;
  addYearToFilter: typeof addYearToFilter;
  deleteYearFromFilter: typeof deleteYearFromFilter;
  onYearEnableFilter: typeof onYearEnableFilter;
  checkedYears: number[];
  filterPriceEnable: boolean;
  filterYearEnable: boolean;
}

export interface ISortByYearLargeScreenState {
  uniqueYears: any[];
}

class SortByYearLargeScreen extends React.Component<
  ISortByYearLargeScreenProps,
  ISortByYearLargeScreenState
> {
  constructor(props: ISortByYearLargeScreenProps) {
    super(props);
    this.state = {
      uniqueYears: [],
    };
  }

  componentDidMount() {
    const { allGenresData, shopID } = this.props;
    if (allGenresData[shopID] !== undefined) {
      this.filterByUniqueYear(allGenresData[shopID].items);
    }
  }

  filterByUniqueYear = (arr: any[]) => {
    let onlyYears: number[] = [];
    onlyYears = arr.map((book: any, k: number) => {
      if ("publishedDate" in book.volumeInfo) {
        if (book.volumeInfo.publishedDate !== undefined) {
          return book.volumeInfo.publishedDate.match(/\d+/)[0];
        }
      }
    });
    onlyYears = onlyYears.filter((x) => x !== undefined);
    onlyYears = onlyYears.filter((item, i) => onlyYears.indexOf(item) === i);
    onlyYears.sort((a, b) => a - b);
    this.setState({ uniqueYears: onlyYears });
  };

  componentDidUpdate(prevProps: { shopID: number }) {
    const { allGenresData, shopID } = this.props;
    if (shopID !== prevProps.shopID) {
      this.filterByUniqueYear(allGenresData[shopID].items);
    }
  }

  render() {
    const { uniqueYears } = this.state;
    const { checkedYears, filterPriceEnable, filterYearEnable } = this.props;

    return (
      <div className={large.sort_by_year_main_lg}>
        <p>Year</p>
        <div>
          {uniqueYears.map((year: string, k: number) => (
            <label key={k}>
              {year}
              <input
                type="checkbox"
                checked={checkedYears.includes(+year) ? true : false}
                value={year}
                onChange={(e) => {
                  if (e.target.checked) {
                    this.props.addYearToFilter(+year);
                    this.props.onYearEnableFilter(true);
                    if (filterPriceEnable) {
                      this.props.history.push("/filter-by-price-and-year");
                    } else if (!filterPriceEnable) {
                      this.props.history.push("/filter-by-year");
                    }
                  }
                  if (e.target.checked === false) {
                    this.props.deleteYearFromFilter(+year);
                    if (checkedYears.length === 1) {
                      this.props.history.push("/filter-by-price");
                      this.props.onYearEnableFilter(false);
                    }
                  }
                }}
              />
              <span />
            </label>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
  shopID: state.shopContainer.shopID,
  checkedYears: state.filterByYear.checkedYears,
  filterPriceEnable: state.filterByPrice.filterPriceEnable,
  filterYearEnable: state.filterByYear.filterYearEnable,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addYearToFilter: (year: number) => dispatch(addYearToFilter(year)),
    deleteYearFromFilter: (year: number) =>
      dispatch(deleteYearFromFilter(year)),
    onYearEnableFilter: (value: boolean) => dispatch(onYearEnableFilter(value)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SortByYearLargeScreen)
);
