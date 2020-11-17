import {
  IMainState,
  MainStateActions,
  GetFableResultsTypes,
  GetBiographyResultsTypes,
  GetStoryResultsTypes,
  GetBestsellersResultsTypes,
  GetFictionResultsTypes,
  GetArtResultsTypes,
  GetLifestyleResultsTypes,
} from "../Types/MainStateTypes";

const mainState: IMainState = {
  allGenresData: [],
  isLoading: false,
  genresName: ["fable", "biography", "story", "bestsellers", "fiction", "art", "lifestyle"]
};

export const mainStateReducer = (
  state: IMainState = mainState,
  action: MainStateActions
): IMainState => {
  switch (action.type) {
    case GetFableResultsTypes.GETFABLERESULTS: {
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr,
      };
    }

    case GetBiographyResultsTypes.GETBIOGRAPHYRESULTS: {
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr,
      };
    }

    case GetStoryResultsTypes.GETSTORYRESULTS: {
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr,
      };
    }

    case GetBestsellersResultsTypes.GETBESTSELLERSRESULTS: {
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr,
      };
    }

    case GetFictionResultsTypes.GETFICTIONRESULTS: {
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr,
      };
    }

    case GetArtResultsTypes.GETARTRESULTS: {
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr,
      };
    }
      
    case GetLifestyleResultsTypes.GETLIFESTYLERESULTS: {
      let newarr: any[] = [];
      if (action.results !== null) {
        newarr = [...state.allGenresData, action.results];
      }
      return {
        ...state,
        allGenresData: newarr,
      };
    }

    default:
      return state;
  }
};
