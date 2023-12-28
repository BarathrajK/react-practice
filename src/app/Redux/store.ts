import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const store = configureStore({
    reducer: rootReducer
})

export default store;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
