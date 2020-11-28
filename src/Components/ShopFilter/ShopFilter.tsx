import * as React from "react";
import CategoryBooks from "./CategoryBooks/CategoryBooks";
import ShopSortBy from "./ShopSortBy/ShopSortBy";
import ShopViewCategory from "./ShopViewCategory/ShopViewCategory";

export interface IShopFilterProps {}

export interface IShopFilterState {}

class ShopFilter extends React.Component<IShopFilterProps, IShopFilterState> {
  render() {
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <ShopSortBy />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-6">
            <ShopViewCategory />
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-4 col-lg-8 offset-md-4 col-md-8 col-sm-12">
            <CategoryBooks />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopFilter;
