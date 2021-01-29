import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";
import cf from "./ClearFilter.module.scss";
import ClearFilterByPrice from "./ClearFilterByPrice/ClearFilterByPrice";
import ClearFilterByYear from "./ClearFilterByYear/ClearFilterByYear";

export interface IClearFilterProps {
  filterEnable: boolean;
  checkedYears: number[];
}

export interface IClearFilterState {}

class ClearFilter extends React.Component<
  IClearFilterProps,
  IClearFilterState
> {
  render() {
    const { filterEnable,checkedYears } = this.props;
    return (
      <div className={cf.clear_filter_bg}>
        {(filterEnable || checkedYears.length>0) && (
          <div>
            <p>Clear Filter</p>
          </div>
        )}
        {filterEnable && <ClearFilterByPrice />}
        { checkedYears.length>0 && <ClearFilterByYear />}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  filterEnable: state.filterByPrice.filterEnable,
  checkedYears:state.filterByYear.checkedYears
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilter);
