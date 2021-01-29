import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  addYearToFilter,
  deleteYearFromFilter,
} from "../../../../Actions/FilterByYearActions";
import { IApplicationState } from "../../../../Store/Store";
import sy from "./SortByYear.module.scss";

export interface ISortByYearProps extends RouteComponentProps  {
  allGenresData: any[];
  shopID: number;
  checkedYears: number[];
  addYearToFilter: typeof addYearToFilter;
  deleteYearFromFilter: typeof deleteYearFromFilter;
}

export interface ISortByYearState {
  showYearFilter: boolean;
  uniqueYears: any[];
}

class SortByYear extends React.Component<ISortByYearProps, ISortByYearState> {
  constructor(props: ISortByYearProps) {
    super(props);
    this.state = {
      showYearFilter: false,
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

  public toggleFilterYear = () => {
    this.setState({ showYearFilter: !this.state.showYearFilter });
  };

  componentDidUpdate(prevProps: { allGenresData: string | any[] }) {
    const { allGenresData, shopID } = this.props;
    if (allGenresData.length !== prevProps.allGenresData.length) {
      this.filterByUniqueYear(allGenresData[shopID].items);
    }
  }

  render() {
    const { uniqueYears, showYearFilter } = this.state;
    const { checkedYears } = this.props;

    return (
      <div className={sy.sort_by_year_main_sm}>
        <p onClick={this.toggleFilterYear}>Year</p>
        {showYearFilter && (
          <div>
            {uniqueYears.map((year: any, k: number) => (
              <label key={k}>
                {year}
                <input
                  type="checkbox"
                  value={year}
                  checked={checkedYears.includes(+year) ? true : false}
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
        )}
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
  connect(mapStateToProps, mapDispatchToProps)(SortByYear)
);
