import { createSlice } from "@reduxjs/toolkit";
import { getApi } from "./CreateAsyncThunk";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        main: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getApi.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.main = action.payload;
            })
            .addCase(getApi.rejected, (state) => {
                state.error = 'failed';
            });
    }
})

export default mainSlice.reducer