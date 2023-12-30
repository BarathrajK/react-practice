import { createSlice } from "@reduxjs/toolkit";
import { getUsers , createUser } from "../Thunks/UserThunks";
import { UserModel } from "../../Model/UserModel";

const initialState = {
    users: [] as UserModel[],
    user: {} as UserModel,
    loading: false,
    error: null as any,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    // getusers:-

    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.loading = false;
                    state.users = action.payload.data;
                }
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // createUsers:-
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const getUsersReducer = userSlice.reducer;
