import * as React from "react";
import SortByPriceLargeScreen from "../SortByPriceLargeScreen/SortByPriceLargeScreen";
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
          <div className="col">
            <SortByPriceLargeScreen/>
          </div>
        </div>
      </>
    );
  }
}

export default ShopSortByLargeScreen;
