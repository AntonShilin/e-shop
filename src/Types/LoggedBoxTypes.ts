export enum LoggedBoxToggleTypes {
  LOGGEDBOXTOGGLE = "LOGGEDBOXTOGGLE",
}

/* interfaces */
export interface ILoggedBoxToggleAction {
  type: LoggedBoxToggleTypes.LOGGEDBOXTOGGLE;
  value: boolean;
}

export type loggedBoxStateActions = ILoggedBoxToggleAction;

export interface ILoggedBoxState {
  isLoggedBoxOpen: boolean;
}
