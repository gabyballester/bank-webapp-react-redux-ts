import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
// en la constante reducers, combinamos cada reducer
const reducers = combineReducers({
  //asginamos cada valor a una clave
  bank: bankReducer,
});

export default reducers;
