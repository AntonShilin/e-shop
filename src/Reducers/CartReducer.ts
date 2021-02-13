import {
  addToCartTypes,
  cartActions,
  deleteFromCartTypes,
  ICartState,
} from "../Types/CartTypes";

const cartState: ICartState = {
  cart: [],
};

export const cartReducer = (
  state: ICartState = cartState,
  action: cartActions
): ICartState => {
  switch (action.type) {
    case addToCartTypes.ADDTOCART: {
      return {
        ...state,
        cart: [...state.cart, action.book],
      };
    }

    case deleteFromCartTypes.DELETEFROMCART: {
      return {
        ...state,
        cart: [...state.cart].filter((n) => n.id !== action.id),
      };
    }

    default:
      return state;
  }
};
