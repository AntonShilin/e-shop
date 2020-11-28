import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import CategoryBooks from "../CategoryBooks/CategoryBooks";
import SelectBox from "../SelectBox/SelectBox";
import cw from "./ShopViewCategory.module.scss";

export interface IShopViewCategoryProps {
}

export interface State {}

class ShopViewCategory extends React.Component<IShopViewCategoryProps, State> {
  render() {
    return (
      <div className={`row ${cw.category_title}`}>
        <div className="col-lg-12 col-md-12 d-lg-block d-md-block d-sm-none">
          empty 
        </div>
        <div className="col-sm-12 d-lg-none d-md-none d-sm-block">
          <SelectBox />
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopViewCategory);
