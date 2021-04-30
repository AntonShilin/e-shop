import { AccountCreatedTypes, LoggedBoxToggleTypes } from "../Types/LoggedBoxTypes";



/* toggle loggedbox */
export const toggleLoggedBox = (value: boolean) => ({
    type: LoggedBoxToggleTypes.LOGGEDBOXTOGGLE,
    value
})
  
/* set account created position */
export const setAccountCreatePosition = (value: boolean) => ({
  type: AccountCreatedTypes.ACCOUNTCREATED,
  value
})