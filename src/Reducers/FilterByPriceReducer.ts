import {
  filterByPriceStateActions,
  getMaxPriceTypes,
  getMinPriceTypes,
  IFilterByPriceState,
} from "../Types/FilterByPriceTypes";

const filterByPriceState: IFilterByPriceState = {
  minPrice: 0,
  maxPrice: 1000,
};

export const filterByPriceReducer = (
  state: IFilterByPriceState = filterByPriceState,
  action: filterByPriceStateActions
): IFilterByPriceState => {
  switch (action.type) {
    case getMinPriceTypes.GETMINPRICE: {
      return {
        ...state,
        minPrice: action.min,
      };
    }

    case getMaxPriceTypes.GETMAXPRICE: {
      return {
        ...state,
        maxPrice: action.max,
      };
    }

    default:
      return state;
  }
};
