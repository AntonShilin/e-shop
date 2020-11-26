import * as React from "react";
import SelectBox from "../SelectBox/SelectBox";
import sbt from "./ShopSortBy.module.scss";

export interface IShopSortByProps {}

export interface State {}

class ShopSortBy extends React.Component<IShopSortByProps, State> {
  render() {
    return (
      <div className={`row ${sbt.sort_by_title}`}>
        <div className="col-lg-12 col-6">
          <span>Filter</span>
        </div>
        <div className="d-lg-none col-6">
        <SelectBox/>
        </div>
      </div>
    );
  }
}

export default ShopSortBy;
