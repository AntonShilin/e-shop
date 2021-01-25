import {
  applyDefaultPriceTypes,
  filterByPriceOnTypes,
  filterByPriceStateActions,
  filterEnableTypes,
  getMaxPriceTypes,
  getMinPriceTypes,
  IFilterByPriceState,
} from "../Types/FilterByPriceTypes";

const filterByPriceState: IFilterByPriceState = {
  minPrice: 0,
  maxPrice: 1000,
  filterByPriceOn: {
    min: 0,
    max: 1000
  },
  filterName: "price",
  filterEnable: false,
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
      
    case filterByPriceOnTypes.FILTERBYPRICEON: {
      return {
        ...state,
        filterByPriceOn:  {
          min: action.filterByPriceOn.min,
          max: action.filterByPriceOn.max,
        },
      };
    }
      
    case filterEnableTypes.FILTERENABLE: {
      return {
        ...state,
       filterEnable:action.condition
      };
    }
      
    case applyDefaultPriceTypes.APPLYDEFAULTPRICE: {
      return {
        ...state,
        maxPrice: 1000,
        minPrice: 0,
        filterByPriceOn: {
          max: 1000,
          min: 0
       }
      };
    }

    default:
      return state;
  }
};
