import {
  addYearToFilterTypes,
  deleteYearFromFilterTypes,
  IAddYearToFilterAction,
  IDeleteYearFromFilterAction,
} from "../Types/FilterByYearTypes";



/* add year to filter */
export const addYearToFilter = (
  value: number
): IAddYearToFilterAction => ({
  type: addYearToFilterTypes.ADDYEARTOFILTER,
  year:value
});


/* delete year from filter */
export const deleteYearFromFilter = (
  value: number
): IDeleteYearFromFilterAction => ({
  type: deleteYearFromFilterTypes.DELETEYEARFROMFILTER,
  year:value
});
