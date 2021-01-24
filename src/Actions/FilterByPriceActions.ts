import {
  filterByPriceOnTypes,
  getMaxPriceTypes,
  getMinPriceTypes,
  IFilterByPriceOnAction,
  IGetMaxPriceAction,
  IGetMinPriceAction,
} from "../Types/FilterByPriceTypes";

/* get min price */
export const getMinPrice = (num: number): IGetMinPriceAction => ({
  type: getMinPriceTypes.GETMINPRICE,
  min: num,
});

/* get miax price */
export const getMaxPrice = (num: number): IGetMaxPriceAction => ({
  type: getMaxPriceTypes.GETMAXPRICE,
  max: num,
});

/* on/off filter by price */
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
