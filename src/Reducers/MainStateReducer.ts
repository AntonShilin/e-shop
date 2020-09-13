import { IMainState, MainStateActions, GetDataResultsTypes } from "../Types/MainStateTypes";

  
  const mainState: IMainState = {
      data: null,
      isLoading: false,
      genres:["fairy tales"]
  };
  
  export const mainStateReducer = (
    state: IMainState = mainState,
    action: MainStateActions
  ) => {
    switch (action.type) {
        case GetDataResultsTypes.GETDATARESULTS: {
            return {
              ...state,
              data: action.results,
            };
          }
            
      default:
        return state;
    }
  };
  