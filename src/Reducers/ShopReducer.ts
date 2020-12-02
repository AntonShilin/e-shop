import {
  FilterByValueTypes,
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
  filterByName: false,
  filterByPrice: false,
  filterByNewest: false,
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

    case FilterByValueTypes.FILTERBYVALUE: {
      if (action.name === "name") {
        return {
          ...state,
          filterByName: true,
          filterByNewest: false,
          filterByPrice: false,
        };
      } else if (action.name === "price") {
        return {
          ...state,
          filterByName: false,
          filterByNewest: false,
          filterByPrice: true,
        };
      } else if (action.name === "newest") {
        return {
          ...state,
          filterByName: false,
          filterByNewest: true,
          filterByPrice: false,
        };
      }
    }

    default:
      return state;
  }
};
