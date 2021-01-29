import * as React from "react";
import CategoryBooksWithFilterByYear from "../../CategoryBooksWithFilterByYear/CategoryBooksWithFilterByYear";
import ShopAll from "../../ShopAll/ShopAll";
import ShopSortByLargeScreen from "../../ShopFilter/LargeScreen/ShopSortByLargeScreen/ShopSortByLargeScreen";
import ShopSortBy from "../../ShopFilter/ShopSortBySmallScreen/ShopSortBySmallScreen";
import ShopViewCategory from "../../ShopFilter/ShopViewCategory/ShopViewCategory";
import sfby from "./ShopWithFilterByYear.module.scss";

export interface Props {}

export interface State {}

class ShopWithFilterByYear extends React.Component<Props, State> {
  render() {
    return (
      <>
        <ShopAll />
        <div className={`container-xl ${sfby.shop_filter_bg}`}>
          <div className={`row ${sfby.filter_large_screen}`}>
            <div className="col-4">
              <ShopSortByLargeScreen />
            </div>
            <div className="col-8">
              <ShopViewCategory />
              <CategoryBooksWithFilterByYear />
            </div>
          </div>
          <div className={`row ${sfby.filter_small_screen}`}>
            <div className="col-12">
              <ShopSortBy />
            </div>
            <div className="col-12">
              <CategoryBooksWithFilterByYear />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopWithFilterByYear;
