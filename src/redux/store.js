import { createStore, combineReducers, applyMiddleware } from "redux";
import PhotoReducer from "./PhotoReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ PhotoReducer }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
