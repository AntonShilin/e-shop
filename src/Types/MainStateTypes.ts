export enum GetDataResultsTypes {
  GETDATARESULTS = "GETDATARESULTS",
}

export enum isLoadingTypes {
  LOADING = "LOADING",
}

/* interfaces */

export interface ILoadingAction {
  type: isLoadingTypes.LOADING;
}

export interface IGetDataResultsAction {
  type: GetDataResultsTypes.GETDATARESULTS;
  results: null;
}

export type MainStateActions = IGetDataResultsAction | ILoadingAction;

export interface IMainState {
    fable: any | null;
  isLoading: boolean;
  genres: string[];
}
