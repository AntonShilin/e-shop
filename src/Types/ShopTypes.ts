export enum isOpenShopTypes {
  ISOPENSHOP = "ISOPENSHOP",
}

export enum hiddenContainerTypes {
  HIDDENCONTAINER = "HIDDENCONTAINER",
}

/* interfaces */
export interface IOpenShopAction {
  type: isOpenShopTypes.ISOPENSHOP;
  value: boolean;
}

export interface IHiddenContainerAction {
  type: hiddenContainerTypes.HIDDENCONTAINER;
  value: boolean;
}

export type shopStateActions = IOpenShopAction | IHiddenContainerAction;

export interface IShopState {
  isShopOpen: boolean;
  isHiddenContainer: boolean;
}
