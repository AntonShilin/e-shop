import {
  addToCartTypes,
  deleteFromCartTypes,
  IAddToCartAction,
} from "../Types/CartTypes";

/* add book to cart */
export const addBookToCart = (book: any): IAddToCartAction => {
  return {
    type: addToCartTypes.ADDTOCART,
    book,
  };
};

/* delete selet book from cart */
export const deleteBookFromCart = (id: string) => {
  return {
    type: deleteFromCartTypes.DELETEFROMCART,
    id,
  };
};
