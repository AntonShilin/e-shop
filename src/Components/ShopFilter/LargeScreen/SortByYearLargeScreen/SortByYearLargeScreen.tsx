import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  addYearToFilter,
  deleteYearFromFilter,
} from "../../../../Actions/FilterByYearActions";
import { IApplicationState } from "../../../../Store/Store";
import large from "./SortByYearLargeScreen.module.scss";

export interface ISortByYearLargeScreenProps extends RouteComponentProps {
  allGenresData: any[];
  shopID: number;
  addYearToFilter: typeof addYearToFilter;
  deleteYearFromFilter: typeof deleteYearFromFilter;
  checkedYears: number[];
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

  componentDidUpdate(prevProps: { allGenresData: string | any[] }) {
    const { allGenresData, shopID } = this.props;
    if (allGenresData.length !== prevProps.allGenresData.length) {
      this.filterByUniqueYear(allGenresData[shopID].items);
    }
  }

  render() {
    const { uniqueYears } = this.state;
    const { checkedYears } = this.props;

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
                    this.props.history.push("/filter-by-year");
                  }
                  if (e.target.checked === false) {
                    this.props.deleteYearFromFilter(+year);
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
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addYearToFilter: (year: number) => dispatch(addYearToFilter(year)),
    deleteYearFromFilter: (year: number) =>
      dispatch(deleteYearFromFilter(year)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SortByYearLargeScreen)
);
