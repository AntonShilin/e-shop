import * as React from "react";
import CategoryBooks from "./CategoryBooks/CategoryBooks";
import ShopViewCategory from "./ShopViewCategory/ShopViewCategory";
import sf from "./ShopFilter.module.scss";
import ShopSortByLargeScreen from "./LargeScreen/ShopSortByLargeScreen/ShopSortByLargeScreen";
import ShopSortBy from "./ShopSortBy/ShopSortBy";

export interface IShopFilterProps {}

export interface IShopFilterState {}

class ShopFilter extends React.Component<IShopFilterProps, IShopFilterState> {
  render() {
    return (
      <div className={`container-xl ${sf.shop_filter_bg}`}>
        <div className={`row ${sf.filter_large_screen}`}>
          <div className="col-4">
            <ShopSortByLargeScreen />
          </div>
          <div className="col-8">
            <ShopViewCategory />
            <CategoryBooks />
          </div>
        </div>
        <div className={`row ${sf.filter_small_screen}`}>
          <div className="col-12">
            <ShopSortBy />
          </div>
          <div className="col-12">
            <CategoryBooks />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopFilter;
