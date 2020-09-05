export enum OpenHeaderSearchPanelTypes {
  OPENHEADERSEARCHPANEL = "OPENHEADERSEARCHPANEL",
}

export enum CloseHeaderSearchPanelTypes {
  CLOSEHEADERSEARCHPANEL = "CLOSEHEADERSEARCHPANEL",
}

export enum ToggleSmallScreenSubmenuTypes {
  TOGGLESMALLSCREENSUBMENU = "TOGGLESMALLSCREENSUBMENU",
}

/* action interfaces */
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

export type HeaderSearchPanelActions =
  | IOpenHeaderSearchPanelAction
  | ICloseHeaderSearchPanelAction
  | IToggleSmallScreenSubmenuAction;

export interface IHeaderSearchPanelState {
  isOpen: boolean;
  isToggle: boolean;
}
