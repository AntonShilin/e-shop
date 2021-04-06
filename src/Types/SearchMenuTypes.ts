export enum searchValueTypes {
  SEARCHVALUE = "SEARCHVALUE",
}

export enum openSearchPanelLargeTypes {
  OPENSEARCHPANELLARGE = "OPENSEARCHPANELLARGE",
}

export enum closeSearchPanelLargeTypes {
  CLOSESEARCHPANELLARGE = "CLOSESEARCHPANELLARGE",
}

export enum getSearchPanelElementTypes {
  GETSEARCHPANELELEMENT="GETSEARCHPANELELEMENT"
}


/* interfaces */
export interface IGetInputElementAction{
  type: getSearchPanelElementTypes.GETSEARCHPANELELEMENT;
  node: HTMLDivElement;
}

export interface IOpenSearchPanelLargeAction {
  type: openSearchPanelLargeTypes.OPENSEARCHPANELLARGE;
  position: boolean;
  elem: HTMLDivElement;
  elem_width: number;
  color: string;
}

export interface ICloseSearchPanelLargeAction {
  type: closeSearchPanelLargeTypes.CLOSESEARCHPANELLARGE;
  position: boolean;
  elem: HTMLDivElement;
  elem_width: number;
  color: string;
}

export interface ISearchValueAction {
  type: searchValueTypes.SEARCHVALUE;
  value: string;
}

export type searchMenuActions =
  |IGetInputElementAction
  | ISearchValueAction
  | IOpenSearchPanelLargeAction
  | ICloseSearchPanelLargeAction;

export interface ISearchMenuState {
  value: string;
  isOpenSearchPanelLarge: boolean;
  node: HTMLDivElement |null;
}
