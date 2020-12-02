import {
  FilterByValueTypes,
  hiddenContainerTypes,
  isCloseShopTypes,
  isOpenShopTypes,
  shopNameTypes,
} from "../Types/ShopTypes";

/* open shopAllContainer*/
export const isOpenShop = () => ({
  type: isOpenShopTypes.ISOPENSHOP,
  value: true
});

/*close shopAllContainer*/
export const closeShop = () => ({
  type: isCloseShopTypes.ISCLOSESHOP,
  value: false
});

/* hide another containers except shopAllContainer*/
export const hiddenContainer = () => ({
  type: hiddenContainerTypes.HIDDENCONTAINER,
  value: false
});

/* show another containers except shopAllContainer*/
export const showContainer = () => ({
  type: hiddenContainerTypes.HIDDENCONTAINER,
  value: true
});

/* select shop name */
export const selectShopName = (name:string) => ({
  type: shopNameTypes.SHOPNAME,
  name
});

/* filter books by select value in selectBox container*/
export const filterBySelectValue = (name:string) => ({
  type: FilterByValueTypes.FILTERBYVALUE,
  name
});
