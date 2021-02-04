import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  addYearToFilter,
    deleteYearFromFilter,
    onYearEnableFilter,
} from "../../../Actions/FilterByYearActions";
import { IApplicationState } from "../../../Store/Store";
import cfy from "./ClearFilterByYear.module.scss";

export interface IClearFilterByYearProps extends RouteComponentProps{
  checkedYears: number[];
  filterName: string;
  addYearToFilter: typeof addYearToFilter;
  deleteYearFromFilter: typeof deleteYearFromFilter;
  onYearEnableFilter: typeof onYearEnableFilter;
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
                if (checkedYears.length === 1) {
                  this.props.history.push("/filter-by-price");
                  this.props.onYearEnableFilter(false);
                }
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
    onYearEnableFilter: (value: boolean) => dispatch(onYearEnableFilter(value)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClearFilterByYear));
