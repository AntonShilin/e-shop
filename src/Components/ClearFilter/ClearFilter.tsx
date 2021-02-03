import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";
import cf from "./ClearFilter.module.scss";
import ClearFilterByPrice from "./ClearFilterByPrice/ClearFilterByPrice";
import ClearFilterByYear from "./ClearFilterByYear/ClearFilterByYear";

export interface IClearFilterProps {
  filterPriceEnable: boolean;
  filterYearEnable: boolean;
}

export interface IClearFilterState {}

class ClearFilter extends React.Component<
  IClearFilterProps,
  IClearFilterState
> {
  render() {
    const { filterPriceEnable, filterYearEnable } = this.props;
    return (
      <div className={cf.clear_filter_bg}>
        {(filterPriceEnable || filterYearEnable) && (
          <div>
            <p>Clear Filter</p>
          </div>
        )}
        {filterPriceEnable && <ClearFilterByPrice />}
        {filterYearEnable && <ClearFilterByYear />}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  filterPriceEnable: state.filterByPrice.filterPriceEnable,
  filterYearEnable: state.filterByYear.filterYearEnable,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilter);
