import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../../Store/Store";
import large from "./SortByYearLargeScreen.module.scss";

export interface ISortByYearLargeScreenProps {
  allGenresData: any[];
}

export interface State {
  uniqueYears: any[];
}

class SortByYearLargeScreen extends React.Component<
  ISortByYearLargeScreenProps,
  State
> {
  constructor(props: ISortByYearLargeScreenProps) {
    super(props);
    this.state = {
      uniqueYears: [],
    };
  }

  public filterByUniqueYear = (arr: any[]) => {
    let onlyYears: number[] = [];
    onlyYears = arr.map(
      (book: any, k: number) => book.volumeInfo.publishedDate.match(/\d+/)[0]
    );
    onlyYears = onlyYears.filter((item, i) => onlyYears.indexOf(item) === i);
    onlyYears.sort((a, b)=>a-b)
    this.setState({uniqueYears: [...onlyYears]})
  };

  componentDidMount(){
    this.filterByUniqueYear(this.props.allGenresData[0].items);
  }

  render() {
    const { uniqueYears } = this.state;

    return (
      <div className={large.sort_by_year_main_lg}>
        <p>Year</p>
        <div>
          {uniqueYears.length>0 &&
            uniqueYears.map((year: any, k: number) => (
              <span key={k}>
                <label>
                  <input type="checkbox" value={year}/>
                  {year}
                </label>
              </span>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortByYearLargeScreen);
