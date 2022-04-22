import { combineReducers } from "redux";

import questionReduser from "./question";

const rootReduser = combineReducers({
  questionReduser,
})

export default rootReduser;