import { combineReducers } from "redux";
import userReducer from "./reducer";

const rootreducer = combineReducers({
  user: userReducer,
});

export default rootreducer;
