import {
  IMainState,
  MainStateActions,
  GetDataResultsTypes,
} from "../Types/MainStateTypes";

const mainState: IMainState = {
  fable:  null,
  isLoading: false,
  genres: ["fable"],
};

export const mainStateReducer = (
  state: IMainState = mainState,
  action: MainStateActions
): IMainState => {
  switch (action.type) {
    case GetDataResultsTypes.GETDATARESULTS: {
      return {
        ...state,
          fable: action.results
      };
    }

    default:
      return state;
  }
};
