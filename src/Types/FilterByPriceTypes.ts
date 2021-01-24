export enum getMinPriceTypes {
  GETMINPRICE = "GETMINPRICE",
}

export enum getMaxPriceTypes {
  GETMAXPRICE = "GETMAXPRICE",
}

export enum filterByPriceOnTypes {
  FILTERBYPRICEON = "FILTERBYPRICEON",
}

/* interfaces */

export interface IFilterByPriceOnAction {
  type: filterByPriceOnTypes.FILTERBYPRICEON;
  filterByPriceOn: {
    min: number;
    max: number;
  };
}

export interface IGetMinPriceAction {
  type: getMinPriceTypes.GETMINPRICE;
  min: number;
}

export interface IGetMaxPriceAction {
  type: getMaxPriceTypes.GETMAXPRICE;
  max: number;
}

export type filterByPriceStateActions =
  | IFilterByPriceOnAction
  | IGetMinPriceAction
  | IGetMaxPriceAction;

export interface IFilterByPriceState {
  minPrice: number;
  maxPrice: number;
  filterByPriceOn: {
    min: number;
    max: number;
  };
}
