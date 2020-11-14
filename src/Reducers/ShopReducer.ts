import {
    IShopState, isOpenShopTypes, shopStateActions,
  } from "../Types/ShopTypes";
  
  const shopState: IShopState = {
    isShopOpen: false,
  };
  
  export const shopReducer = (
    state: IShopState = shopState,
    action: shopStateActions
  ):IShopState => {
    switch (action.type) {
      case isOpenShopTypes.ISOPENSHOP: {
        return {
          ...state,
          isShopOpen: action.value,
        };
      }
  
 
      default:
        return state;
    }
  };
  