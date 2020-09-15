import {
  IMainState,
  MainStateActions,
  GetFableResultsTypes,
  GetBiographyResultsTypes,
} from "../Types/MainStateTypes";

const mainState: IMainState = {
  allGenresData:[],
  fable: null,
  biography: null,
  isLoading: false,
  genresName:["fable","biography"]
};

export const mainStateReducer = (
  state: IMainState = mainState,
  action: MainStateActions
): IMainState => {
  switch (action.type) {
    case GetFableResultsTypes.GETFABLERESULTS: {
      console.log('1')
      let newarr: any[] = [];
      if (action.results!==null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr
      };
    }

    case GetBiographyResultsTypes.GETBIOGRAPHYRESULTS: {
      console.log('2')
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData:newarr
      };
    }

    default:
      return state;
  }
};
