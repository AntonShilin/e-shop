import { addToCartTypes, cartActions, ICartState } from "../Types/CartTypes";

  
  const cartState: ICartState = {
      cart: []
  };
  
  export const cartReducer = (
    state: ICartState = cartState,
    action: cartActions
  ): ICartState => {

    switch (action.type) {
      case addToCartTypes.ADDTOCART: {
        return {
            ...state,
            cart:[...state.cart,action.book]
        };
      }

  
      default:
        return state;
    }
  };