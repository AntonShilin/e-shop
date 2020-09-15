export enum GetFableResultsTypes {
  GETFABLERESULTS = "GETFABLERESULTS",
}
export enum GetBiographyResultsTypes {
  GETBIOGRAPHYRESULTS = "GETBIOGRAPHYRESULTS",
}

export enum isLoadingTypes {
  LOADING = "LOADING",
}

/* interfaces */

export interface ILoadingAction {
  type: isLoadingTypes.LOADING;
}

export interface IGetBiographyResultsAction {
  type: GetBiographyResultsTypes.GETBIOGRAPHYRESULTS;
  results: null | any;
}

export interface IGetFableResultsAction {
  type: GetFableResultsTypes.GETFABLERESULTS;
  results: null | any;
}

export type MainStateActions =
  | IGetBiographyResultsAction
  | IGetFableResultsAction
  | ILoadingAction;

export interface IMainState {
  allGenresData: any[];
  fable: null | any;
  biography: null | any;
  isLoading: boolean;
  genresName:string[]
}
