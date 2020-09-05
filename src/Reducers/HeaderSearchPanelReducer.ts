import {
  IHeaderSearchPanelState,
  HeaderSearchPanelActions,
  OpenHeaderSearchPanelTypes,
  CloseHeaderSearchPanelTypes,
  ToggleSmallScreenSubmenuTypes,
} from "../Types/HeaderSearchPanelTypes";

const headerSearchPanelState: IHeaderSearchPanelState = {
    isOpen: false,
    isToggle: false
};

export const headerSearchPanelReducer = (
  state: IHeaderSearchPanelState = headerSearchPanelState,
  action: HeaderSearchPanelActions
) => {
  switch (action.type) {
    case OpenHeaderSearchPanelTypes.OPENHEADERSEARCHPANEL: {
      return {
          ...state,
          isOpen: action.value
      };
      }
          
      case CloseHeaderSearchPanelTypes.CLOSEHEADERSEARCHPANEL: {
        return {
            ...state,
            isOpen: action.value
        };
      }
          
        case ToggleSmallScreenSubmenuTypes.TOGGLESMALLSCREENSUBMENU: {
          return {
              ...state,
              isToggle: action.isToggle   
          }
      }
          
    default:
      return state;
  }
};
