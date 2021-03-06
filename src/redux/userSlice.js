import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const updateUser2 = createAsyncThunk("users/update", async (user) => {
    const res = await axios.post("http:///localhost:5000/users/update", user);
    return res.data;
});

export const deleteUser2 = createAsyncThunk("users/update", async (user) => {
    const res = await axios.delete("http:///localhost:5000/users/update", user);
    return res.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Dinesh",
            email: "dinesh@gmail.com",
        }
    },
    pending: null,
    error: false,
    // reducers: {
    //     updateStart: (state) => {
    //         state.pending = true;
    //     },
    //     updateSuccess: (state, action) => {
    //         state.pending = false;
    //         state.userInfo = action.payload;
    //     },
    //     updateError: (state) => {
    //         state.error = true;
    //         state.pending = false;
    //     }
    // },
    reducers: {},
    extraReducers: {
        [updateUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser2.fulfilled]: (state, action)=> {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [updateUser2.rejected]: (state) => {
            state.pending = false;
            state.error = true;
        },
        
        [deleteUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [deleteUser2.fulfilled]: (state, action)=> {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [deleteUser2.rejected]: (state) => {
            state.pending = null;
            state.error = true;
        }
    }
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;