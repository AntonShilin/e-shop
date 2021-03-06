import {
  IHeaderPanelState,
  HeaderPanelActions,
  OpenHeaderSearchPanelTypes,
  CloseHeaderSearchPanelTypes,
  ToggleSmallScreenSubmenuTypes,
  SelectIdGenreInSubmenuTypes,
  OpenSelectedGenreTypes,
  CloseSelectedGenreTypes,
} from "../Types/HeaderPanelTypes";

const headerPanelState: IHeaderPanelState = {
  isOpen: false,
  isToggle: false,
  id: 0,
  isOpenSelectedGenre: false,
};

export const headerPanelReducer = (
  state: IHeaderPanelState = headerPanelState,
  action: HeaderPanelActions
): IHeaderPanelState => {
  switch (action.type) {
    case OpenHeaderSearchPanelTypes.OPENHEADERSEARCHPANEL: {
      return {
        ...state,
        isOpen: action.value,
      };
    }

    case CloseHeaderSearchPanelTypes.CLOSEHEADERSEARCHPANEL: {
      return {
        ...state,
        isOpen: action.value,
      };
    }

    case ToggleSmallScreenSubmenuTypes.TOGGLESMALLSCREENSUBMENU: {
      return {
        ...state,
        isToggle: action.isToggle,
      };
    }

    case SelectIdGenreInSubmenuTypes.SELECTIDGENREINSUBMENU: {
      return {
        ...state,
        id: action.id,
      };
    }

    case OpenSelectedGenreTypes.OPENSELECTEDGENRE: {
      return {
        ...state,
        isOpenSelectedGenre: action.value,
      };
    }

    case CloseSelectedGenreTypes.CLOSESELECTEDGENRE: {
      return {
        ...state,
        isOpenSelectedGenre: action.value,
      };
    }


    default:
      return state;
  }
};
