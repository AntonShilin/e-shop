import * as React from "react";
import { connect } from "react-redux";
import {
  applyDefaultPrice,
  toggleEnableFilter,
} from "../../../Actions/FilterByPriceActions";
import { IApplicationState } from "../../../Store/Store";
import cfp from "./ClearFilterByPrice.module.scss";

export interface Props {
  min: number;
  max: number;
  filterName: string;
  toggleEnableFilter: typeof toggleEnableFilter;
  applyDefaultPrice: typeof applyDefaultPrice;
}

export interface State {}

class ClearFilterByPrice extends React.Component<Props, State> {
  render() {
    const { min, max, filterName } = this.props;
    return (
      <div className={cfp.clear_filter_by_price_bg}>
        <span
          onClick={() => {
            this.props.toggleEnableFilter(false);
            this.props.applyDefaultPrice();
          }}
        >
          <b>&#9587;</b>
        </span>
        <span>{filterName}:</span>
        <span>{min}$-{max}$</span>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  filterName: state.filterByPrice.filterName,
  min: state.filterByPrice.filterByPriceOn.min,
  max: state.filterByPrice.filterByPriceOn.max,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleEnableFilter: (value: boolean) => dispatch(toggleEnableFilter(value)),
    applyDefaultPrice: () => dispatch(applyDefaultPrice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilterByPrice);
