import * as React from "react";
import CategoryBooksWithFilter from "../../CategoryBooksWithFilter/CategoryBooksWithFilter";
import ShopAll from "../../ShopAll/ShopAll";
import ShopSortByLargeScreen from "../../ShopFilter/LargeScreen/ShopSortByLargeScreen/ShopSortByLargeScreen";
import ShopSortBy from "../../ShopFilter/ShopSortBySmallScreen/ShopSortBySmallScreen";
import ShopViewCategory from "../../ShopFilter/ShopViewCategory/ShopViewCategory";
import sfp from "./ShopWithFilterPage.module.scss";

export interface Props {}

export interface State {}

class ShopWithFilterPage extends React.Component<Props, State> {
  render() {
    return (
      <>
        <ShopAll />
        <div className={`container-xl ${sfp.shop_filter_bg}`}>
          <div className={`row ${sfp.filter_large_screen}`}>
            <div className="col-4">
              <ShopSortByLargeScreen />
            </div>
            <div className="col-8">
              <ShopViewCategory />
              <CategoryBooksWithFilter />
            </div>
          </div>
          <div className={`row ${sfp.filter_small_screen}`}>
            <div className="col-12">
              <ShopSortBy />
            </div>
            <div className="col-12">
              <CategoryBooksWithFilter />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopWithFilterPage;
