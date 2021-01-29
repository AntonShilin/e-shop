import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { filterByPriceReducer } from "../Reducers/FilterByPriceReducer";
import { filterByYearReducer } from "../Reducers/FilterByYearReducer";
import { headerPanelReducer } from "../Reducers/HeaderPanelReducer";
import { loggedBoxReducer } from "../Reducers/LoggedBoxReducer";
import { mainStateReducer } from "../Reducers/MainStateReducer";
import { shopReducer } from "../Reducers/ShopReducer";


const rootReducer = combineReducers({
  headerSearchPanel: headerPanelReducer,
  data: mainStateReducer,
  shopContainer: shopReducer,
  loggedBox: loggedBoxReducer,
  filterByPrice: filterByPriceReducer,
  filterByYear: filterByYearReducer
});

export type IApplicationState = ReturnType<typeof rootReducer>

export default function configureStore(){
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  store.subscribe(() => console.log("Store subscribe",store.getState()))
  return store;
}