import {
  GetFableResultsTypes,
  ILoadingAction,
  isLoadingTypes,
  GetBiographyResultsTypes,
  IGetFableResultsAction,
  IGetBiographyResultsAction,
} from "../Types/MainStateTypes";

export const getFableBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetFableResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=fairytales&filter=free-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GetFableResultsTypes.GETFABLERESULTS,
          results: data,
        })
      );
  };
};

export const getBiographyBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetBiographyResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=country&filter=free-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GetBiographyResultsTypes.GETBIOGRAPHYRESULTS,
          results: data,
        })
      );
  };
};



/* preload page */
const waitingFewMinutes = (): ILoadingAction => {
  return {
    type: isLoadingTypes.LOADING,
  };
};
