import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
  reducers,
  {}, //store, empty object
  applyMiddleware(thunk)
);
