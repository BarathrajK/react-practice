import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserModel, userFormModel } from "../../Model/UserModel";

const baseUrl = "http://127.0.0.1:5050/";

//get users:-

export const getUsers = createAsyncThunk('users/get', async () => {

    try {
        const res = await axios.get(`${baseUrl}user`);
        return res.data;
    }
    catch (error: any) {
        return error.res.data;
    }
});

// create Employee :-

export const createUser = createAsyncThunk('users/create', async (params: userFormModel) => {
    try {
        const res = await axios.post(`${baseUrl}user`, params);
        return res.data;
    }
    catch (error: any) {
        return error.res.data;
    }
})
