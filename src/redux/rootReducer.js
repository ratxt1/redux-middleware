import { increment } from "./actions";
import { createReducer, combineReducers } from "redux-starter-kit";

const count = createReducer(0, {
  [increment]: (state, action) => state + action.payload
});
const rootReducer = combineReducers({ count });

export default rootReducer;
