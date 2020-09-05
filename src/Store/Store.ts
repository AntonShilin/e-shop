import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { headerSearchPanelReducer } from "../Reducers/HeaderSearchPanelReducer";


const rootReducer = combineReducers({
  headerSearchPanel: headerSearchPanelReducer
});

export type IApplicationState = ReturnType<typeof rootReducer>

export default function configureStore(){
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  store.subscribe(() => console.log("Store subscribe",store.getState()))
  return store;
}