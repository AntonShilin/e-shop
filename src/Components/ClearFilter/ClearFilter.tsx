import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";
import cf from "./ClearFilter.module.scss";
import ClearFilterByPrice from "./ClearFilterByPrice/ClearFilterByPrice";

export interface IClearFilterProps {
  filterEnable: boolean;
}

export interface IClearFilterState {}

class ClearFilter extends React.Component<
  IClearFilterProps,
  IClearFilterState
> {
  render() {
    const { filterEnable } = this.props;
    return (
      filterEnable && (
        <div className={cf.clear_filter_bg}>
          <span>Clear Filter</span>
          <ClearFilterByPrice />
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  filterEnable: state.filterByPrice.filterEnable,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilter);
