import { combineReducers } from "@reduxjs/toolkit";
import {counterReducer} from "./Slice/counterSlice";
import { userReducer } from "./Slice/UserSlice";

export default combineReducers({
    counter :counterReducer,
    users : userReducer
})