import {
  AccountSignInTypes,
  IAccountCreatedAction,
  IAccountSignInAction,
  ILoggedBoxToggleAction,
  ISetUserAccountNameAction,
} from "./../Types/LoggedBoxTypes";
import {
  AccountCreatedTypes,
  LoggedBoxToggleTypes,
  SetUserAccountNameTypes,
} from "../Types/LoggedBoxTypes";

/* toggle loggedbox */
export const toggleLoggedBox = (value: boolean): ILoggedBoxToggleAction => ({
  type: LoggedBoxToggleTypes.LOGGEDBOXTOGGLE,
  value,
});

/* set account created position */
export const setAccountCreatePosition = (
  value: boolean
): IAccountCreatedAction => ({
  type: AccountCreatedTypes.ACCOUNTCREATED,
  value,
});

/* set user account name */
export const setUserAccountName = (
  name: string
): ISetUserAccountNameAction => ({
  type: SetUserAccountNameTypes.SETUSERACCOUNTNAME,
  name,
});

/* is sign-in in account */
export const setAccountSignIn = (value: boolean): IAccountSignInAction => ({
  type: AccountSignInTypes.ACCOUNTSIGNIN,
  value,
});
