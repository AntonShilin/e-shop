import {
  IOpenHeaderSearchPanelAction,
  OpenHeaderSearchPanelTypes,
  ICloseHeaderSearchPanelAction,
  CloseHeaderSearchPanelTypes,
  ToggleSmallScreenSubmenuTypes, SelectIdGenreInSubmenuTypes, ISelectIdGenreInSubmenuAction, IToggleSmallScreenSubmenuAction, IOpenSelectedGenreAction, OpenSelectedGenreTypes, ICloseSelectedGenreAction, CloseSelectedGenreTypes
} from "../Types/HeaderPanelTypes";

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
export const toggleSmallScreenSubmenu = (value:boolean):IToggleSmallScreenSubmenuAction => ({
  type: ToggleSmallScreenSubmenuTypes.TOGGLESMALLSCREENSUBMENU,
  isToggle: !value,
});

/* select id genre in submenu */
export const selectIdGenreInSubmenu = (n: number):ISelectIdGenreInSubmenuAction => ({
  type: SelectIdGenreInSubmenuTypes.SELECTIDGENREINSUBMENU,
  id: n,
});

/* open selectedGenre container*/
export const openSelectedGenre = (value:boolean):IOpenSelectedGenreAction => ({
  type: OpenSelectedGenreTypes.OPENSELECTEDGENRE,
    value
})

/* close selectedGenre container*/
export const closeSelectedGenre = (value:boolean):ICloseSelectedGenreAction => ({
  type: CloseSelectedGenreTypes.CLOSESELECTEDGENRE,
    value
})

