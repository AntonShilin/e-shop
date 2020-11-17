import {
  hiddenContainerTypes,
  IShopState,
  isOpenShopTypes,
  shopStateActions,
} from "../Types/ShopTypes";

const shopState: IShopState = {
  isShopOpen: false,
  isHiddenContainer: true,
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

    case hiddenContainerTypes.HIDDENCONTAINER: {
      return {
        ...state,
        isHiddenContainer: action.value,
      };
    }

    default:
      return state;
  }
};
