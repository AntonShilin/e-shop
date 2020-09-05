import { IOpenHeaderSearchPanelAction, OpenHeaderSearchPanelTypes } from "../Types/HeaderSearchPanelTypes";

/* open header serach panel */
export const openHeaderSearchPanel = () => ({
    type: OpenHeaderSearchPanelTypes.OPENHEADERSEARCHPANEL,
    value: true
  });