import {
  AccountSignInTypes,
  SetUserAccountNameTypes,
} from "./../Types/LoggedBoxTypes";
import {
  AccountCreatedTypes,
  ILoggedBoxState,
  loggedBoxStateActions,
  LoggedBoxToggleTypes,
} from "../Types/LoggedBoxTypes";

const loggedBoxState: ILoggedBoxState = {
  isLoggedBoxOpen: false,
  isAccountCreated: false,
  userName: "",
  isAccountSignIn: false,
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

    case AccountCreatedTypes.ACCOUNTCREATED: {
      return {
        ...state,
        isAccountCreated: action.value,
      };
    }

    case SetUserAccountNameTypes.SETUSERACCOUNTNAME: {
      return {
        ...state,
        userName: action.name,
      };
    }

    case AccountSignInTypes.ACCOUNTSIGNIN: {
      return {
        ...state,
        isAccountSignIn: action.value,
      };
    }

    default:
      return state;
  }
};
