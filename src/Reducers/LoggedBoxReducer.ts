import { ILoggedBoxState, loggedBoxStateActions, LoggedBoxToggleTypes } from "../Types/LoggedBoxTypes";

  
  const loggedBoxState: ILoggedBoxState = {
    isLoggedBoxOpen: false
  };
  
  export const loggedBoxReducer = (
    state: ILoggedBoxState = loggedBoxState,
    action: loggedBoxStateActions
  ): ILoggedBoxState => {
    switch (action.type) {
  
      case LoggedBoxToggleTypes.LOGGEDBOXTOGGLE: {
        return {
          ...state,
          isLoggedBoxOpen: action.value,
        };
      }
  
      default:
        return state;
    }
  };
  