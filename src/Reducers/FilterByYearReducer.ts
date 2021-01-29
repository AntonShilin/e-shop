import {
  addYearToFilterTypes,
  deleteYearFromFilterTypes,
  filterByYearStateActions,
  IFilterByYearState,
} from "../Types/FilterByYearTypes";

const filterByYearState: IFilterByYearState = {
  checkedYears: [],
  filterName: "year",
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

    default:
      return state;
  }
};
