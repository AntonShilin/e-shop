import {
  IMainState,
  MainStateActions,
  GetFableResultsTypes,
  GetBiographyResultsTypes,
} from "../Types/MainStateTypes";

const mainState: IMainState = {
  fable:  null,
  biography:  null,
  isLoading: false,
};

export const mainStateReducer = (
  state: IMainState = mainState,
  action: MainStateActions
): IMainState => {
  switch (action.type) {
    case GetFableResultsTypes.GETFABLERESULTS: {
      return {
        ...state,
          fable: action.results
      };
    }
      
    case GetBiographyResultsTypes.GETBIOGRAPHYRESULTS: {
      return {
        ...state,
        biography: action.results
      };
    }

    default:
      return state;
  }
};
