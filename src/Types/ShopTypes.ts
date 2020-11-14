export enum isOpenShopTypes {
  ISOPENSHOP = "ISOPENSHOP",
}

export interface IOpenShopAction {
    type: isOpenShopTypes.ISOPENSHOP;
    value: boolean;
}

export type shopStateActions = IOpenShopAction;

export interface IShopState {
  isShopOpen: boolean;
}
