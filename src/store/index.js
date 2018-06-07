import { createStore } from "redux";
import rooterReducer from "../reducers";
import thunk from "redux-thunk";
const store = createStore(rooterReducer, applyMiddleware(thunk));
export default store;
