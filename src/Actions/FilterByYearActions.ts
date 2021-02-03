import {
  addYearToFilterTypes,
  deleteAllYearFromFilterTypes,
  deleteYearFromFilterTypes,
  filterYearEnableOffTypes,
  filterYearEnableTypes,
  IAddYearToFilterAction,
  IDeleteAllYearFromFilterAction,
  IDeleteYearFromFilterAction,
  IFilterYearEnableAction,
  IFilterYearEnableOffAction,
} from "../Types/FilterByYearTypes";



/* add year to filter */
export const addYearToFilter = (
  value: number
): IAddYearToFilterAction => ({
  type: addYearToFilterTypes.ADDYEARTOFILTER,
  year:value
});


/* delete selected year from checked array */
export const deleteYearFromFilter = (
  value: number
): IDeleteYearFromFilterAction => ({
  type: deleteYearFromFilterTypes.DELETEYEARFROMFILTER,
  year:value
});


/* year filter on */
export const onYearEnableFilter = (value:boolean): IFilterYearEnableAction => ({
  type: filterYearEnableTypes.FILTERYEARENABLE,
  condition: value
});

/* year filter off */
export const offYearEnableFilter = (value:boolean): IFilterYearEnableOffAction => ({
  type: filterYearEnableOffTypes.FILTERYEARENABLEOFF,
  condition: value
});

/* deletet all year from cheked array */
export const deleteAllYearFromFilter = (
): IDeleteAllYearFromFilterAction => ({
  type: deleteAllYearFromFilterTypes.DELETEALLYEARFROMFILTER,
  unCheckedYears: []
});