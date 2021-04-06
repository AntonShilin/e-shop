import { closeSearchPanelLarge } from "../Actions/SearchMenuActions";
import {
  closeSearchPanelLargeTypes,
  getSearchPanelElementTypes,
  ISearchMenuState,
  openSearchPanelLargeTypes,
  searchMenuActions,
  searchValueTypes,
} from "../Types/SearchMenuTypes";

const searchMenuState: ISearchMenuState = {
  value: "",
  isOpenSearchPanelLarge: false,
  node:  null,
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

    case getSearchPanelElementTypes.GETSEARCHPANELELEMENT: {
      return {
        ...state,
        node: action.node,
      };
    }

    default:
      return state;
  }
};
