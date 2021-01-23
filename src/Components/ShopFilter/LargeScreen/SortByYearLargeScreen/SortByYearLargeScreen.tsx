import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../../Store/Store";
import large from "./SortByYearLargeScreen.module.scss";

export interface ISortByYearLargeScreenProps {
  allGenresData: any[];
  shopID: number;
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

  render() {
    const { uniqueYears } = this.state;

    return (
      <div className={large.sort_by_year_main_lg}>
        <p>Year</p>
        <div>
          {uniqueYears.map((year: any, k: number) => (
            <label key={k}>
              {year}
              <input type="checkbox" value={year} />
              <span/>
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
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortByYearLargeScreen);
