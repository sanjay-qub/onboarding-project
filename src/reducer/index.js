
import FormReducer from "./FormReducer";
import Name_Reducer from "./Name_Reducer";
import Pin_Reducer from "./Pin_Reducer";


import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,Name_Reducer,Pin_Reducer,FormReducer

});
export default rootReducer;