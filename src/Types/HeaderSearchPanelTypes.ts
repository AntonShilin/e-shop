export enum OpenHeaderSearchPanelTypes {
    OPENHEADERSEARCHPANEL = "OPENHEADERSEARCHPANEL"
}

/* action interfaces */
export interface IOpenHeaderSearchPanelAction {
    type: OpenHeaderSearchPanelTypes.OPENHEADERSEARCHPANEL;
    value: boolean;
}
  
export type HeaderSearchPanelActions = IOpenHeaderSearchPanelAction;

export interface IHeaderSearchPanelState {
    isOpen: boolean;
}