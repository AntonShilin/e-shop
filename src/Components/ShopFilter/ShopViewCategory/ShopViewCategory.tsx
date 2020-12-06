import * as React from "react";
import cw from "./ShopViewCategory.module.scss";

export interface IShopViewCategoryProps {}

export interface State {}

class ShopViewCategory extends React.Component<IShopViewCategoryProps, State> {
  render() {
    return (
      <div className={`row ${cw.category_title}`}>
        <div className="col" />
      </div>
    );
  }
}



export default ShopViewCategory;
