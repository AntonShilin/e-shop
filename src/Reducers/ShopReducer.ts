import {
  FilterByValueTypes,
  hiddenContainerTypes,
  isCloseShopTypes,
  IShopState,
  isOpenShopTypes,
  ShopIDTypes,
  shopNameTypes,
  shopStateActions,
  showContainerTypes,
  ViewBookIdTypes,
} from "../Types/ShopTypes";

const shopState: IShopState = {
  isShopOpen: false,
  isHiddenContainer: true,
  shopName: "",
  filterByValue: "name",
  shopID: 0,
  viewBookID:""
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
        return {
          ...state,
          filterByValue: action.name,
        };
    }
      
    case ShopIDTypes.SHOPID: {
        return {
          ...state,
          shopID: action.id,
        };
    }
      
    case ViewBookIdTypes.VIEWBOOKID: {
        return {
          ...state,
          viewBookID: action.id,
        };
    }

    default:
      return state;
  }
};
