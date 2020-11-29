import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import cw from "./ShopViewCategory.module.scss";

export interface IShopViewCategoryProps {}

export interface State {}

class ShopViewCategory extends React.Component<IShopViewCategoryProps, State> {
  render() {
    return (
      <div className={`row ${cw.category_title}`}>
        <div className="col"/>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopViewCategory);
