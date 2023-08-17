import {
  createStore,
  applyMiddleware
} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import SignupReducer from "./cmp/Signup/Signup.reducer";

const Storage = createStore(SignupReducer,{},applyMiddleware(logger,thunk));

export default Storage;
