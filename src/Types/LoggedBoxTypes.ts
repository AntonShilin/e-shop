export enum LoggedBoxToggleTypes {
  LOGGEDBOXTOGGLE = "LOGGEDBOXTOGGLE",
}

export enum AccountCreatedTypes {
  ACCOUNTCREATED = "ACCOUNTCREATED",
}

/* interfaces */
export interface IAccountCreatedAction {
  type: AccountCreatedTypes.ACCOUNTCREATED;
  value: boolean;
}

export interface ILoggedBoxToggleAction {
  type: LoggedBoxToggleTypes.LOGGEDBOXTOGGLE;
  value: boolean;
}

export type loggedBoxStateActions =
  | ILoggedBoxToggleAction
  | IAccountCreatedAction;

export interface ILoggedBoxState {
  isLoggedBoxOpen: boolean;
  isAccountCreated: boolean;
}
