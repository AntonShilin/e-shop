import {
  GetFableResultsTypes,
  ILoadingAction,
  isLoadingTypes,
  GetBiographyResultsTypes,
  IGetFableResultsAction,
  IGetBiographyResultsAction,
  IGetStoryResultsAction,
  GetStoryResultsTypes,
  IGetBestsellersResultsAction,
  GetBestsellersResultsTypes,
  GetFictionResultsTypes,
  IGetFictionResultsAction,
  IGetArtResultsAction,
  GetArtResultsTypes,
  IGetLifestyleResultsAction,
  GetLifestyleResultsTypes,
} from "../Types/MainStateTypes";

export const getFableBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetFableResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=fairytales&filter=paid-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
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
      "https://www.googleapis.com/books/v1/volumes?q=biography&filter=paid-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
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

export const getStoryBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetStoryResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=story&filter=paid-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
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
          type: GetStoryResultsTypes.GETSTORYRESULTS,
          results: data,
        })
      );
  };
};

export const getBestSellersBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetBestsellersResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=bestsellers&filter=paid-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
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
          type: GetBestsellersResultsTypes.GETBESTSELLERSRESULTS,
          results: data,
        })
      );
  };
};

export const getFictionBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetFictionResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=fiction&filter=paid-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
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
          type: GetFictionResultsTypes.GETFICTIONRESULTS,
          results: data,
        })
      );
  };
};


export const getArtBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetArtResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=art&filter=paid-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
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
          type: GetArtResultsTypes.GETARTRESULTS,
          results: data,
        })
      );
  };
};


export const getLifestyleBooks = () => {
  return (dispatch: (arg0: ILoadingAction|IGetLifestyleResultsAction) => void) => {
    dispatch(waitingFewMinutes());
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=lifestyle&filter=paid-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA"
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
          type: GetLifestyleResultsTypes.GETLIFESTYLERESULTS,
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
