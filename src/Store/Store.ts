import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { headerPanelReducer } from "../Reducers/HeaderPanelReducer";
import { mainStateReducer } from "../Reducers/MainStateReducer";


const rootReducer = combineReducers({
  headerSearchPanel: headerPanelReducer,
  data: mainStateReducer
});

export type IApplicationState = ReturnType<typeof rootReducer>

export default function configureStore(){
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  store.subscribe(() => console.log("Store subscribe",store.getState()))
  return store;
}