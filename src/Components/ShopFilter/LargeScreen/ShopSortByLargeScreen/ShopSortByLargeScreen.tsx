import * as React from "react";
import SortByPriceLargeScreen from "../SortByPriceLargeScreen/SortByPriceLargeScreen";
import SortByYearLargeScreen from "../SortByYearLargeScreen/SortByYearLargeScreen";
import lc from "./ShopSortByLargeScreen.module.scss";

export interface Props {}

export interface State {}

class ShopSortByLargeScreen extends React.Component<Props, State> {
  render() {
    return (
      <>
        <div className={`row ${lc.sort_by_large_screen_main}`}>
          <div className="col">
            <span>Filter</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <SortByPriceLargeScreen/>
          </div>
          <div className="col-12">
            <SortByYearLargeScreen/>
          </div>
        </div>
      </>
    );
  }
}

export default ShopSortByLargeScreen;
