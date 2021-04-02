import {
  closeSearchPanelLargeTypes,
  openSearchPanelLargeTypes,
  searchValueTypes,
} from "../Types/SearchMenuTypes";

/*value from search menu input*/
export const getSearchValue = (name: string) => ({
  type: searchValueTypes.SEARCHVALUE,
  value: name,
});

/*open search panel on large screen*/
export const openSearchPanelLarge = (value: boolean) => ({
  type: openSearchPanelLargeTypes.OPENSEARCHPANELLARGE,
  position: value,
});

/*close search panel on large screen*/
export const closeSearchPanelLarge = (value: boolean) => ({
  type: closeSearchPanelLargeTypes.CLOSESEARCHPANELLARGE,
  position: value,
});
