

export enum addYearToFilterTypes {
  ADDYEARTOFILTER = "ADDYEARTOFILTER",
}

export enum deleteYearFromFilterTypes {
  DELETEYEARFROMFILTER = "DELETEYEARFROMFILTER",
}

/* interfaces */
export interface IDeleteYearFromFilterAction {
  type: deleteYearFromFilterTypes.DELETEYEARFROMFILTER
  year: number;
}

export interface IAddYearToFilterAction {
  type: addYearToFilterTypes.ADDYEARTOFILTER;
  year: number;
}


export type filterByYearStateActions =
  | IDeleteYearFromFilterAction
  | IAddYearToFilterAction;

export interface IFilterByYearState {
  checkedYears: number[];
  filterName: string;
}


