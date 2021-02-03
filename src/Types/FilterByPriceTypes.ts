export enum getMinPriceTypes {
  GETMINPRICE = "GETMINPRICE",
}

export enum getMaxPriceTypes {
  GETMAXPRICE = "GETMAXPRICE",
}

export enum filterByPriceOnTypes {
  FILTERBYPRICEON = "FILTERBYPRICEON",
}

export enum filterEnableTypes {
  FILTERENABLE = "FILTERENABLE",
}

export enum applyDefaultPriceTypes {
  APPLYDEFAULTPRICE = "APPLYDEFAULTPRICE",
}

/* interfaces */

export interface IApplyDefaultPriceAction {
  type: applyDefaultPriceTypes.APPLYDEFAULTPRICE
}

export interface IFilterEnableAction {
  type: filterEnableTypes.FILTERENABLE
  condition: boolean;
}

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
  |IApplyDefaultPriceAction
  |IFilterEnableAction
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
  filterName: string;
  filterPriceEnable: boolean;
}
