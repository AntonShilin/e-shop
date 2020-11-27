import {
  hiddenContainerTypes,
  isCloseShopTypes,
  IShopState,
  isOpenShopTypes,
  shopNameTypes,
  shopStateActions,
  showContainerTypes,
} from "../Types/ShopTypes";

const shopState: IShopState = {
  isShopOpen: false,
  isHiddenContainer: true,
  shopName: "",
};

export const shopReducer = (
  state: IShopState = shopState,
  action: shopStateActions
): IShopState => {
  switch (action.type) {
    case isOpenShopTypes.ISOPENSHOP: {
      return {
        ...state,
        isShopOpen: action.value,
      };
    }

    case isCloseShopTypes.ISCLOSESHOP: {
      return {
        ...state,
        isShopOpen: action.value,
      };
    }

    case hiddenContainerTypes.HIDDENCONTAINER: {
      return {
        ...state,
        isHiddenContainer: action.value,
      };
    }

    case showContainerTypes.SHOWCONTAINER: {
      return {
        ...state,
        isHiddenContainer: action.value,
      };
    }

    case shopNameTypes.SHOPNAME: {
      return {
        ...state,
        shopName: action.name,
      };
    }

    default:
      return state;
  }
};
