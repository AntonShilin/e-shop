

export enum addYearToFilterTypes {
  ADDYEARTOFILTER = "ADDYEARTOFILTER",
}

export enum deleteYearFromFilterTypes {
  DELETEYEARFROMFILTER = "DELETEYEARFROMFILTER",
}

export enum filterYearEnableTypes {
  FILTERYEARENABLE = "FILTERYEARENABLE",
}

export enum filterYearEnableOffTypes {
  FILTERYEARENABLEOFF = "FILTERYEARENABLEOFF",
}

export enum deleteAllYearFromFilterTypes  {
  DELETEALLYEARFROMFILTER = "DELETEALLYEARFROMFILTER",
}


/* interfaces */
export interface IDeleteAllYearFromFilterAction {
  type: deleteAllYearFromFilterTypes.DELETEALLYEARFROMFILTER
  unCheckedYears: number[];
}

export interface IDeleteYearFromFilterAction {
  type: deleteYearFromFilterTypes.DELETEYEARFROMFILTER
  year: number;
}

export interface IFilterYearEnableAction {
  type: filterYearEnableTypes.FILTERYEARENABLE
  condition: boolean;
}

export interface IFilterYearEnableOffAction {
  type: filterYearEnableOffTypes.FILTERYEARENABLEOFF
  condition: boolean;
}

export interface IAddYearToFilterAction {
  type: addYearToFilterTypes.ADDYEARTOFILTER;
  year: number;
}


export type filterByYearStateActions =
  |IDeleteAllYearFromFilterAction
  |IFilterYearEnableOffAction
  |IFilterYearEnableAction
  | IDeleteYearFromFilterAction
  | IAddYearToFilterAction;

export interface IFilterByYearState {
  checkedYears: number[];
  filterName: string;
  filterYearEnable: boolean;
}


