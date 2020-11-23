import * as React from "react";
import sbt from "./ShopSortBy.module.scss";

export interface IShopSortByProps {}

export interface State {}

class ShopSortBy extends React.Component<IShopSortByProps, State> {
  render() {
    return (
      <div className={`row ${sbt.sort_by_title}`}>
        <div className="col-lg-12 col-md-6">
          <span>Filter</span>
        </div>
        <div className="d-lg-none col-md-6">
          <span>Name v</span>
        </div>
      </div>
    );
  }
}

export default ShopSortBy;
