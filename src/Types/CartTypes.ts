export enum addToCartTypes {
  ADDTOCART = "ADDTOCART",
}

/* interfaces */

export interface IAddToCartAction {
  type: addToCartTypes.ADDTOCART;
  book: IBookInfo;
}

export type cartActions = IAddToCartAction;


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
}