import { hiddenContainerTypes, isOpenShopTypes } from "../Types/ShopTypes";

/* open shopAllContainer*/
export const isOpenShop = () => ({
    type: isOpenShopTypes.ISOPENSHOP,
   value:true
})
  
/* hide another containers except shopAllContainer*/
export const hiddenContainer = () => ({
    type: hiddenContainerTypes.HIDDENCONTAINER,
    value:false
})