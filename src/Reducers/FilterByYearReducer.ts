import {
  addYearToFilterTypes,
  deleteAllYearFromFilterTypes,
  deleteYearFromFilterTypes,
  filterByYearStateActions,
  filterYearEnableOffTypes,
  filterYearEnableTypes,
  IFilterByYearState,
} from "../Types/FilterByYearTypes";

const filterByYearState: IFilterByYearState = {
  checkedYears: [],
  filterName: "year",
  filterYearEnable: false,
};

export const filterByYearReducer = (
  state: IFilterByYearState = filterByYearState,
  action: filterByYearStateActions
): IFilterByYearState => {
  switch (action.type) {
    case addYearToFilterTypes.ADDYEARTOFILTER: {
      return {
        ...state,
        checkedYears: [...state.checkedYears, action.year],
      };
    }

    case deleteYearFromFilterTypes.DELETEYEARFROMFILTER: {
      let newCheckedYears = [...state.checkedYears];
      newCheckedYears = newCheckedYears.filter((item) => {
        return item !== action.year;
      });

      return {
        ...state,
        checkedYears: newCheckedYears,
      };
    }

    case filterYearEnableTypes.FILTERYEARENABLE: {
      return {
        ...state,
        filterYearEnable: action.condition,
      };
    }
      
    case filterYearEnableOffTypes.FILTERYEARENABLEOFF: {
      return {
        ...state,
        filterYearEnable: action.condition,
      };
    }
      
    case deleteAllYearFromFilterTypes.DELETEALLYEARFROMFILTER: {
      return {
        ...state,
        checkedYears: action.unCheckedYears,
      };
    }

    default:
      return state;
  }
};
