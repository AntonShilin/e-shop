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
  results: null;
}

export interface IGetFableResultsAction {
  type: GetFableResultsTypes.GETFABLERESULTS;
  results: null;
}

export type MainStateActions =
| IGetBiographyResultsAction
  | IGetFableResultsAction
  | ILoadingAction;

export interface IMainState {
  fable: any | null;
  biography: any | null;
  isLoading: boolean;
}
