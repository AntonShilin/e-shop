export enum GetFableResultsTypes {
  GETFABLERESULTS = "GETFABLERESULTS",
}

export enum GetBiographyResultsTypes {
  GETBIOGRAPHYRESULTS = "GETBIOGRAPHYRESULTS",
}

export enum GetStoryResultsTypes {
  GETSTORYRESULTS = "GETSTORYRESULTS",
}

export enum GetBestsellersResultsTypes {
  GETBESTSELLERSRESULTS = "GETBESTSELLERSRESULTS",
}

export enum GetFictionResultsTypes {
  GETFICTIONRESULTS = "GETFICTIONRESULTS",
}

export enum GetArtResultsTypes {
  GETARTRESULTS = "GETARTRESULTS",
}

export enum GetLifestyleResultsTypes {
  GETLIFESTYLERESULTS = "GETLIFESTYLERESULTS",
}

export enum isLoadingTypes {
  LOADING = "LOADING",
}

/* interfaces */
export interface IGetLifestyleResultsAction {
  type: GetLifestyleResultsTypes.GETLIFESTYLERESULTS;
  results: null | any;
}

export interface IGetArtResultsAction {
  type: GetArtResultsTypes.GETARTRESULTS;
  results: null | any;
}

export interface IGetFictionResultsAction {
  type: GetFictionResultsTypes.GETFICTIONRESULTS;
  results: null | any;
}

export interface IGetBestsellersResultsAction {
  type: GetBestsellersResultsTypes.GETBESTSELLERSRESULTS;
  results: null | any;
}

export interface IGetStoryResultsAction {
  type: GetStoryResultsTypes.GETSTORYRESULTS;
  results: null | any;
}

export interface IGetBiographyResultsAction {
  type: GetBiographyResultsTypes.GETBIOGRAPHYRESULTS;
  results: null | any;
}

export interface IGetFableResultsAction {
  type: GetFableResultsTypes.GETFABLERESULTS;
  results: null | any;
}

export interface ILoadingAction {
  type: isLoadingTypes.LOADING;
}

export type MainStateActions =
  |IGetLifestyleResultsAction
  |IGetArtResultsAction
  |IGetFictionResultsAction
  |IGetBestsellersResultsAction
|IGetStoryResultsAction
  | IGetBiographyResultsAction
  | IGetFableResultsAction
  | ILoadingAction;

export interface IMainState {
  allGenresData: any[];
  isLoading: boolean;
  genresName: string[];
}
