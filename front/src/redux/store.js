import { createstore , combineReducers } from "redux";
import hoverReducer from './hoverReducer.js'

export default createstore(hoverReducer);
