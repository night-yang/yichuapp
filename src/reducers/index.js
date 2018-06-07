import articles from "./article";
import ponsers from "./ponser";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  articles,
  ponsers
});

export default rootReducer;
