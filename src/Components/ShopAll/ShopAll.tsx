import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";
import ShopFilter from "../ShopFilter/ShopFilter";
import shop from "./ShopAll.module.scss";

export interface IShopAllProps {
  isShopOpen: boolean;
  shopName: string;
}

export interface State {}

class ShopAll extends React.Component<IShopAllProps, State> {
  render() {
    const { isShopOpen, shopName } = this.props;
    return (
      isShopOpen && (
        <>
          <div className={`container-xl ${shop.shop_container_bg}`}>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <h1>Shop {shopName}</h1>
              </div>
              <div className="col-lg-8 col-md-8">
                <img
                  src={require(`../../Media/Images/${shopName}.png`)}
                  alt={shopName}
                />
              </div>
            </div>
          </div>
          <ShopFilter />
        </>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isShopOpen: state.shopContainer.isShopOpen,
  shopName: state.shopContainer.shopName,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopAll);
