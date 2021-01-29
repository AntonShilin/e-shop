import * as React from "react";
import { connect } from "react-redux";
import {
  addYearToFilter,
    deleteYearFromFilter,
} from "../../../Actions/FilterByYearActions";
import { IApplicationState } from "../../../Store/Store";
import cfy from "./ClearFilterByYear.module.scss";

export interface IClearFilterByYearProps {
  checkedYears: number[];
  filterName: string;
  addYearToFilter: typeof addYearToFilter;
  deleteYearFromFilter: typeof deleteYearFromFilter;
}

export interface State {}

class ClearFilterByYear extends React.Component<
  IClearFilterByYearProps,
  State
> {
  render() {
    const { checkedYears, filterName } = this.props;
    return (
      <div className={cfy.clear_filter_by_year_bg}>
        {checkedYears.map((year, i) => (
          <div key={i}>
            <span
              onClick={() => {
                this.props.deleteYearFromFilter(year);
              }}
            >
              <b>&#9587;</b>
            </span>
            <span>{filterName}:</span>
            <span>{year}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  filterName: state.filterByYear.filterName,
  checkedYears: state.filterByYear.checkedYears,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addYearToFilter: (year: number) => dispatch(addYearToFilter(year)),
    deleteYearFromFilter: (year: number) => dispatch(deleteYearFromFilter(year)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilterByYear);
