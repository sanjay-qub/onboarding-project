import Name_Reducer from "./Name_Reducer";
import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,Name_Reducer

});
export default rootReducer;