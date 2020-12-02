export enum isOpenShopTypes {
  ISOPENSHOP = "ISOPENSHOP",
}

export enum isCloseShopTypes {
  ISCLOSESHOP = "ISCLOSESHOP",
}

export enum hiddenContainerTypes {
  HIDDENCONTAINER = "HIDDENCONTAINER",
}

export enum showContainerTypes {
  SHOWCONTAINER = "SHOWCONTAINER",
}

export enum shopNameTypes {
  SHOPNAME = "SHOPNAME",
}

export enum FilterByValueTypes {
  FILTERBYVALUE = "FILTERBYVALUE",
}

/* interfaces */
export interface IFilterByValueAction {
  type: FilterByValueTypes.FILTERBYVALUE
  name: string;
}

export interface IShopNameAction {
  type: shopNameTypes.SHOPNAME;
  name: string;
}

export interface IShowContainerAction {
  type: showContainerTypes.SHOWCONTAINER;
  value: boolean;
}

export interface IOpenShopAction {
  type: isOpenShopTypes.ISOPENSHOP;
  value: boolean;
}

export interface ICloseShopAction {
  type: isCloseShopTypes.ISCLOSESHOP;
  value: boolean;
}

export interface IHiddenContainerAction {
  type: hiddenContainerTypes.HIDDENCONTAINER;
  value: boolean;
}

export type shopStateActions =
  | IOpenShopAction
  | IHiddenContainerAction
  | IShowContainerAction
  | ICloseShopAction
  | IShopNameAction
  | IFilterByValueAction;

export interface IShopState {
  isShopOpen: boolean;
  isHiddenContainer: boolean;
  shopName: string;
  filterByValue: string;
}
