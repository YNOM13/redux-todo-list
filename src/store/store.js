import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  cash:cashReducer,
  customer: customerReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))