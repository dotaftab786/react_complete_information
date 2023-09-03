import {
  createStore,
  applyMiddleware,
  combineReducers
} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import SignupReducer from "./cmp/Signup/Signup.reducer";
import LoginReducer from "./cmp/Login/Login.reducer";

const root = combineReducers({
  LoginReducer,
  SignupReducer
});

const Storage = createStore(root,{},applyMiddleware(logger,thunk));

export default Storage;
