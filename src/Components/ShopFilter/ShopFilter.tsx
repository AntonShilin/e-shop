import * as React from "react";
import ShopViewCategory from "./ShopViewCategory/ShopViewCategory";

export interface IShopFilterProps {}

export interface IShopFilterState {}

class ShopFilter extends React.Component<IShopFilterProps, IShopFilterState> {
  render() {
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div>
              <span>Filter</span>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <ShopViewCategory />
          </div>
        </div>
      </div>
    );
  }
}



export default ShopFilter;
