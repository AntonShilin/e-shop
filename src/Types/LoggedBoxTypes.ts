export enum LoggedBoxToggleTypes {
  LOGGEDBOXTOGGLE = "LOGGEDBOXTOGGLE",
}

export enum AccountCreatedTypes {
  ACCOUNTCREATED = "ACCOUNTCREATED",
}

export enum SetUserAccountNameTypes {
  SETUSERACCOUNTNAME = "SETUSERACCOUNTNAME",
}

export enum AccountSignInTypes{
  ACCOUNTSIGNIN="ACCOUNTSIGNIN"
}

/* interfaces */
export interface IAccountSignInAction{
  type: AccountSignInTypes.ACCOUNTSIGNIN;
  value: boolean;
}

export interface ISetUserAccountNameAction {
  type: SetUserAccountNameTypes.SETUSERACCOUNTNAME;
  name: string;
}

export interface IAccountCreatedAction {
  type: AccountCreatedTypes.ACCOUNTCREATED;
  value: boolean;
}

export interface ILoggedBoxToggleAction {
  type: LoggedBoxToggleTypes.LOGGEDBOXTOGGLE;
  value: boolean;
}

export type loggedBoxStateActions =
  |IAccountSignInAction
  |ISetUserAccountNameAction
  | ILoggedBoxToggleAction
  | IAccountCreatedAction;

export interface ILoggedBoxState {
  isLoggedBoxOpen: boolean;
  isAccountCreated: boolean;
  userName: string;
  isAccountSignIn: boolean;
}
