import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../../Store/Store";
import GetOnlyYears from "../../../HOC/GetOnlyYears";
import large from "./SortByYearLargeScreen.module.scss";

export interface ISortByYearLargeScreenProps {
  allGenresData: any[];
  uniqueYears: any[];
}

export interface State {}

class SortByYearLargeScreen extends React.Component<
  ISortByYearLargeScreenProps,
  State
> {
  render() {
    const { uniqueYears } = this.props;

    return (
      <div className={large.sort_by_year_main_lg}>
        <p>Year</p>
        <div>
          {uniqueYears.length > 0 &&
            uniqueYears.map((year: any, k: number) => (
              <span key={k}>
                <label>
                  <input type="checkbox" value={year} />
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

const withOnlyYears = GetOnlyYears(SortByYearLargeScreen);
export default connect(mapStateToProps, mapDispatchToProps)(withOnlyYears);
