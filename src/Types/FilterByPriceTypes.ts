export enum getMinPriceTypes {
  GETMINPRICE = "GETMINPRICE",
}

export enum getMaxPriceTypes {
  GETMAXPRICE = "GETMAXPRICE",
}

/* interfaces */

export interface IGetMinPriceAction {
  type: getMinPriceTypes.GETMINPRICE;
  min: number;
}

export interface IGetMaxPriceAction {
  type: getMaxPriceTypes.GETMAXPRICE;
  max: number;
}

export type filterByPriceStateActions = IGetMinPriceAction | IGetMaxPriceAction;

export interface IFilterByPriceState {
  minPrice: number;
  maxPrice: number;
}
