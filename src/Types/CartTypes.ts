export enum addToCartTypes {
  ADDTOCART = "ADDTOCART",
}

export enum deleteFromCartTypes {
  DELETEFROMCART = "DELETEFROMCART",
}

/* interfaces */

export interface IDeleteFromCartAction {
  type: deleteFromCartTypes.DELETEFROMCART;
  id: string;
}

export interface IAddToCartAction {
  type: addToCartTypes.ADDTOCART;
  book: IBookInfo;
}

export type cartActions = IDeleteFromCartAction | IAddToCartAction;

export interface ICartState {
  cart: IBookInfo[];
}

export interface IBookInfo {
  url: string;
  shopName: string;
  title: string;
  price: string;
  pageCount: number;
  publishedDate: string;
  quantityToPurchase: string;
  totalPrice: string;
  id: string;
}
