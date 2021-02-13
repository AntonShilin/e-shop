import {
  addToCartTypes,
  deleteFromCartTypes,
  IAddToCartAction,
} from "../Types/CartTypes";

/* add book to cart */
export const addBookToCart = (...arg: any[]): IAddToCartAction => {
 
  return {
    type: addToCartTypes.ADDTOCART,
    book: {
      url:arg[0],
      shopName:arg[1],
      title:arg[2],
      price:arg[3],
      pageCount:arg[4],
      publishedDate:arg[5],
      quantityToPurchase: arg[6],
      totalPrice: arg[7],
      id:arg[8]
    },
  };
};

/* delete selet book from cart */
export const deleteBookFromCart = (id: string) => {
  return {
    type: deleteFromCartTypes.DELETEFROMCART,
    id
  }
}