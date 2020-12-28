import { LoggedBoxToggleTypes } from "../Types/LoggedBoxTypes";



/* toggle loggedbox */
export const toggleLoggedBox = (value: boolean) => ({
    type: LoggedBoxToggleTypes.LOGGEDBOXTOGGLE,
    value
  })