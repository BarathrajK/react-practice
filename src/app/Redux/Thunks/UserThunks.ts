import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserModel, userFormModel } from "../../Model/UserModel";

const baseUrl = "http://127.0.0.1:5050/";

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImNvbXBhbnlJZCI6MSwibG9nZ2VkT24iOiIyMDIzLTEyLTMwVDA5OjQ4OjAwLjQyN1oiLCJpYXQiOjE3MDM5Mjk2ODAsImV4cCI6MTcwNTIyNTY4MH0.aLVr6W3nhJgQh0-AISaZTw4dhfYEDBcVCAnfAhezS6A"
const token = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

//get users:-

export const getUsers = createAsyncThunk("users/get", async () => {
  try {
    const res = await axios.get(`${baseUrl}user`,token);
    return res.data;
  } catch (error: any) {
    return error.res.data;
  }
});

// create User :-

export const createUser = createAsyncThunk(
  "users/create",
  async (params: userFormModel) => {
    try {
      const res = await axios.post(`${baseUrl}user`, params, token);
      return res.data;
    } catch (error: any) {
      return error.res.data;
    }
  }
);

// update Users :-

export const updateUser = createAsyncThunk(
    "users/update",
    async(params:userFormModel) =>{
        try{
            const res = await axios.put(`${baseUrl}user` ,params,token);
            return res.data;
        }
        catch (error:any){
            return error.res.data;
        }
    }
);
