import { closeSearchPanelLarge } from "../Actions/SearchMenuActions";
import {
  closeSearchPanelLargeTypes,
  ISearchMenuState,
  openSearchPanelLargeTypes,
  searchMenuActions,
  searchValueTypes,
} from "../Types/SearchMenuTypes";

const searchMenuState: ISearchMenuState = {
  value: "",
  isOpenSearchPanelLarge: false,
};

export const searchMenuReducer = (
  state: ISearchMenuState = searchMenuState,
  action: searchMenuActions
): ISearchMenuState => {
  switch (action.type) {
    case searchValueTypes.SEARCHVALUE: {
      return {
        ...state,
        value: action.value,
      };
    }

    case openSearchPanelLargeTypes.OPENSEARCHPANELLARGE: {
      return {
        ...state,
        isOpenSearchPanelLarge: action.position,
      };
    }

    case closeSearchPanelLargeTypes.CLOSESEARCHPANELLARGE: {
      return {
        ...state,
        isOpenSearchPanelLarge: action.position,
      };
    }

    default:
      return state;
  }
};
