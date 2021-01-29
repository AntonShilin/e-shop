import * as React from "react";
import ClearFilter from "../../ClearFilter/ClearFilter";
import cw from "./ShopViewCategory.module.scss";

export interface IShopViewCategoryProps {}

export interface State {}

class ShopViewCategory extends React.Component<IShopViewCategoryProps, State> {
  render() {
    return (
      <div className={`row ${cw.category_title}`}>
        <div className="col">
          <ClearFilter />
        </div>
      </div>
    );
  }
}

export default ShopViewCategory;
