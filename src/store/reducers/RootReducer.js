import { combineReducers } from "redux";
import {DBReducer} from './DBReducer'
import { AuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({
    DBReducer,
    AuthReducer
})

export default rootReducer;