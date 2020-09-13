import { Dispatch } from "redux";
import { GetDataResultsTypes, ILoadingAction, isLoadingTypes } from "../Types/MainStateTypes";

export const getData = () => {
    return (dispatch: Dispatch) => {
      dispatch(waitingFewMinutes());
      fetch("https://www.googleapis.com/books/v1/volumes?q=fairytales&filter=free-ebooks&key=AIzaSyDYD8Tc3uRUciTMoIjiVfmdJuM2dAuHqOA")
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: GetDataResultsTypes.GETDATARESULTS,
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
  
 