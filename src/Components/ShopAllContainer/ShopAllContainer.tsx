import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";
import shop from "./ShopAllContainer.module.scss";

export interface IShopAllContainerProps {
    isShopOpen: boolean;
}

export interface State {}

class ShopAllContainer extends React.Component<IShopAllContainerProps, State> {
  render() {
    const { isShopOpen } = this.props;
    return (
        isShopOpen && (
            <div className={`container-xl ${shop.shop_container_bg}`}>
          <div className="row">
            <div className="col">ShopContainer</div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
    isShopOpen: state.shopContainer.isShopOpen,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopAllContainer);
