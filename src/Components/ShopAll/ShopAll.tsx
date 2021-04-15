import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";
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
      <>
        <div className={`container-xl ${shop.shop_container_bg}`}>
          <div className="row">
            <div className={`col-4 ${shop.shop_name}`}>
              <h1>
                Shop
                <span>
                  {shopName.trim().length > 0 ? shopName : "fairytales"}
                </span>
              </h1>
            </div>
            <div className={`col-8 ${shop.shop_image}`}>
              {shopName.trim().length > 0 ? (
                <img
                  src={require(`../../Media/Images/${shopName}.png`)}
                  alt={shopName}
                />
              ) : (
                <img
                  src={require(`../../Media/Images/fairytales.png`)}
                  alt={shopName}
                />
              )}
            </div>
          </div>
        </div>
      </>
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
