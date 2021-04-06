import {
  closeSearchPanelLargeTypes,
  getSearchPanelElementTypes,
  openSearchPanelLargeTypes,
  searchValueTypes,
} from "../Types/SearchMenuTypes";

/*value from search menu input*/
export const getSearchValue = (name: string) => ({
  type: searchValueTypes.SEARCHVALUE,
  value: name,
});

/*open search panel on large screen*/
export const openSearchPanelLarge = (
  value: boolean,
  elem: HTMLDivElement,
  width: number,
  color: string
) => {
  animationSearchPanel(elem, width, color);
  return {
    type: openSearchPanelLargeTypes.OPENSEARCHPANELLARGE,
    position: value,
  };
};

/*close search panel on large screen*/
export const closeSearchPanelLarge = (
  value: boolean,
  elem: HTMLDivElement,
  width: number,
  color: string
) => {
  animationSearchPanel(elem, width, color);
  return {
    type: closeSearchPanelLargeTypes.CLOSESEARCHPANELLARGE,
    position: value,
  };
};

/* animation for open/close search panel on large devices */
const animationSearchPanel = (
  elem: HTMLDivElement,
  w: number,
  color: string
) => {
  elem.style.transition = "width .7s";
  elem.style.width = w + "rem";
  if (color === "transparent") {
    setTimeout(() => {
      elem.style.backgroundColor = color;
    }, 1000);
  } else {
    elem.style.backgroundColor = color;
  }
};


/* get search panel element */
export const getSearchPanelElement = (node:HTMLDivElement) => {
  return {
    type: getSearchPanelElementTypes.GETSEARCHPANELELEMENT,
    node
  }
}