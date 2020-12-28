import {
    getMaxPriceTypes,
  getMinPriceTypes,
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
