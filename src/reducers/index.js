import articles from "./article";
import ponser from "./ponser";
import replay from "./replay";
import chat from "./chat";
import topic from "./topic";
import table from "./table";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  articles,
  ponser,
  replay,
  chat,
  topic,
  table
});

export default rootReducer;
