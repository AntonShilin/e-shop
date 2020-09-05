import {
  IHeaderSearchPanelState,
  HeaderSearchPanelActions,
  OpenHeaderSearchPanelTypes,
} from "../Types/HeaderSearchPanelTypes";

const headerSearchPanelState: IHeaderSearchPanelState = {
  isOpen: false,
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

    default:
      return state;
  }
};
