import {
  applyDefaultPriceTypes,
  filterByPriceOnTypes,
  filterEnableTypes,
  getMaxPriceTypes,
  getMinPriceTypes,
  IApplyDefaultPriceAction,
  IFilterByPriceOnAction,
  IFilterEnableAction,
  IGetMaxPriceAction,
  IGetMinPriceAction,
} from "../Types/FilterByPriceTypes";

/* get min price */
export const getMinPrice = (num: number): IGetMinPriceAction => ({
  type: getMinPriceTypes.GETMINPRICE,
  min: num,
});

/* get max price */
export const getMaxPrice = (num: number): IGetMaxPriceAction => ({
  type: getMaxPriceTypes.GETMAXPRICE,
  max: num,
});

/* get max  & min price from input*/
export const enableFilterByPrice = (
  min: number,
  max: number
): IFilterByPriceOnAction => ({
  type: filterByPriceOnTypes.FILTERBYPRICEON,
  filterByPriceOn: {
    min,
    max,
  },
});

/* toggle filter on\off */
export const toggleEnableFilter = (value:boolean): IFilterEnableAction => ({
  type: filterEnableTypes.FILTERENABLE,
  condition: value
});

/* apply default price */
export const applyDefaultPrice = (): IApplyDefaultPriceAction => ({
  type: applyDefaultPriceTypes.APPLYDEFAULTPRICE
});