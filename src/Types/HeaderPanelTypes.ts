export enum OpenHeaderSearchPanelTypes {
  OPENHEADERSEARCHPANEL = "OPENHEADERSEARCHPANEL",
}

export enum CloseHeaderSearchPanelTypes {
  CLOSEHEADERSEARCHPANEL = "CLOSEHEADERSEARCHPANEL",
}

export enum ToggleSmallScreenSubmenuTypes {
  TOGGLESMALLSCREENSUBMENU = "TOGGLESMALLSCREENSUBMENU",
}

export enum SelectIdGenreInSubmenuTypes{
SELECTIDGENREINSUBMENU="SELECTIDGENREINSUBMENU"
}

export enum OpenSelectedGenreTypes {
  OPENSELECTEDGENRE="OPENSELECTEDGENRE"
}

export enum CloseSelectedGenreTypes {
  CLOSESELECTEDGENRE="CLOSESELECTEDGENRE"
}

export enum ClientWidthTypes {
  CLIENTWIDTH="CLIENTWIDTH"
}

/* action interfaces */
export interface IClientWidthAction{
  type: ClientWidthTypes.CLIENTWIDTH;
  num: number;
}

export interface ICloseSelectedGenreAction{
  type: CloseSelectedGenreTypes.CLOSESELECTEDGENRE;
  value: boolean;
}

export interface IOpenSelectedGenreAction{
  type: OpenSelectedGenreTypes.OPENSELECTEDGENRE;
  value: boolean;
}


export interface ISelectIdGenreInSubmenuAction {
  type: SelectIdGenreInSubmenuTypes.SELECTIDGENREINSUBMENU;
  id:number;
}

export interface IToggleSmallScreenSubmenuAction {
  type: ToggleSmallScreenSubmenuTypes.TOGGLESMALLSCREENSUBMENU;
  isToggle: boolean;
}

export interface IOpenHeaderSearchPanelAction {
  type: OpenHeaderSearchPanelTypes.OPENHEADERSEARCHPANEL;
  value: boolean;
}

export interface ICloseHeaderSearchPanelAction {
  type: CloseHeaderSearchPanelTypes.CLOSEHEADERSEARCHPANEL;
  value: boolean;
}

export type HeaderPanelActions =
  | ICloseSelectedGenreAction
  | IOpenSelectedGenreAction
  | ISelectIdGenreInSubmenuAction
  | IOpenHeaderSearchPanelAction
  | ICloseHeaderSearchPanelAction
  | IToggleSmallScreenSubmenuAction
  | IClientWidthAction;

export interface IHeaderPanelState {
  isOpen: boolean;
  isToggle: boolean;
  id: number;
  isOpenSelectedGenre: boolean;
  clientWidth: number;
}
