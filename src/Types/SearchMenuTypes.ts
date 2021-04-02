export enum searchValueTypes {
  SEARCHVALUE = "SEARCHVALUE",
}

export enum openSearchPanelLargeTypes {
  OPENSEARCHPANELLARGE = "OPENSEARCHPANELLARGE",
}

export enum closeSearchPanelLargeTypes {
  CLOSESEARCHPANELLARGE = "CLOSESEARCHPANELLARGE",
}



/* interfaces */

export interface IOpenSearchPanelLargeAction {
  type: openSearchPanelLargeTypes.OPENSEARCHPANELLARGE;
  position: boolean;
}

export interface ICloseSearchPanelLargeAction {
  type: closeSearchPanelLargeTypes.CLOSESEARCHPANELLARGE;
  position: boolean;
}

export interface ISearchValueAction {
  type: searchValueTypes.SEARCHVALUE;
  value: string;
}

export type searchMenuActions =
  | ISearchValueAction
  | IOpenSearchPanelLargeAction
  | ICloseSearchPanelLargeAction;

export interface ISearchMenuState {
  value: string;
  isOpenSearchPanelLarge: boolean;
}
