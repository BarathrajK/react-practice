import { combineReducers } from "@reduxjs/toolkit";
import {counterReducer} from "./Slice/counterSlice";
import { getUsersReducer } from "./Slice/UserSlice";

export default combineReducers({
    counter :counterReducer,
    getUsers : getUsersReducer
})