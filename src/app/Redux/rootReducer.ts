import { combineReducers } from "@reduxjs/toolkit";
import {counterReducer} from "./Slice/counterSlice";

export default combineReducers({
    counter :counterReducer
})