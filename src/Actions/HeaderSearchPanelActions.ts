import {
  IOpenHeaderSearchPanelAction,
  OpenHeaderSearchPanelTypes,
  ICloseHeaderSearchPanelAction,
  CloseHeaderSearchPanelTypes,
  ToggleSmallScreenSubmenuTypes,
} from "../Types/HeaderSearchPanelTypes";

/* open header serach panel */
export const openHeaderSearchPanel = (): IOpenHeaderSearchPanelAction => ({
  type: OpenHeaderSearchPanelTypes.OPENHEADERSEARCHPANEL,
  value: true,
});

/* close header serach panel */
export const closeHeaderSearchPanel = (): ICloseHeaderSearchPanelAction => ({
  type: CloseHeaderSearchPanelTypes.CLOSEHEADERSEARCHPANEL,
  value: false,
});

/* toggle small screen submenu */
export const toggleSmallScreenSubmenu = (value:boolean) => ({
  type: ToggleSmallScreenSubmenuTypes.TOGGLESMALLSCREENSUBMENU,
  isToggle: !value,
});
