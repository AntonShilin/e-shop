import * as React from "react";
import CategoryBooksWithFilterByPriceAndYear from "../../CategoryBooksWithFilterByPriceAndYear/CategoryBooksWithFilterByPriceAndYear";
import ShopAll from "../../ShopAll/ShopAll";
import ShopSortByLargeScreen from "../../ShopFilter/LargeScreen/ShopSortByLargeScreen/ShopSortByLargeScreen";
import ShopSortBy from "../../ShopFilter/ShopSortBySmallScreen/ShopSortBySmallScreen";
import ShopViewCategory from "../../ShopFilter/ShopViewCategory/ShopViewCategory";
import sfbpae from "./ShopWithFilterByPriceAndYear.module.scss";

export interface Props {}

export interface State {}

class ShopWithFilterByPriceAndYear extends React.Component<Props, State> {
  render() {
    return (
      <>
        <ShopAll />
        <div className={`container-xl ${sfbpae.shop_filter_bg}`}>
          <div className={`row ${sfbpae.filter_large_screen}`}>
            <div className="col-4">
              <ShopSortByLargeScreen />
            </div>
            <div className="col-8">
              <ShopViewCategory />
              <CategoryBooksWithFilterByPriceAndYear />
            </div>
          </div>
          <div className={`row ${sfbpae.filter_small_screen}`}>
            <div className="col-12">
              <ShopSortBy />
            </div>
            <div className="col-12">
              <CategoryBooksWithFilterByPriceAndYear />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopWithFilterByPriceAndYear;
